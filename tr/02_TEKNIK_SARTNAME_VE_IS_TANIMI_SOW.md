# Ek A: Teknik Şartname ve İş Tanımı Belgesi (SOW)

**Belge Referans No:** SOW-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001  
**Proje Adı:** OmniStore SaaS ve Birleşik E-Ticaret Motoru  

---

## 1. PROJE AMACI VE YÖNETİCİ ÖZETİ

İşbu Teknik Şartname ve İş Tanımı Belgesi ("SOW"), **OmniStore SaaS ve Birleşik E-Ticaret Motoru** platformunun mimari tasarımı, fonksiyonel gereksinimleri, teknik özellikleri, teslimat kilometre taşları ve kabul kriterlerini belirler.

Müşteri (**ApexRetail**), web, mobil (iOS/Android) ve sosyal ticaret kanallarında aylık 10 milyondan fazla aktif kullanıcıya hizmet veren çok kanallı bir e-ticaret devidir. Hizmet Sağlayıcı (**CloudScale**); yüksek hacimli kampanya dönemlerinde (Efsane Cuma / Siber Hafta vb.) kesintisiz çalışan, saniyede 100.000 istek kaldırabilen, 100 milisaniye altı API yanıt süresi sunan ve veri kaybı yaşatmayan bulut yerel (cloud-native) ve "Headless" mikroservis mimarili bir arka ofis/motor platformu geliştirecektir.

---

## 2. SİSTEM MİMARİSİ VE TEKNOLOJİ YIĞINI

```
                          [ İstemci Katmanı: Web / iOS / Android / Pazaryeri ]
                                                   │ (TLS 1.3 HTTPS)
                                                   ▼
                                       [ Cloudflare Edge CDN & WAF ]
                                                   │
                                                   ▼
                                    [ Envoy API Gateway / GraphQL ]
                                                   │
               ┌────────────────────────┬──────────┴──────────┬────────────────────────┐
               │                        │                     │                        │
               ▼                        ▼                     ▼                        ▼
        ┌──────────────┐         ┌──────────────┐      ┌──────────────┐         ┌──────────────┐
        │ Katalog & PIM│         │ Sepet & Sipariş│    │ Stok Yönetim │         │ Ödeme        │
        │ Mikroservisi │         │ Orkestratörü │      │ Motoru       │         │ Orkestratörü │
        └──────┬───────┘         └──────┬───────┘      └──────┬───────┘         └──────┬───────┘
               │                        │                     │                        │
               └───────────┬────────────┴──────────┬──────────┴────────────────────────┘
                           │                       │
                           ▼                       ▼
               [ Apache Kafka Olay Yolu ]   [ Redis Cluster 7.x ]
                           │                       │
                           ▼                       ▼
            [ PostgreSQL 16 (Patroni HA) ]  [ OpenSearch Kümesi ]
```

### 2.1 Teknoloji Mimarisi Bileşenleri

*   **API Ağ Geçidi ve Giriş:** Envoy Proxy / Kong Enterprise API Gateway, GraphQL Mesh ve REST OpenAPI 3.1 uç noktaları.
*   **Mikroservis Çalışma Zamanı:** Yüksek I/O ve işlem gücü gerektiren servisler (Stok, Sepet, Ödeme) için Go (Golang 1.23+); karmaşık iş kuralları için Node.js (TypeScript / NestJS).
*   **Veritabanı ve Bellek Katmanı:**
    *   **İlişkisel Veritabanı:** Patroni ile yönetilen PostgreSQL 16 (HA yüksek erişilebilirlik, çoklu AZ replikasyonu, PgBouncer havuzlama).
    *   **Bellek İçi Önbellek ve Dağıtık Kilit:** Redis Cluster 7.2 (Stok rezervasyonu için Redlock dağıtık kilit algoritması).
    *   **Arama ve Filtreleme:** OpenSearch 2.14 / Elasticsearch (anlık indeksleme, Kafka CDC / Debezium üzerinden veri senkronizasyonu).
    *   **Olay Yolu ve Mesajlaşma:** Apache Kafka 3.7 (asenkron sipariş ve envanter olayları).
*   **Bulut Altyapısı ve Konteynerleşme:** Amazon EKS / Google GKE üzerinde Kubernetes, Karpenter ile dinamik node ölçekleme, Istio Service Mesh ve HashiCorp Vault / AWS KMS ile şifreli sır yönetimi.
*   **Gözlemlenebilirlik:** Datadog / Prometheus + Grafana, OpenTelemetry dağıtık izleme (tracing) ve merkezi SIEM denetim loglaması.

---

## 3. FONKSİYONEL MODÜLLER VE İŞ KAPSAMI

### 3.1 Katalog ve Ürün Bilgi Yönetimi (PIM)
*   **Kapasite:** 50.000 kategori altında 5.000.000 tekil SKU'ya kadar ürün saklama ve anlık indeksleme.
*   **Varyant ve Özellik Yönetimi:** Dinamik JSON-LD nitelik setleri, matris varyant üretimi (beden, renk, materyal), çoklu para birimi ve yerelleştirilmiş fiyatlama.
*   **Hızlı Arama:** 30 milisaniyenin altında tam metin, heceleme düzeltmeli ve çok kriterli filtreleme.

### 3.2 Gerçek Zamanlı Stok ve Çoklu Depo Tahsis Motoru
*   **Dağıtık Rezervasyon:** Sepete atılan ürünler için Redis tabanlı dağıtık kilit; ödeme tamamlanmazsa 15 dakika içinde otomatik serbest bırakma (TTL).
*   **Çok Kanallı Depo Yönlendirme:** 15 lojistik merkezi ve 120 fiziki mağaza stoğunu tek ekranda birleştirme (Mağazadan Teslimat - BOPIS desteği).
*   **Güvenlik Stoğu Koruması:** Flaş indirimlerde sanal aşırı satışı (overselling) engelleyen otomatik rezerv tamponu.

### 3.3 Sepet, Dinamik Kampanya ve Fiyatlandırma Motoru
*   **Kullanıcı Oturumları:** 500.000 eşzamanlı aktif sepeti performans kaybı olmaksızın yönetebilen önbellek mimarisi.
*   **Kural Motoru:** Kademeli indirimler, 3 Al 2 Öde, kupon kodları, sadakat puanları ve kişiselleştirilmiş VIP müşteri fiyatlarını 50 milisaniyenin altında hesaplama.

### 3.4 Dağıtık Ödeme Orkestratörü ve Akıllı Yönlendirme
*   **PCI-DSS SAQ-A Uyumlu:** Müşteri sunucularına asla ham kart verisi temas etmez. Hosted Fields ve tokenizasyon mimarisi.
*   **Akıllı Sanal POS Yönlendirme:** Kartın BIN numarasına, banka komisyon oranına ve POS çalışma durumuna göre en uygun ödeme kuruluşuna (Iyzico, Stripe, Garanti BBVA, Akbank, PayTR) anlık yönlendirme.
*   **Kesintisiz Fallback ve 3DS 2.0:** Bir banka POS'u yanıt vermediğinde işlemi otomatik olarak yedek sağlayıcıya aktarma; sürtünmesiz 3D-Secure 2.0 akışı.

### 3.5 Sipariş Yönetimi ve Entegrasyon Katmanı (OMS)
*   **Durum Makinesi (FSM):** Siparişin onaylanmasından kargolanmasına ve iadesine kadar her adımın durum makineleriyle takibi.
*   **ERP ve Kargo Entegrasyonları:** SAP S/4HANA / MS Dynamics 365 ile çift yönlü entegrasyon; Yurtiçi Kargo, Aras Kargo ve DHL kargo barkod ve takip entegrasyonları.

---

## 4. FONKSİYONEL OLMAYAN VE PERFORMANS KRİTERLERİ

| Metrik / Parametre | Hedef Değer | Ölçüm ve Doğrulama Metodu |
| :--- | :--- | :--- |
| **API Okuma Gecikmesi** | **P95 < 60ms**, **P99 < 120ms** (100.000 RPS yük altında) | k6 / Locust sentetik yük testleri |
| **API Yazma / Sepet Gecikmesi** | **P95 < 120ms**, **P99 < 250ms** (15.000 RPS yük altında) | k6 / Locust sentetik yük testleri |
| **Maksimum Zirve Trafik** | **100.000 İstek/Saniye** (4 saat boyunca kesintisiz) | Dağıtık stres ve yük testleri |
| **Sipariş Tamamlama Kapasitesi** | **Saatte 50.000 başarılı ödeme ve sipariş** | Uçtan uca ödeme otomasyon testleri |
| **Aylık Sistem Erişilebilirliği** | **≥ %99.95** (Normal aylar), **≥ %99.99** (Efsane Cuma) | CloudWatch & Datadog uptime monitörleri |
| **Kurtarma Noktası Hedefi (RPO)** | **≤ 15 dakika** | PostgreSQL WAL replikasyonu |
| **Kurtarma Süresi Hedefi (RTO)** | **≤ 1 saat** | Felaket senaryosu tatbikatı |
| **Güvenlik Standartları** | OWASP Top 10 sıfır kritik bulgu; ISO 27001; SOC 2 | Bağımsız sızma testi (Pen-test) raporu |

---

## 5. PROJE FAZLARI, KİLOMETRE TAŞLARI VE ZAMAN PLANI

Proje, Yürürlük Tarihinden itibaren toplam yirmi sekiz (28) takvim haftası içinde tamamlanacaktır:

```
1. Ay: Faz 1 [Mimari Tasarım & Bulut Kurulumu]
2-3. Ay: Faz 2 [Çekirdek Mikroservisler & Katalog]
4-5. Ay: Faz 3 [Sepet, Ödeme & ERP Entegrasyonları]
6. Ay: Faz 4 [Kabul Testleri, Yük Testi & Güvenlik]
7. Ay: Faz 5 [Canlıya Geçiş & Hiper Destek (Hypercare)]
```

### Kilometre Taşları Tablosu

| No | Kilometre Taşı Adı | Temel Çıktılar | Hedef Hafta | Hakediş Oranı (%) |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | Mimari Tasarım ve Bulut Altyapısı | Sistem Mimari Dokümanı, Terraform betikleri, CI/CD hatları | 4. Hafta | %15 |
| **M2** | Çekirdek Servisler ve PIM Motoru | PIM Mikroservisi, OpenSearch katalog, Kafka mimarisi, stok API'leri | 10. Hafta | %25 |
| **M3** | Sepet, Ödeme ve Entegrasyonlar | Sepet motoru, akıllı POS yönlendirici, OMS durum makinesi, ERP uçları | 18. Hafta | %25 |
| **M4** | Kabul Testleri ve Yük Simülasyonu | 150K RPS yük test raporu, bağımsız sızma testi onayı, UAT tutanağı | 24. Hafta | %20 |
| **M5** | Canlıya Geçiş ve Hiper Destek | Canlı trafik aktarımı, 30 günlük 7/24 yerinde hiper destek hizmeti | 28. Hafta | %15 |

---

## 6. KABUL TESTLERİ VE KRİTERLER

Her teslimatın kabulü **Ek G** (`08_KABUL_TESTI_VE_TESLIM_TUTANAGI_UAT.md`) çerçevesinde yürütülür:
1.  **Birim ve Entegrasyon Testleri:** Otomasyon testlerinde %85 ve üzeri kod kapsama oranı (code coverage).
2.  **Yük Testi Başarısı:** 150.000 RPS yük altında sistemin HTTP 5xx hata oranının %0.01'in altında kalması.
3.  **Güvenlik Uygunluğu:** Bağımsız sızma testinde Kritik (Critical) veya Yüksek (High) seviyeli güvenlik açığı bulunmaması.

---

## 7. KAPSAM DIŞI HUSUSLAR

Aşağıdaki işler bu şartname kapsamı dışındadır ve ek bir Değişiklik Protokolü gerektirir:
*   Fiziki depo içi konveyör bant ve robotik donanımların yazılım entegrasyonu.
*   Müşteri'nin eski ERP çekirdek kodlarının yazılması veya refaktör edilmesi.
*   Marka grafik tasarımı ve pazarlama görsel materyalleri (Müşteri Figma tasarımlarını hazır sunacaktır).
*   Madde 3.4'te sayılanlar dışındaki özel banka sistemlerinin geliştirilmesi.

---

## 8. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş. (Müşteri)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş. (Hizmet Sağlayıcı)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  
