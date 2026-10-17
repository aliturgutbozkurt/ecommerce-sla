# Ek C: SaaS Abonelik ve Yazılım Lisans Sözleşmesi

**Belge Referans No:** SLAg-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001  
**Yürürlük Tarihi:** 1 Kasım 2026  

---

## 1. LİSANS VE BULUT ABONELİĞİ TANIMI

### 1.1 SaaS Abonelik Hakkı
MSA-2026-APEX-CS-001 kapsamındaki ödeme yükümlülüklerinin ifası şartıyla, **CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş.** ("Hizmet Sağlayıcı"), **ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş.**'ye ("Müşteri") **OmniStore SaaS ve Birleşik E-Ticaret Motoru** platformuna Sözleşme süresince erişme, API'leri çalıştırma ve sistemi ticari operasyonlarında kullanma hakkı veren gayri inhisari, dünya çapında geçerli bir SaaS abonelik lisansı tanır.

### 1.2 Mantıksal ve Fiziksel İzolasyon
Hizmet bulut tabanlı bir SaaS mimarisi olmasına karşın; Müşteri'nin veri güvenliğini ve yüksek performansını garanti etmek amacıyla, PostgreSQL şemaları, Redis veritabanı indeksleri ve Kubernetes çalışma alanları (namespace) Müşteri'ye tahsisli olacak ve diğer kiracılardan (multi-tenant) kesin olarak mantıksal olarak izole edilecektir.

---

## 2. KULLANIM KOTALARI VE KAPASİTE TAAHHÜTLERİ

Aylık düzenli abonelik bedeline dahil olan standart kapasite parametreleri:

| Kapasite Parametresi | Dahil Olan Standart Kota | Aşım / Zirve Politikası |
| :--- | :--- | :--- |
| **Yönetici ve Personel Kullanıcısı** | **250 Adet İsimli Yönetim Paneli Hesabı** | İlave her kullanıcı için $45/ay |
| **Son Tüketici / Ziyaretçi Sayısı** | **Sınırsız Aylık Aktif Kullanıcı (MAU)** | Tüketici sayısı üzerinden ek ücret alınmaz |
| **Sürekli API Çağrı Kapasitesi** | **Saniyede 15.000 İstek (RPS) Kesintisiz** | Anlık otomatik genişleme (100.000 RPS'e kadar) |
| **Kampanya Zirve Trafik Kotası** | **Yılda 96 saate kadar 100.000 RPS zirvesi** | Efsane Cuma haftasında ek bedelsiz dahil |
| **Veritabanı ve Medya Saklama** | **10 Terabayt (NVMe SSD & Bulut Nesne Depolama)** | İlave her 1 GB için $0.08/ay |
| **Aylık Veri Çıkışı (Egress)** | **Aylık 25 Terabayt dahil** | İlave her 1 GB veri çıkışı için $0.05 |

---

## 3. KABUL EDİLEBİLİR VE ADİL KULLANIM İLKELERİ (FUP)

Müşteri doğrudan veya dolaylı olarak:
1.  Hizmet Sağlayıcı'ya ait çekirdek ikili kütüphaneleri (binary) tersine mühendisliğe tabi tutamaz, kaynak koduna dönüştüremez veya kaynak kodunu türetmeye çalışamaz;
2.  Hizmet Sağlayıcı'nın önceden verilmiş yazılı onayı olmaksızın platformu bağımsız üçüncü şahıslara alt lisanslayamaz veya kiralayamaz;
3.  Hizmet Sağlayıcı'nın siber güvenlik ekibine en az 48 saat önceden yazılı bildirim yapmaksızın sistem üzerinde izinsiz stres veya sızma testi icra edemez;
4.  Sistemi yürürlükteki kanunlara aykırı zararlı içerik, virüs veya kötü amaçlı yazılım yaymak amacıyla kullanamaz.

---

## 4. YEDEKLEME, VERİ BÜTÜNLÜĞÜ VE İŞ SÜREKLİLİĞİ

Hizmet Sağlayıcı aşağıdaki veri koruma önlemlerini eksiksiz sağlayacaktır:

*   **Eşzamanlı Replikasyon:** Write-Ahead Logging (WAL) kayıtları 3 farklı Bulut Erişilebilirlik Bölgesinde (Availability Zone) eşzamanlı kopyalanır.
*   **Noktaya Dönüş (Point-in-Time Recovery - PITR):** Son **30 takvim günü** içindeki herhangi bir dakikaya veya saniyeye veri kaybı olmaksızın geri dönebilme imkanı.
*   **Günlük Tam Yedekler:** Her gece saat 02:00'de (TSİ) alınan tam veritabanı yedekleri AES-256 ile şifrelenerek coğrafi olarak farklı bir bulut bölgesine aktarılır.
*   **Yıllık Kurtarma Tatbikatı:** Yılda iki kez yapılacak felaket simülasyonu ile Kurtarma Süresi (**RTO ≤ 1 saat**) ve Kurtarma Noktası (**RPO ≤ 15 dakika**) hedefleri test edilir.

---

## 5. PLATFORM GÜNCELLEMELERİ VE GERİYE DÖNÜK UYUMLULUK

### 5.1 Sürekli İyileştirmeler
Müşteri; platforma eklenen rutin yazılım güncellemelerinden, performans yamalarından ve güvenlik geliştirmelerinden ek lisans ücreti ödemeksizin faydalanır.

### 5.2 API Yaşam Döngüsü ve Geriye Dönük Uyumluluk
*   **12 Ay Garanti:** Yayında olan herhangi bir REST veya GraphQL uç noktasının kullanımdan kaldırılacağı (deprecation) duyurulduğunda, ilgili uç nokta en az **12 takvim ayı** boyunca aktif ve geriye dönük uyumlu kalmaya devam eder.
*   **Bozucu Değişiklik Yasağı:** Müşteri'nin yazılı onayı olmaksızın aktif sepet veya ödeme API'lerinde veri yapısını bozan (breaking changes) güncellemeler yapılamaz.

---

## 6. SÖZLEŞME SONU VERİ TAHLİYESİ VE VERİ TAŞINABİLİRLİĞİ

### 6.1 Koşulsuz Veri İadesi
Sözleşmenin herhangi bir sebeple sona ermesi veya feshi halinde:
1.  **Veri Formatı:** Fesih tarihinden itibaren 14 takvim günü içinde, Müşteri'ye ait tüm veritabanı kayıtları (PostgreSQL SQL dökümleri, JSON katalog dosyaları ve ortam varlıkları) şifreli ve güvenli bir bulut nesne depolama bağlantısı üzerinden eksiksiz teslim edilir.
2.  **Veri Rehni Yasağı:** Hizmet Sağlayıcı, ticari bir alacak veya anlaşmazlık bahanesiyle Müşteri'nin operasyonel verilerini alıkoyamaz, geciktiremez veya rehin tutamaz.
3.  **Güvenli İmha:** Verilerin Müşteri tarafından teslim alındığının yazılı teyidinden sonra, Hizmet Sağlayıcı sunucularındaki Müşteri verileri 60 gün içinde NIST SP 800-88 standartlarına uygun olarak geri döndürülemez biçimde silinir ve imha tutanağı sunulur.

---

## 7. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş. (Müşteri)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş. (Hizmet Sağlayıcı)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  
