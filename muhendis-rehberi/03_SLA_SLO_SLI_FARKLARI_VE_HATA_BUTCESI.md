# 03. SLA, SLO, SLI ve Hata Bütçesi: Uykunu Kurtaracak Rehber

## 1. SLI, SLO ve SLA Nedir? (Kahve Dükkanı Analojisi)

Yazılım sektöründe herkes bu üç kısaltmayı birbirine karıştırır. Kafanda bir daha hiç silinmeyecek şekilde oturtalım:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. SLI (Service Level Indicator - Gösterge):                                │
│    "Baristanın kahveyi kaç saniyede hazırladığı."                           │
│    -> Gerçekte ölçtüğün anlık veri. (Örn: HTTP istek süresi = 85ms)         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. SLO (Service Level Objective - İç Hedef):                                │
│    "Kahvelerin %95'i 60 saniyeden kısa sürede çıksın."                      │
│    -> Mühendislik ekibinin kendi kendine koyduğu teknik hedef.              │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. SLA (Service Level Agreement - Hukuki Taahhüt):                          │
│    "Kahve 3 dakikayı geçerse paranı iade ederiz, üstüne pasta ısmarlarız."  │
│    -> Müşteriyle imzalanan ve tutulmazsa para cezası olan sözleşme.         │
└─────────────────────────────────────────────────────────────────────────────┘
```

> **Altın Kural:** SLO her zaman SLA'den daha sıkı olmalıdır!  
> SLA müşteriye **%99.95** diyorsa, senin dahili SLO hedefin en az **%99.99** olmalıdır ki, alarm çaldığında SLA patlamadan müdahale edebilesin.

---

## 2. Dokuzların Gizemi: %99.95 ile %99.99 Arasındaki Devasa Fark

Acemi bir yazılımcıya "Sistem %99.95 yerine %99.99 ayakta kalsın" dediğinde, *"Aman ne olacak, arada sadece yüzde sıfır virgül sıfır dört fark var"* diyebilir.  
**Oysa bu fark yazılımcı için gece rahat uyumakla her gece acil aranmak arasındaki farktır!**

30 günlük bir ayda (43.200 dakika) izin verilen toplam kesinti süreleri:

| Taahhüt Seviyesi (Uptime) | Aylık İzin Verilen Toplam Kesinti | Yıllık İzin Verilen Toplam Kesinti | Anlamı |
| :--- | :--- | :--- | :--- |
| **%99.0 (İki Dokuz)** | **7 Saat 12 Dakika** | 3.65 Gün | Erken aşama MVP / Beta sistemler |
| **%99.9 (Üç Dokuz)** | **43.2 Dakika** | 8.76 Saat | Standart kurumsal sistemler |
| **%99.95 (Bizim SLA)** | **21.9 Dakika** | **4.38 Saat** | Yüksek ölçekli kurumsal e-ticaret |
| **%99.99 (Efsane Cuma SLA)**| **4.38 Dakika** | **52.6 Dakika** | Kritik ödeme ve sepet altyapıları |
| **%99.999 (Beş Dokuz)** | **25.9 Saniye** | 5.25 Dakika | Telekom, nükleer santral, NASA |

> 😱 **Düşün:** Efsane Cuma haftasında tüm sistemin ay boyunca toplam çökme toleransı sadece **4 dakika 23 saniyedir**!  
> Bir pod'un yeniden başlaması 2 dakika sürüyorsa, ikinci bir hatada SLA patlar. İşte bu yüzden **Canary (Kanarya)** ve **Blue/Green (Mavi/Yeşil)** sıfır kesintili deploy mimarisi kurmak zorundayız.

---

## 3. Hata Bütçesi (Error Budget) Nedir?

Hata bütçesi, Google Site Reliability Engineering (SRE) felsefesinin kalbidir:  
$$\text{Hata Bütçesi} = 100\% - \text{SLO}$$

Örnek: Aylık SLO hedefin %99.95 ise, hata bütçen **%0.05'tir (ayda 21.9 dakika)**.

*   **Bütçe Varken:** Ekip yeni özellikler (feature) geliştirebilir, riskli denemeler yapabilir, hızlı canlıya çıkabilir.
*   **Bütçe Tükendiğinde (Örn: Ayın 10'unda sistem 25 dakika çöktüyse):**  
    **GELİŞTİRME DURUR (FEATURE FREEZE)!**  
    Ürün yöneticisi gelse bile yeni özellik kodlanmaz. Bütün ekip oturup sadece teknik borçları temizler, sistem dayanıklılığı (resilience) yazar, testleri artırır ve bellek sızıntılarını kapatır.

---

## 4. Fatura Cezaları (Hizmet Kredisi) Nasıl İşler?

SLA Sözleşmesinin 5. maddesinde yer alan ceza cetveli:
*   Ay içinde toplam kesinti **22 dakikayı** geçerse: Faturanın **%10'u** iade edilir.
*   Kesinti **3.6 saati** geçerse: Faturanın **%35'i** iade edilir.
*   Erişilebilirlik **%99.00'ın altına** düşerse: Faturanın **%50'si** iade edilir ve müşteri sözleşmeyi anında tazminatsız feshedebilir.

> 💸 **Senaryo:**  
> Aylık SaaS bedeli **50.000 Dolar**. Cuma akşamı canlıya attığın dikkatsiz bir veritabanı migration'ı yüzünden sistem 4 saat kilitlendi.  
> Yazılım şirketin müşteriye **17.500 Dolar ceza ödemek zorunda kalır.**  
> Efsane Cuma haftasındaysanız ceza 2 ile çarpılır: **35.000 Dolar zarar!**

---

## 5. Yazılımcının Çıkarması Gereken Ders

1.  Canlıya çıkış yaparken asla tek seferde tüm trafiği yeni sürüme yönlendirme; önce %5 trafik ver (Canary), logları ve hata oranlarını izle.
2.  Veritabanı migration'larını geriye dönük uyumlu (backward-compatible) yaz ki, rollback gerektiğinde sistem çökmesin.
3.  Servislerine kesinlikle timeout, retry ve circuit breaker (devre kesici) mekanizmaları ekle.
