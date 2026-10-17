# 08. Kabul Testleri (UAT): Hata Tipleri ve Şartlı Kabul

## 1. UAT (User Acceptance Testing) Nedir?

Kodunu yazdın, birim testleri geçti, staging ortamına deploy ettin. İş bitti mi?  
**HAYIR! Şimdi en kritik aşama başlıyor: UAT (Kullanıcı Kabul Testleri).**

UAT, müşterinin gerçek çalışanlarının (kategori yöneticileri, muhasebeciler, depo sorumluları) sistemi şartnameye göre baştan sona test edip **"Evet, tam istediğimiz gibi olmuş, paramızı ödeyebiliriz"** dediği resmi onay sürecidir.

> 💰 **Yazılımcıya Gerçek:**  
> Müşteri Teslim Tesellüm Tutanağına imza atmadığı sürece şirket faturayı kesemez, para kasaya girmez. Yani senin ve ekibinin başarısı UAT onayına bağlıdır!

---

## 2. UAT'de Hata Tipleri ve Kabule Etkisi

UAT sürecinde bulunan her hata aynı ağırlıkta değildir. Sözleşmenin 3. maddesinde 4 seviye tanımlanmıştır:

| Seviye | Adı | Örnek | Kabule Etkisi |
| :---: | :--- | :--- | :--- |
| **Sev-1** | **Engelleyici (Blocker)** | Ödeme butonu hiçbir kartta çalışmıyor; veritabanı çöküyor. | **KESİN RET!** Kilometre taşı reddedilir. Ekip 3 gün içinde düzeltmek zorundadır. |
| **Sev-2** | **Kritik (Critical)** | Garanti BBVA kartlarıyla ödeme alınamıyor (alternatif yok). | **KESİN RET!** Düzeltilene kadar kabul imzası verilmez. |
| **Sev-3** | **Büyük (Major)** | Kupon kodu girince indirim hesaplanıyor ama ekrandaki yazı kayıyor. | **ŞARTLI KABUL!** Müşteri kabulü imzalar, para ödenir; eksik 10 gün içinde kapatılır. |
| **Sev-4** | **Küçük (Minor)** | Butonun gölgesi tasarım dosyasından 2 piksel farklı. | **TAM KABUL!** Onay verilir, hata gelecek sprint iş listesine eklenir. |

---

## 3. "Şartlı Kabul" ve "Eksik Listesi (Punch-List)" Nedir?

Projelerin %90'ında ilk teslimatta her şey %100 mükemmel olmaz. Ufak tefek pürüzler kalır.  
Eğer Sev-1 ve Sev-2 seviyesinde engelleyici bir hata yoksa, müşteriyle **Şartlı Kabul (Conditional Acceptance)** yapılır:

1.  **Punch-List (Eksik Listesi) Çıkarılır:**  
    Örn: *"1) Sepet sayfasındaki yazı fontu düzeltilecek. 2) Excel çıktısına 'KDV Oranı' kolonu eklenecek."*
2.  **Süre Belirlenir:** Bu maddelerin en geç 10 iş günü içinde giderileceği tutanağa yazılır.
3.  **Tutanak İmzalanır:** Şirket kilometre taşı ödemesini (Örn: 125.000 Dolar) tahsil eder.
4.  Ekip verilen sürede o maddeleri kapatıp tam kabule çevirir.

---

## 4. Yazılımcının Çıkarması Gereken Ders

1.  UAT öncesinde mutlaka kendi kendine "Happy Path" (sorunsuz akış) haricinde "Edge Case"leri (negatif senaryoları) test et: Hatalı kart numarası, eksi bakiye, geçersiz kupon vb.
2.  UAT sırasında müşterinin bulduğu her şeye itiraz etme; hatayı kabul edip önem derecesine göre önceliklendir.
3.  Punch-list'e giren maddeleri savsaklama; şartlı kabul süresi aşılırsa müşteri tüm kabulü iptal edebilir.
