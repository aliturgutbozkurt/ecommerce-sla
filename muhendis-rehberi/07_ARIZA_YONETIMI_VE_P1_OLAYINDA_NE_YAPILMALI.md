# 07. Arıza Yönetimi & Kriz Masası: P1 Çıkınca Ne Yapılmalı?

## 1. Arıza Seviyeleri (P1 - P4) Nedir?

Bir gün nöbetçiyken (on-call) telefonun çaldığında veya Slack'ten siren emojileri yağdığında, olayın büyüklüğünü bilmen gerekir:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ P1 (Kritik - Yangın Var!):                                                 │
│ Ödeme sayfası çalışmıyor, veritabanı kilitlendi, site tamamen çöktü.        │
│ -> İlk Müdahale (MTTA): ≤ 15 Dakika (Gece 03:00 olsa bile!)                │
│ -> Çözüm Süresi (MTTR): ≤ 60 Dakika                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ P2 (Yüksek - Kısmi Hasar):                                                 │
│ Arama servisi çöktü (statik liste devrede), ana POS çöktü ama yedek POS    │
│ çalışıyor, siparişler 30 dakika gecikmeli akıyor.                          │
│ -> MTTA: ≤ 30 Dakika | MTTR: ≤ 4 Saat                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│ P3 (Orta - Küçük Kusur):                                                    │
│ Raporlama ekranı yavaş açılıyor, mobilde kupon görseli kaymış.              │
│ -> Mesai saatlerinde çözülür (24 saat içinde).                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ P4 (Düşük - Bilgi / İyileştirme):                                           │
│ Dokümantasyon sorusu, buton rengi önerisi.                                  │
│ -> Gelecek sprintte planlanır (5 iş günü).                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. P1 Arızasında Yazılımcının Hayat Kurtaran Kuralları

### Kural 1: Önce Kurtar (Mitigate), Sonra Suçluyu Ara!
Acemi yazılımcının en büyük hatası:  
Canlı sistem çökmüşken 45 dakika boyunca *"Hangi satır patlamış ya, dur bir localde debug edeyim, bir loglara bakayım"* diye vakit kaybetmektir.  
*   **Sistem çöktüğünde amaç hatayı anlamak değil; sistemi EN HIZLI ŞEKİLDE AYAĞA KALDIRMAKTIR!**
*   Son deploy edilen sürümü **derhal geri al (ROLLBACK)**.
*   Önbelleği temizle, yedek podları ayağa kaldır. Sistem normale döndükten sonra hatayı sakin kafayla incelersin.

### Kural 2: Kriz Masasında (War Room) Olay Komutanını (IC) Dinle
P1 arızalarında Slack'te anında `#krizmasasi-incident-xxx` kanalı ve görüntülü toplantı açılır.
*   **Olay Komutanı (Incident Commander):** Kriz masasındaki tek yetkilidir.
*   Her kafadan bir ses çıkamaz. Komutan sormadıkça konuşulmaz.
*   Müşteriye teknik detay vermekten sorumlu ayrı bir temsilci vardır; yazılımcı olarak senin görevin müşteriye açıklama yapmak değil, teknik düğümü çözmektir.

---

## 3. Suçlayıcı Olmayan Kök Neden Analizi (Blameless RCA)

Sözleşmenin 7. maddesi uyarınca, her P1 arızasından sonra **5 iş günü içinde müşteriye resmi bir Kök Neden Analizi (RCA) raporu** sunulur.

Pek çok acemi yazılımcı bu rapordan korkar: *"Hatamı herkes görecek, beni kovacaklar."*  
Oysa modern mühendislik kültüründe **"Suçlayıcı Olmayan Kök Neden Analizi (Blameless RCA)"** esastır:

### ❌ Yanlış ve İlkel Yaklaşım:
> *"Yazılımcı Mehmet yanlış bir SQL sorgusu yazdı, tabloyu kilitledi. Mehmet uyarıldı."*  
> (Bu rapor hem şirketi küçük düşürür hem de hiçbir şeyi çözmez!)

### ✅ Doğru ve Kurumsal Mühendislik Yaklaşımı (5 Neden Metodolojisi):
1.  **Sorgu neden tabloyu kilitledi?** İndekssiz bir kolonda `LIKE '%...%'` araması yapıldığı için.
2.  **Mehmet bu sorguyu neden yazdı?** Şartnamede geçen yeni bir arama özelliğini yetiştirmeye çalışıyordu.
3.  **Bu sorgu canlıya nasıl geçti?** Code review yapan kıdemli mühendis indeks kontrolünü atladı.
4.  **CI/CD hattı neden yakalayamadı?** Otomasyon testlerinde sorgu zaman aşımı (query timeout) kontrolü yoktu.
5.  **Kalıcı Çözüm Nedir?**
    *   Veritabanına 3 saniyeyi aşan sorguları otomatik öldüren `statement_timeout = 3000ms` kuralı kondu.
    *   CI/CD hattına indeks kontrol linter'ı eklendi.
    *   (Gördüğün gibi sorun Mehmet değil, sistemin denetim eksikliğidir!)

---

## 4. Yazılımcının Çıkarması Gereken Ders

1.  Nöbetçiysen telefonunun bildirimlerini kapatma; 15 dakika içinde yanıt vermezsen eskalasyon doğrudan CTO'ya gider.
2.  Arıza anında kahramanlık yapmaya çalışma; en güvenli yol olan rollback'i uygula.
3.  Hata yapmaktan korkma ama aynı hatanın bir daha yaşanmaması için sisteme otomatik koruma bariyeri (guardrail) ekle.
