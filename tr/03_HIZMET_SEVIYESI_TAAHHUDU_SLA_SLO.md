# Ek B: Hizmet Seviyesi Taahhüdü (SLA) ve Hizmet Seviyesi Hedefleri (SLO)

**Belge Referans No:** SLA-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001  
**Yürürlük Tarihi:** 1 Kasım 2026  

---

## 1. AMAÇ VE KAPSAM

İşbu Hizmet Seviyesi Taahhüdü ("SLA"), **CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş.** ("Hizmet Sağlayıcı") tarafından **ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş.** ("Müşteri") adına barındırılan ve yönetilen **OmniStore SaaS ve Birleşik E-Ticaret Motoru** altyapısının erişilebilirlik standartlarını, performans hedeflerini (SLI/SLO), arıza müdahale ve çözüm sürelerini, planlı bakım kurallarını ve SLA ihlali halinde uygulanacak Hizmet Kredisi (ceza/indirim) mekanizmasını düzenler.

---

## 2. TEMEL TANIMLAR

*   **Erişilebilirlik (Uptime / Çalışma Süresi):** İlgili takvim ayı içindeki toplam dakikaların, Canlı Üretim (Production) platformunun ve e-ticaret API'lerinin tüketicilere kesintisiz ve performans kaybı olmaksızın hizmet verdiği oran (%) olarak ifadesidir.
*   **Kesinti Süresi (Downtime / Outage):** Hizmet Sağlayıcı'nın kod hataları, altyapı arızası veya yönetilen sistem yetersizliği nedeniyle Müşteri'nin e-ticaret işlemlerini (katalog gezme, sepete ekleme, sipariş tamamlama ve ödeme alma) gerçekleştiremediği süre.
*   **Hizmet Seviyesi Göstergesi (SLI - Service Level Indicator):** Sistemin anlık operasyonel kalitesini ölçen sayısal veri (gecikme, hata oranı, yanıt süresi vb.).
*   **Hizmet Seviyesi Hedefi (SLO - Service Level Objective):** Bir SLI için 30 günlük kayan pencerede tutturulması gereken hedef güvenilirlik eşiği.
*   **Hata Bütçesi (Error Budget):** Belirli bir dönemde SLO hedefini ihlal etmeden tolere edilebilecek maksimum arıza payı (%100 - SLO).
*   **Hizmet Kredisi (Service Credit):** Taahhüt edilen SLA seviyesinin tutturulamaması durumunda, bir sonraki ayın yinelenen SaaS faturasından Müşteri lehine mahsup edilen cezai indirim tutarı.
*   **İlk Müdahale Süresi (MTTA - Mean Time to Acknowledge):** Bir arızanın izleme sistemleri veya Müşteri bildirimiyle tespit edilmesinden, nöbetçi mühendisin olaya resmi olarak müdahale etmeye başlamasına kadar geçen süre.
*   **Çözüm Süresi (MTTR - Mean Time to Resolve):** Arızaya müdahale anından, sistemin normal işleyişine tamamen dönmesine kadar geçen süre.

---

## 3. HİZMET SEVİYESİ HEDEFLERİ (SLO) VE GÖSTERGELERİ (SLI)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SLI / SLO GÜVENİLİRLİK PİRAMİDİ                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. Erişilebilirlik SLI: (Başarılı HTTP İstekleri / Toplam Geçerli İstek) * 100│
│    -> SLO Hedefi: ≥ %99.95 (Normal Aylar) | ≥ %99.99 (Efsane Cuma Zirvesi)  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. Gecikme SLI: API Ağ Geçidinden İstemciye Dönen Yanıt Süresi (ms)          │
│    -> SLO Hedefi: P95 < 60ms, P99 < 120ms (Okuma) | P95 < 150ms (Sepet/Ödeme)│
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. Sunucu Hata Oranı SLI: (HTTP 5xx Hataları / Toplam İstekler) * 100       │
│    -> SLO Hedefi: Herhangi 1 saatlik kayan pencerede ≤ %0.05                │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Erişilebilirlik Hedefleri ve İzin Verilen Kesinti Süreleri

| Ortam / Dönem | Aylık Taahhüt Edilen Uptime | Aylık İzin Verilen Max Kesinti | Yıllık İzin Verilen Max Kesinti |
| :--- | :--- | :--- | :--- |
| **Canlı Ortam (Normal Aylar)** | **%99.95** | **21.9 dakika** | **4.38 saat** |
| **Kampanya Zirvesi (Efsane Cuma / Siber Hafta)** | **%99.99** | **4.38 dakika** | **52.6 dakika** |
| **Test ve Kabul Ortamı (Staging / UAT)** | %99.00 | 7.3 saat | 87.6 saat |

### 3.2 Performans ve Yanıt Süresi (Latency) Hedefleri

100.000 İstek/Saniye (RPS) yük altında ölçülen gecikme üst sınırları:

*   **Ürün ve Katalog Detay API'leri (Okuma):** P95 < 60ms, P99 < 120ms.
*   **Arama ve Kategori Filtreleme API'leri:** P95 < 80ms, P99 < 150ms.
*   **Sepet Güncelleme ve Stok Ayırma (Yazma):** P95 < 120ms, P99 < 220ms.
*   **Ödeme ve Sipariş Onayı Handshake:** P95 < 350ms, P99 < 600ms (harici banka bekleme süreleri hariç).

---

## 4. ARIZA ÖNCELİK SEVİYELERİ VE MÜDAHALE SÜRELERİ

Hizmet Sağlayıcı; PagerDuty, merkezi Datadog alarmları ve özel Slack Connect kanalı üzerinden erişilebilen **7/24/365 kesintisiz nöbetçi mühendislik rotasyonu** bulunduracaktır.

| Seviye | Tanım ve Etki Kriteri | MTTA (İlk Yanıt) | MTTR (Hedef Çözüm) | Bilgilendirme Sıklığı |
| :--- | :--- | :--- | :--- | :--- |
| **P1 - Kritik** | **Tam Sistem Kesintisi veya Ticaretin Durması:** Ödeme motoru çalışmıyor; sepet kilitlendi; katalog açılmıyor; veri kaybı yaşanıyor; kritik güvenlik ihlali. | **≤ 15 dakika** (7/24/365) | **≤ 60 dakika** | 15 dakikada bir |
| **P2 - Yüksek** | **Önemli Fonksiyon Kaybı / Alternatifli Arıza:** Arama motoru çöktü (statik katalog devrede); ana POS çöktü ama yedek POS'a yönlendirildi; sipariş akışı %30'dan fazla yavaşladı. | **≤ 30 dakika** (7/24/365) | **≤ 4 saat** | Saatte bir |
| **P3 - Orta** | **Kısmi Bozulma / Minör Kusur:** Raporlama ekranı yavaş; kupon afişinde kozmetik görsel hatası; engelleyici olmayan idari panel hatası. | **≤ 2 saat** (Mesai Saatleri) | **≤ 24 saat** | Günde bir |
| **P4 - Düşük** | **Bilgi Talebi ve Konfigürasyon:** Nasıl yapılır soruları; dokümantasyon talepleri; küçük tasarım revizyonları; yeni özellik fikirleri. | **≤ 8 saat** (Mesai Saatleri) | **≤ 5 iş günü** | Aşama değişiminde |

---

## 5. HİZMET KREDİSİ (CEZA VE İNDİRİM) HESAPLAMA CETVELİ

Canlı platformun aylık erişilebilirlik oranı taahhüdün altında kaldığında, Hizmet Sağlayıcı Müşteri'nin bir sonraki ay ödeyeceği düzenli SaaS abonelik bedelinden aşağıdaki oranlarda mahsup yapar:

### 5.1 Standart Aylık Hizmet Kredisi Oranları

| Gerçekleşen Aylık Uptime | Hizmet Kredisi Oranı (% Fatura İndirimi) | Zorunlu İdari ve Teknik Aksiyon |
| :--- | :--- | :--- |
| **≥ %99.95** | **%0** (SLA Başarılı) | Rutin operasyonel izleme |
| **%99.90 ile < %99.95 arası** | **%10** | 5 iş günü içinde Kök Neden Analizi (RCA) raporu sunulması |
| **%99.50 ile < %99.90 arası** | **%20** | RCA + 3 iş günü içinde üst yönetim teknik değerlendirme toplantısı |
| **%99.00 ile < %99.50 arası** | **%35** | RCA + 14 gün boyunca yeni özellik geliştirmesinin dondurulması |
| **< %99.00** | **%50** | **Sözleşme İhlali:** Müşteri'nin Sözleşmeyi derhal ve tazminatsız fesih hakkı doğar |

### 5.2 Efsane Cuma ve Siber Hafta Özel Ceza Çarpanı
Efsane Cuma, Siber Pazartesi ve Bekarlar Günü'nü kapsayan 14 günlük yüksek yoğunluklu kampanya döneminde taahhüt edilen oran **%99.99** olup, Madde 5.1'deki tüm ceza oranları **2 ile çarpılarak (2x)** uygulanır (İlgili ayın toplam SaaS bedelinin %100'üne kadar mahsup edilebilir).

### 5.3 Hizmet Kredisi Talep ve Uygulama Usulü
1.  Hizmet Kredisi talebi, ilgili aya ait performans raporunun iletilmesinden itibaren 30 (otuz) takvim günü içinde yazılı olarak bildirilir.
2.  Hesaplanan kredi, bir sonraki takvim ayı faturasından doğrudan mahsup edilir.
3.  Erişilebilirliğin %99.00'ın altına inmesi veya 90 gün içinde 3 defadan fazla P1 arıza yaşanması halinde, Müşteri'nin Ana Sözleşmeyi haklı nedenle fesih hakkı saklıdır.

---

## 6. BAKIM PROTOKOLLERİ VE SIFIR KESİNTİLİ GÜNCELLEMELER

### 6.1 Planlı Bakım
*   **İzin Verilen Zaman:** Bakım çalışmaları yalnızca Salı veya Perşembe günleri **03:00 - 05:00 (TSİ)** saatleri arasında yapılabilir.
*   **Ön Bildirim:** En az **5 (beş) iş günü önceden** Müşteri'ye e-posta ve durum portalı üzerinden bildirim yapılmalıdır.
*   **Sıfır Kesinti İlkesi:** Rutin yazılım ve veritabanı güncellemeleri Mavi/Yeşil (Blue/Green) veya Kanarya (Canary) yöntemiyle sıfır kullanıcı kesintisiyle gerçekleştirilecektir.

### 6.2 Acil Bakım
Kritik bir sıfırıncı gün (0-day) güvenlik zafiyetinin kapatılması gereken hallerde, en az 2 saat önceden Müşteri Kriz Yöneticisine haber verilerek acil yama uygulanabilir.

### 6.3 Kampanya Dönemi Kod Dondurma (Freeze)
Büyük indirim kampanyalarından 7 gün önce başlanarak kampanya bitiminden 3 gün sonrasına kadar tüm sistemlerde **kod ve altyapı dondurma (Freeze)** uygulanır; hiçbir kritik olmayan yazılım değişikliği yapılamaz.

---

## 7. HARİÇ TUTULAN HALLER

Aşağıdaki nedenlerle meydana gelen kesintiler SLA kesinti hesabına dahil edilmez:
1.  Madde 6.1'e uygun olarak önceden bildirilmiş ve onaylanmış **Planlı Bakımlar**;
2.  Müşteri'nin kendi yazdığı arayüz kodlarından veya yetkisiz DNS/konfigürasyon değişikliklerinden doğan arızalar;
3.  Bankalararası Kart Merkezi (BKM) veya uluslararası kart şebekelerindeki (Visa/Mastercard) ülke veya dünya genelindeki arızalar;
4.  Deprem, savaş, olağanüstü hal gibi Mücbir Sebepler;
5.  500 Gbps kapasiteyi aşan dağıtık hizmet engelleme (DDoS) saldırılarının ilk 30 dakikalık filtreleme fazı.

---

## 8. RAPORLAMA VE ŞEFFAFLIK

1.  **Canlı Durum Sayfası:** Müşteri'ye 7/24 açık özel durum portalı (`status.apexretail.cloudscale.io`) sağlanacaktır.
2.  **Aylık SLA Raporu:** Her takvim ayının ilk 5 iş günü içinde uptime oranlarını, arıza kayıtlarını ve MTTA/MTTR değerlerini içeren resmi rapor iletilecektir.
3.  **Denetim Hakkı:** Müşteri, yılda bir kez telemetri ve izleme loglarını tarafsız bir uzmanla denetleme hakkına sahiptir.

---

## 9. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş. (Müşteri)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş. (Hizmet Sağlayıcı)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  
