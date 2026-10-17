# 🧭 Acemi Yazılımcının Sözleşmeler ve SLA El Kitabı
### *"Kod Çalışıyor Abi İşte" Demekten "Sözleşmeye Uygun Mimari Tasarlamaya" Geçiş Rehberi*

Hoş geldin genç mühendis! Eğer bir şirkete yeni girdiysen ya da ilk kez büyük bir kurumsal e-ticaret (B2B SaaS) projesinde kod yazıyorsan, önüne gelen **MSA, SLA, SOW, DPA, Escrow, MTTR** gibi kısaltmalar sana yabancı bir dilde yazılmış gibi gelebilir.

Hatta muhtemelen içinden şunu geçiriyorsun:  
> *"Ben yazılımcıyım; Docker kurarım, Go/Node yazarım, SQL sorgusu atarım. Hukukçuların yazdığı 50 sayfalık PDF'ler beni niye ilgilendirsin ki?"*

**Çok büyük yanılıyorsun!**  
Yazılım dünyasında yazdığın tek bir dikkatsiz kod satırı:
*   Şirketine **100.000 Dolar ceza kestirebilir** (Bkz: [SLA Rehberi](03_SLA_SLO_SLI_FARKLARI_VE_HATA_BUTCESI.md)),
*   Müşteri verisini loglara bastığın için şirketi **KVKK/GDPR davasıyla batırabilir** (Bkz: [KVKK Rehberi](05_KVKK_VE_GDPR_KODLARDA_YAPILAN_BUYUK_HATALAR.md)),
*   Müşteriye "Yaparız abi ya 10 dakikalık iş" dediğin için ekibine **2 aylık bedava mesai çıkarabilir** (Bkz: [Değişiklik Yönetimi](10_DEGISIKLIK_YONETIMI_VE_ADAM_GUN_HESABI.md)).

Bu rehber, hukuk dilini ("hukukça") tamamen bir kenara bırakıp, **bir yazılımcının anlayacağı dille**, madde madde, pratik örneklerle tüm sözleşmeleri açıklamak için hazırlandı.

---

## 📚 Rehber İçeriği ve Okuma Sırası

| Bölüm | Konu | Bir Yazılımcı Olarak Neden Okumalısın? |
| :---: | :--- | :--- |
| **00** | [Sözleşmeler Neden Var ve Hangi Belge Kimi Döver?](00_GIRIS_VE_SOZLESMELER_NEDEN_VAR.md) | Belge hiyerarşisi, çatışma kuralları ve sözleşmenin kodla bağı. |
| **01** | [MSA (Ana Sözleşme): Kodum Benim mi Şirketin mi?](01_MSA_NEDIR_YAZILIMCIYI_NASIL_BAGLAR.md) | Fikri mülkiyet (IP), sorumluluk limiti (Liability Cap) ve ağır kusur. |
| **02** | [SOW ve Şartname: "Bitti" (Done) Ne Demek?](02_SOW_VE_SARTNAME_KOD_YAZARKEN_NASIL_KULLANILIR.md) | Kapsam kayması (Scope Creep), kabul kriterleri ve performans şartları. |
| **03** | [SLA, SLO, SLI ve Hata Bütçesi: Uykunu Kurtaracak Rehber](03_SLA_SLO_SLI_FARKLARI_VE_HATA_BUTCESI.md) | %99.95 vs %99.99 farkı, kesinti süresi hesabı ve fatura cezaları. |
| **04** | [SaaS Lisansı ve Kotalar: Multi-Tenant Faciası Yaşamamak](04_SAAS_LISANSI_VE_KOTALAR_MANTIKSAL_IZOLASYON.md) | Müşteri verilerini ayırma, rate limitler ve veri rehni yasağı. |
| **05** | [KVKK & GDPR: Kod Yazarken Yapılan En Büyük Hatalar](05_KVKK_VE_GDPR_KODLARDA_YAPILAN_BUYUK_HATALAR.md) | Loglara veri basma, 48 saat kuralı, unutulma hakkı ve şifreleme. |
| **06** | [NDA ve Gizlilik: İşten Atılmama Rehberi](06_NDA_VE_TICARI_SIRLAR_ACEMI_HATALARI.md) | GitHub'a secret basmak, Medium'da sistem mimarisi ifşalamak. |
| **07** | [Arıza Yönetimi & Kriz Masası: P1 Çıkınca Ne Yapılır?](07_ARIZA_YONETIMI_VE_P1_OLAYINDA_NE_YAPILMALI.md) | P1-P4 farkı, MTTA/MTTR süreleri, kriz adabı ve suçsuz RCA yazımı. |
| **08** | [Kabul Testleri (UAT): Hata Tipleri ve Şartlı Kabul](08_KABUL_TESTLERI_UAT_VE_KOSULLU_KABUL.md) | Blocker vs Minor hata, teslim tutanağı ve hakediş onayı. |
| **09** | [Escrow ve Felaket Kurtarma: Şirket Batarsa Koda Ne Olur?](09_ESCROW_KOD_YEDIEMIN_VE_FELAKET_KURTARMA.md) | Kaynak kod kasası (Escrow), RPO (15 dk) ve RTO (1 saat) hedefleri. |
| **10** | [Değişiklik Talepleri (Change Order): "Ufak Bir Ekleme" Tuzağı](10_DEGISIKLIK_YONETIMI_VE_ADAM_GUN_HESABI.md) | Adam/gün maliyeti ($1.000/gün), kapsam sınırları ve form süreci. |

---

## ⚡ Altın Kurallar (Yazılımcının 5 Emri)

1.  **Cuma Akşamı Canlıya Çıkma (No Deploy on Friday):** P1 arıza çıkarsa MTTA 15 dakika, MTTR 60 dakikadır. Bütün haftasonun kriz masasında geçer.
2.  **Müşteriye Doğrudan Söz Verme:** Slack'ten "Hallederiz abi" dediğin an kapsam genişler; şirket o işi bedava yapmak zorunda kalır.
3.  **Loglara Kişisel Veri Basma:** `console.log(user)` veya `logger.info(request.body)` içinde kredi kartı, şifre veya TC kimlik no bırakmak KVKK suçudur.
4.  **Hata Bütçesini (Error Budget) Takip Et:** Servisin bu ayki kesinti kotası bittiyse yeni özellik değil, sistem dayanıklılığı (resilience) yazacaksın.
5.  **GitHub'a Asla Token/Secret Pushlama:** Git geçmişinde kalan tek bir AWS anahtarı yüzünden şirketin tüm veritabanı boşaltılabilir ve "Ağır Kusur" sayılır.
