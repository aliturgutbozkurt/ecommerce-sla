# 06. NDA ve Gizlilik: İşten Atılmama Rehberi

## 1. NDA (Gizlilik Sözleşmesi) Nedir?

NDA (Non-Disclosure Agreement), iki şirketin birbirine açtığı kapıların arkasında konuşulan her şeyin **sır olarak kalacağını** garanti eden sözleşmedir.

Yazılımcılar genellikle NDA'in sadece şirket yöneticilerini veya satışçıları bağladığını sanır.  
**Oysa NDA ihlallerinin %80'i teknik personelin dikkatsizliğinden kaynaklanır!**

---

## 2. Acemi Yazılımcıların Yaptığı 4 Büyük Gizlilik Hatası

### Hata 1: "LinkedIn ve Medium'da Havamı Atayım" Tuzağı
Projede çok havalı bir mikroservis mimarisi kurdun. Akşam hevesle bir blog yazısı yazdın:  
> *"ApexRetail için saniyede 100K istek kaldıran Kafka mimarisini nasıl kurduk? İşte veritabanı şemamız, Redis kilit stratejimiz ve kullandığımız iç API uç noktaları..."*

**Sonuç:**  
Tebrikler, şirketin ticari sırlarını ve güvenlik açığı oluşturabilecek iç sistem mimarisini dünyaya ifşa ettin!  
*   Sözleşmenin 2. maddesi, **kaynak kodların, veritabanı şemalarının ve mimari diyagramların kesinlikle Gizli Bilgi olduğunu** belirtir.
*   Şirket veya müşteri adına halka açık teknik yazı yazmadan önce mutlaka teknik liderinden ve hukuk/iletişim biriminden yazılı onay almalısın.

---

### Hata 2: Canlı Veritabanını Kişisel Laptopa İndirmek ("Local'de Test Edecektim Abi")
Staging ortamında bir hata çıktı. Hatanın nedenini bulmak için production veritabanından 500 MB'lık bir `.sql` dökümü (dump) alıp kendi kişisel bilgisayarına indirdin.

*   Bu bilgisayar çalınırsa, kaybolursa veya zararlı bir yazılım bulaşırsa ne olur?
*   Doğrudan **NDA ve KVKK ihlali** gerçekleşir. Şirketin iş akdini haklı nedenle derhal feshedebilir ve cezai işlem başlatabilir.
*   **Kural:** Yerel geliştirmelerde daima sentetik sahte veri (mock data / Faker kütüphaneleri) kullanılmalıdır; canlı müşteri verisi kişisel cihazlara indirilemez!

---

### Hata 3: Public Yapay Zeka Araçlarına (ChatGPT vb.) Müşteri Kodunu ve Verisini Yapıştırmak
Bir SQL sorgusunu veya karmaşık bir algoritmayı optimize etmek istedin. Koddaki müşteri adlarını, tablo isimlerini veya gerçek müşteri sipariş verilerini kopyalayıp ücretsiz genel bir yapay zeka aracına yapıştırdın.

*   Ücretsiz yapay zeka modelleri girdiğin verileri modeli eğitmek için kullanabilir.
*   Bu durum, şirketin gizli kaynak kodunun ve ticari verisinin üçüncü bir şirkete aktarılması anlamına gelir ve ağır bir NDA ihlalidir.
*   **Kural:** Kurum içi özel izinli (Enterprise / Zero Data Retention) AI araçları haricinde müşteri kodlarını dış araçlara yapıştırma!

---

### Hata 4: `.env` Dosyasını Git'e Commitlemek
Tüm zamanların en klasik acemi hatası:  
`.gitignore` dosyasına `.env` eklemeyi unutup API anahtarlarını, veritabanı şifrelerini ve Stripe tokenlarını GitHub reposuna pushlamak.

*   Public repo ise dakikalar içinde botlar tarafından taranır.
*   Private repo olsa bile, sözleşmede kaynak kodların güvenliği taahhüt edildiği için ciddi bir denetim bulgusu (audit finding) oluşturur.

---

## 3. Yazılımcının Çıkarması Gereken Ders

1.  Müşterinin adını, işlem hacimlerini ve sistem detaylarını izinsiz hiçbir sosyal medyada paylaşma.
2.  Kişisel bilgisayarına asla gerçek müşteri verisi kopyalama.
3.  Git commiti atmadan önce `git diff` ile içine gizli anahtar karışıp karışmadığını daima kontrol et.
