# 09. Escrow ve Felaket Kurtarma: Şirket Batarsa Koda Ne Olur?

## 1. Kaynak Kod Yediemin (Escrow) Nedir?

Diyelim ki harika bir SaaS e-ticaret platformu kurdun. Müşteri (ApexRetail) her gün bu sistem üzerinden milyonlarca liralık satış yapıyor.

Müşterinin aklındaki en büyük korku nedir biliyor musun?  
> *"Ya bu yazılım şirketi yarın batarsa? Ya ortakları kavga edip şirketi kapatırsa? Ya sunucuların parasını ödemeyip kaçarlarsa? Bizim milyon dolarlık e-ticaretimiz ortada mı kalacak?"*

İşte bu korkuyu yok etmek için **Kaynak Kod Yediemin Sözleşmesi (Software Escrow)** yapılır:

```
    [ Yazılım Şirketi ] ──(14 günde bir otomatik kod yükleme)──► [ Bağımsız Escrow Kasası ]
                                                                       │
                                                       (İflas Halinde) │ Kodlar Açılır
                                                                       ▼
                                                             [ E-Ticaret Müşterisi ]
```

*   Tarafsız bir uluslararası emanetçi kuruluş (Örn: NCC Group) belirlenir.
*   CI/CD hattımız her 14 günde bir en güncel kaynak kodları, Docker dosyalarını, veritabanı şemalarını ve kurulum kılavuzlarını bu kasaya kilitler.
*   Eğer şirketimiz iflas eder veya sözleşmeyi terk ederse; emanetçi kasayı açar ve kodları müşteriye teslim eder. Müşteri sistemi kendi sunucularında çalıştırmaya devam eder.

---

## 2. Felaket Kurtarma (DR): RPO ve RTO Ne Demektir?

Bulut sağlayıcısının (AWS / Google Cloud) Frankfurt veri merkezine bir uçak düştü veya tüm trafo patladı. Sistemin ne kadar sürede geri ayağa kalkacak?

Sözleşmenin 3. maddesinde iki hayati parametre yazar:

### 1. RPO (Recovery Point Objective - Kurtarma Noktası Hedefi) ≤ 15 Dakika
*   **Ne Demektir?** Felaket anında **en fazla son 15 dakikalık veriyi kaybetme hakkın vardır.**
*   Eğer gece 02:00'de alınan yedeğe dönüp "Abi dünün verilerine döndük, bugünkü son 8 saatin siparişleri uçtu" dersen, sözleşmeyi ihlal etmiş olursun!
*   **Teknik Karşılığı:** PostgreSQL Write-Ahead Log'larının (WAL) sürekli ve eşzamanlı olarak farklı bir coğrafi bölgeye (Örn: İrlanda) kopyalanması (streaming replication) zorunludur.

### 2. RTO (Recovery Time Objective - Kurtarma Süresi Hedefi) ≤ 1 Saat
*   **Ne Demektir?** Ana veri merkezi çöktüğü andan itibaren, yedek veri merkezindeki sistemlerin **en geç 1 saat içinde canlı trafiği karşılamaya başlaması gerekir.**
*   **Teknik Karşılığı:** Sunucuları tek tek elle kuramazsın! Terraform (Altyapı Kodu - IaC) betiklerinin hazır olması ve Route 53 DNS yönlendirmesinin otomatik tetiklenmesi gerekir.

---

## 3. Yazılımcının Çıkarması Gereken Ders

1.  "Benim bilgisayarımda derleniyor" mazeretini bırak; projenin bağımlılıklarını `Dockerfile` ve `package-lock.json` ile dondur ki, Escrow kasasından çıkan kod sıfırdan derlenebilsin.
2.  Veritabanı yedekleme ve replikasyon mekanizmalarını asla ihmal etme; RPO süresi 15 dakikadır.
3.  Yılda iki kez yapılan felaket tatbikatlarında altyapının 1 saatte ayağa kalktığını bizzat test et.
