# Ek F: Olay Yönetimi ve Eskalasyon Matrisi

**Belge Referans No:** ESC-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001 & SLA-2026-OMNISTORE-001  
**Yürürlük Tarihi:** 1 Kasım 2026  

---

## 1. OLAY YÖNETİMİ GENEL İŞ AKIŞI

İşbu Olay Yönetimi ve Eskalasyon Prosedürü; **OmniStore SaaS ve Birleşik E-Ticaret Motoru** sisteminde meydana gelebilecek teknik arıza, kesinti veya performans düşüşlerinin tespiti, önceliklendirilmesi, kriz yönetimi, giderilmesi ve kök neden analizinin yürütülmesi adımlarını düzenler.

```
  [ Otomatik İzleme Alarmı / Müşteri Bildirimi ]
                  │
                  ▼
         [ Seviye 1 Triyaj (NOC) ] ── (5-10 dakika içinde)
                  │
                  ▼
        [ Öncelik Seviyesi Sınıflandırması ]
                  │
         ┌────────┴────────┐
         │ (P1 / P2)       │ (P3 / P4)
         ▼                 ▼
   [ Olay Komutanı (IC)    [ Standart Destek Kuyruğu
     ve Kriz Masası ]        Sprint Planlamasına Sevk ]
         │
         ▼
   [ Seviye 2/3 Nöbetçi Mühendisler & SecOps ]
         │
         ▼
   [ Sorunun Giderilmesi & Durum Sayfası Güncellemesi ]
         │
         ▼
   [ 5 İş Günü İçinde Kök Neden Analizi (RCA) Raporu ]
```

---

## 2. ARIZA DERECELERİ VE TETİKLEYİCİ SENARYOLAR

| Seviye | Teknik Tanım ve Gerçek Yaşam Örnekleri | MTTA (İlk Yanıt) | MTTR (Çözüm Hedefi) | Bilgilendirme Sıklığı |
| :--- | :--- | :--- | :--- | :--- |
| **P1 - Kritik** | • Ödeme adımında 5 dakikadan uzun süredir hiç sipariş tamamlanamaması.<br>• Veritabanı ana düğümünün çökmesi ve yedek düğümün devreye girmemesi.<br>• Katalog API'sinde HTTP 500 hata oranının %5'i aşması.<br>• Doğrulanmış veri sızıntısı veya fidye yazılımı (ransomware) atağı. | **≤ 15 dakika** | **≤ 60 dakika** | Kriz Masasında her 15 dakikada bir |
| **P2 - Yüksek** | • Ana sanal POS'un çökmesi (yedek POS aktif ancak işlem gecikmesi arttı).<br>• OpenSearch kümesinin arızalanması (statik veritabanı araması devrede).<br>• ERP'ye aktarılan sipariş kuyruğunun 30 dakikadan fazla gecikmesi. | **≤ 30 dakika** | **≤ 4 saat** | Slack/E-posta ile saatte bir |
| **P3 - Orta** | • Yönetim paneli excel dışa aktarımının zaman aşımına uğraması.<br>• Mobil arayüzde kampanya bannerının hatalı hizalanması.<br>• Kritik olmayan analiz loglarında gecikme yaşanması. | **≤ 2 saat** | **≤ 24 saat** | Günde bir bilet güncellemesi |
| **P4 - Düşük** | • API dokümantasyonunda yazım yanlışı.<br>• Arayüz buton renk önerisi.<br>• Yeni özellik geliştirme talebinin değerlendirilmesi. | **≤ 8 saat** | **≤ 5 iş günü** | Haftalık sprint toplantısında |

---

## 3. ESKALASYON HİYERARŞİSİ VE İLETİŞİM LİSTESİ

Bir arıza hedeflenen MTTR süresi içinde çözülemezse eskalasyon kademeleri aşağıdaki sırayla işletilir:

```
1. Seviye: 7/24 Nöbetçi SRE / Sistem Mühendisi (0 - 15 dk)
   │
2. Seviye: Kıdemli Yazılım Mimarı ve DevOps Lideri (15 - 30 dk)
   │
3. Seviye: Mühendislik Direktörü / Bulut Operasyonları VP (30 - 60 dk)
   │
4. Seviye: Teknolojiden Sorumlu Başkan (CTO) & Genel Müdür (CEO) (60+ dk)
```

### Eskalasyon İletişim Tablosu

| Eskalasyon Seviyesi | Hizmet Sağlayıcı Sorumlusu | İletişim Kanalı | Müşteri Tarafındaki Muhatap |
| :--- | :--- | :--- | :--- |
| **1. Seviye (NOC / SRE)** | 7/24 Nöbetçi Sistem Mühendisi | PagerDuty / +90 (212) 555-0101 | Müşteri Nöbetçi Olay Yöneticisi |
| **2. Seviye (Baş Mimar)** | Kıdemli Arka Ofis Mimarı | Slack `#krizmasasi-apexretail` / GSM | Müşteri Teknik Mimarı |
| **3. Seviye (Direktör)** | Bulut Altyapı Direktörü | Doğrudan Telefon ve Acil SMS | Müşteri Yazılım Direktörü |
| **4. Seviye (Yönetim)** | CTO (Teknoloji Lideri) | Yönetici Hattı & Acil Video Köprüsü | Müşteri CTO / COO |

---

## 4. KRİZ MASASI (WAR ROOM) VE İLETİŞİM PROTOKOLÜ

**P1 Kritik Arıza** ilan edildiği anda:
1.  **Kriz Masasının Kurulması:** En geç **10 dakika içinde** Slack üzerinde `#krizmasasi-apexretail-p1-[olay-no]` kanalı ve kesintisiz açık kalacak acil video konferans köprüsü devreye alınır.
2.  **Olay Komutanı (Incident Commander - IC):** Hizmet Sağlayıcı, tüm teşhis ve kurtarma operasyonunu tek elden yönetecek yetkili bir Olay Komutanı atar.
3.  **Müşteri İletişim Temsilcisi:** Müşteri paydaşlarına her 15 dakikada bir düzenli teknik durum özeti sunmak üzere özel bir teknik hesap yöneticisi görevlendirilir.
4.  **Tüketici Bilgilendirmesi:** Durum sayfası "Kritik Bakım" moduna alınır ve Müşteri onaylı tüketici bilgilendirme mesajı yayımlanır.

---

## 5. KÖK NEDEN ANALİZİ (RCA) VE ŞABLON

Her P1 arıza sonrasında (ve Müşteri talep ederse P2 arızalarda), Hizmet Sağlayıcı **5 (beş) iş günü içinde** suçlayıcı olmayan (*blameless*) resmi bir **Kök Neden Analizi (RCA)** raporu sunacaktır.

### Zorunlu RCA Rapor Formatı:

```markdown
# ARIZA KÖK NEDEN ANALİZİ (RCA) RAPORU
* Olay Numarası: INC-2026-XXXX
* Öncelik Derecesi: P1 - Kritik
* Arıza Başlangıç Zamanı: 2026-11-27 14:15 TSİ
* Tespit Süresi (MTTD): 3 dakika
* Müdahale Süresi (MTTA): 7 dakika
* Çözüm Süresi (MTTR): 42 dakika
* Ticari Etki: 1.420 ödeme denemesi gecikti, 48 sepet terk edildi.

## 1. Yönetici Özeti
Arızanın kısa ve anlaşılır teknik özeti.

## 2. Kronolojik Olay Akışı (TSİ)
- 14:15 - Prometheus alarmı tetiklendi (Sepet Podlarında yüksek HTTP 502 oranı).
- 14:18 - PagerDuty üzerinden 1. Seviye Nöbetçi Mühendis görevi devraldı.
- 14:22 - Mühendis Kriz Masasına bağlandı; Redis kümesi bağlantı havuzunun tükendiğini saptadı.
- 14:35 - Soket havuzunu artıran ve çalışan podları yeniden başlatan acil yama devreye alındı.
- 14:57 - Hata oranları %0.01'in altına indi; sistem normale döndü.

## 3. Kök Neden Tespiti (5 Neden Metodolojisi)
1. Sepet API'si neden çöktü? Redis bağlantı havuzu tükendiği için.
2. Bağlantı havuzu neden tükendi? Dağıtık kilitlerin serbest bırakılmasında iş parçacıkları kilitlendiği için.
3. Kilitler neden takılı kaldı? Üçüncü parti kupon doğrulama servisi zaman aşımına uğradığı ve yerel devre kesici (circuit breaker) bulunmadığı için.
4. Neden devre kesici yoktu? Yeni kupon özelliği zaman aşımı sınırları test edilmeden devreye alındığı için.
5. CI/CD testleri bunu neden yakalayamadı? Otomasyon testlerinde harici servisin 5000ms gecikmesi simüle edilmediği için.

## 4. Düzeltici ve Önleyici Eylemler (CAPA)
| Eylem Kodu | Açıklama | Sorumlu | Hedef Tarih | Durum |
|---|---|---|---|---|
| EYL-01 | Kupon servisine 400ms kesin zaman aşımlı devre kesici eklenmesi | Baş Mühendis | 2026-12-02 | Devam Ediyor |
| EYL-02 | Redis bellek ve maksimum istemci parametrelerinin artırılması | Bulut Ops | 2026-11-29 | Tamamlandı |
| EYL-03 | CI/CD hattına kaos mühendisliği gecikme testlerinin entegrasyonu | Test Lideri | 2026-12-10 | Planlandı |
```

---

## 6. EFSANE CUMA / SİBER HAFTA ÖZEL HAREKAT PROTOKOLÜ

14 günlük kampanya süresince:
*   Hizmet Sağlayıcı, 2 kıdemli yazılım mühendisi ve 1 bulut mimarını Müşteri kriz merkezine fiziki olarak (veya kesintisiz özel hatla) konuşlandırır.
*   Her 6 saatte bir proaktif sağlık kontrol raporu yayımlanır.
*   Müşteri CTO'sunun ortak onayı olmaksızın hiçbir konfigürasyon değişikliği yapılamaz.

---

## 7. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş.**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş.**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  
