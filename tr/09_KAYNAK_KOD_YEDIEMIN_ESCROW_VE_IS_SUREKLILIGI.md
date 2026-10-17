# Ek H: Kaynak Kod Yediemin (Escrow) ve İş Sürekliliği Sözleşmesi

**Belge Referans No:** ESCROW-DR-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001  
**Yediemin Kuruluşu:** Uluslararası Bağımsız Escrow Kuruluşu (NCC Group / EscrowTech)  
**Yürürlük Tarihi:** 1 Kasım 2026  

---

## 1. KAYNAK KOD YEDIEMİNİN (ESCROW) AMACI VE DEPO YÜKÜMLÜLÜĞÜ

Hizmet Sağlayıcı'nın (**CloudScale**) olası iflası, ticari faaliyetlerini durdurması veya yazılım desteğini terk etmesi halinde Müşteri'nin (**ApexRetail**) e-ticaret operasyonunun aksamaması amacıyla, SaaS platformunun kaynak kodları tarafsız bir üçüncü taraf Yediemin kuruluşuna tevdi edilecektir.

### 1.1 Tevdi Edilecek Varlıklar
Hizmet Sağlayıcı şunları düzenli olarak yükleyecektir:
1.  **OmniStore SaaS** çekirdek mikroservislerinin derlenmemiş tüm kaynak kodları;
2.  Altyapı Kodları (IaC - Terraform betikleri, Helm paketleri, Dockerfile ve Kubernetes konfigürasyonları);
3.  Veritabanı şemaları, tablo yapıları (DDL), veri tabanı göç betikleri ve ilk kurulum verileri;
4.  Derleme (build), yayınlama ve devreye alma adımlarını anlatan eksiksiz operasyonel kılavuzlar.

### 1.2 Yükleme Sıklığı ve Denetim
*   **İki Haftada Bir Otomatik Yükleme:** Kaynak kod deposu her 14 takvim gününde bir otomatik CI/CD boru hattıyla Yediemin kasasına aktarılır.
*   **Yıllık Çalışabilirlik Testi:** Yediemin kuruluşu yılda bir kez "Seviye 3 Derleme Testi" icra ederek, kodların Hizmet Sağlayıcı'nın personeli olmaksızın sıfırdan çalışan bir ortama derlenebildiğini doğrular ve onaylar.

---

## 2. KODLARIN MÜŞTERİYE AÇILMA ŞARTLARI (TETİKLEYİCİ HALLER)

Aşağıdaki hallerden herhangi birinin gerçekleşmesi durumunda, Yediemin kuruluşu kaynak kodları ve kurulum paketlerini 5 iş günü içinde Müşteri'ye teslim edecektir:

1.  **İflas ve Tasfiye:** Hizmet Sağlayıcı'nın iflas etmesi, konkordato ilan etmesi, kayyum atanması veya tasfiyeye girmesi.
2.  **Faaliyetin Durması:** Hizmet Sağlayıcı'nın tüzel kişiliğinin son bulması veya OmniStore SaaS platformunun resmi olarak yayından kaldırılması.
3.  **Hizmetin Terk Edilmesi:** Hizmet Sağlayıcı'nın Müşteri tarafından yapılan resmi yazılı ihtara rağmen 14 gün boyunca P1 kritik destek hizmetini vermeyi haksız olarak reddetmesi veya yerine getirememesi.

### 2.1 Müşteri'nin Lisans Hakkı
Kodların teslimi halinde Müşteri; kaynak kodları yalnızca kendi kurum içi e-ticaret faaliyetlerini yürütmek, geliştirmek, derlemek ve barındırmak amacıyla süresiz, geri alınamaz ve telifsiz bir kullanım hakkı elde eder.

---

## 3. FELAKET KURTARMA (DR) VE İŞ SÜREKLİLİĞİ PROTOKOLÜ

Hizmet Sağlayıcı, büyük bir veri merkezi felaketine karşı coğrafi olarak yedekli aktif-pasif bir Felaket Kurtarma mimarisi işletecektir.

```
       [ Aktif Canlı Sistem: Ana Bulut Bölgesi (eu-central-1 / Frankfurt) ]
                               │
            Eşzamanlı Veri     │ Gerçek Zamanlı WAL Akışı
            Replikasyonu(Kafka)│ ve Sürekli Günlük Kopyalama
                               ▼
       [ Sıcak Yedek Sistem: İkincil Bölge (eu-west-1 / İrlanda) ]
                               │
            Otomatik DNS       │ Sistem Sağlık Kontrolü < 60 sn
            Route53 Yönlendirme▼
       [ Terraform & Kubernetes ile Otomatik Ayağa Kalkma ]
```

### 3.1 Taahhüt Edilen Kurtarma Hedefleri

| Metrik | Taahhüt Edilen Değer | Denetim ve Güvence |
| :--- | :--- | :--- |
| **Kurtarma Noktası Hedefi (RPO)** | **≤ 15 Dakika** | PostgreSQL sürekli veri replikasyonu |
| **Kurtarma Süresi Hedefi (RTO)** | **≤ 1 Saat** | Otomatik konteyner ayağa kaldırma ve yük aktarımı |
| **Arıza Algılama Süresi** | **≤ 60 Saniye** | Sentetik sağlık monitörleri ve Route 53 alarmları |

### 3.2 Yıllık Kurtarma Tatbikatları
Hizmet Sağlayıcı, yılda en az **iki (2) kez** kampanya dışı sakin dönemlerde canlı felaket kurtarma tatbikatı yapacak ve tatbikat sonuç raporunu 10 iş günü içinde Müşteri'ye iletecektir.

---

## 4. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş. (Müşteri)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş. (Hizmet Sağlayıcı)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  
