# Ek I: Değişiklik Talebi (Change Order) Prosedürü ve Formu

**Belge Referans No:** COP-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001 & SOW-2026-OMNISTORE-001  
**Yürürlük Tarihi:** 1 Kasım 2026  

---

## 1. KAPSAM VE DEĞİŞİKLİK YÖNETİMİ İLKELERİ

**OmniStore SaaS ve Birleşik E-Ticaret Motoru** projesinin geliştirilmesi sürecinde; Teknik Şartname (`SOW-2026-OMNISTORE-001`) sınırlarını aşan her türlü yeni fonksiyon, ilave entegrasyon veya zaman planı revizyonu işbu Değişiklik Talebi Prosedürüne tabidir.

Yazılı ve çift taraflı olarak imzalanmış resmi bir **Değişiklik Protokolü (Change Order)** olmaksızın, hiçbir sözlü talep, e-posta veya anlık mesajlaşma projenin teslim tarihlerini, bütçesini veya şartname kapsamını bağlayıcı şekilde değiştiremez.

---

## 2. DEĞİŞİKLİK YÖNETİMİ İŞ AKIŞI

```
  [ 1. Adım: Değişiklik Talebinin (CR) Taraflardan Birince Sunulması ]
                                 │
                                 ▼
         [ 2. Adım: Teknik Fizibilite ve Etki Analizi ]
          (Hizmet Sağlayıcı 5 iş günü içinde adam/gün ve süre analizini tamamlar)
                                 │
                                 ▼
         [ 3. Adım: Resmi Değişiklik Formunun (Change Order) Hazırlanması ]
                                 │
                                 ▼
         [ 4. Adım: İki Taraflı İnceleme ve Ticari Onay ]
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       [ Onaylandı ve İmzalandı ]       [ Reddedildi / Ertelendi ]
                 │                               │
                 ▼                               ▼
  [ Yeni Şartname Tabanına Eklendi ]     [ Mevcut Şartname Aynen Devam Eder ]
```

---

## 3. PROFESYONEL HİZMETLER ADAM/GÜN ÜCRET CETVELİ

Değişiklik talepleri kapsamında gerekecek ek mühendislik ve geliştirme çalışmaları için uygulanacak sabit adam/gün ücretleri (KDV hariç):

| Mühendislik Rolü | Günlük Ücret (8 Saatlik Adam/Gün) | Rol Tanımı ve Sorumluluk Alanı |
| :--- | :--- | :--- |
| **Kıdemli Bulut / Çözüm Mimarı** | **$1.200,00** | Dağıtık sistem mimarisi, yüksek yük tasarımı, DB optimizasyonu |
| **Kıdemli Arka Ofis Geliştirici (Go/Node)**| **$950,00** | Mikroservis iş kuralları, API uçları, ödeme ve sepet akışları |
| **Kıdemli DevOps / SRE Uzmanı** | **$1.000,00** | Kubernetes, Kafka, Terraform, CI/CD ve izleme sistemleri |
| **Test Otomasyon / QA Mühendisi** | **$750,00** | Uçtan uca otomasyon testleri, yük ve kaos testleri |
| **UI/UX ve Önyüz Uzmanı** | **$800,00** | Headless arayüz uyarlamaları, sepet deneyimi optimizasyonu |

---

## 4. RESMİ DEĞİŞİKLİK PROTOKOLÜ (CHANGE ORDER) ŞABLONU

```markdown
# PROJE DEĞİŞİKLİK PROTOKOLÜ FORMU

Protokol Numarası: CO-2026-OMNISTORE-[ XXX ]
İlgili Teknik Şartname: SOW-2026-OMNISTORE-001
Talep Tarihi: [ YYYY-AA-GG ]
Talep Eden: [ ApexRetail Müşteri / CloudScale Hizmet Sağlayıcı ]

## 1. Talep Edilen Değişikliğin Ayrıntılı Tanımı
[ İstenen yeni modülün, üçüncü taraf entegrasyonunun veya fonksiyonel genişlemenin teknik tarifi ]

## 2. Ticari Gerekçe ve Beklenen Fayda
[ Yatırımın geri dönüşü, pazar gereksinimi veya operasyonel zorunluluk açıklaması ]

## 3. Mimari ve Sistem Etki Analizi
- Etkilenen Mikroservisler: [ Örn: Ödeme Orkestratörü, Sipariş Webhookları ]
- Sisteme Eklenecek Dış Servisler: [ Örn: Klarna Şimdi Al Sonra Öde, Trendyol Entegrasyonu ]
- Veritabanı Şema Değişiklikleri: [ Eklenecek tablo ve indeksler ]

## 4. Kaynak ve Maliyet Tablosu
| Mühendislik Rolü | Ayrılan Adam/Gün | Günlük Ücret | Ara Toplam |
|---|---|---|---|
| Kıdemli Mimar | 3 | $1.200,00 | $3.600,00 |
| Kıdemli Arka Ofis Yazılımcı | 12 | $950,00 | $11.400,00 |
| QA Test Otomasyon | 4 | $750,00 | $3.000,00 |
| **Toplam Hizmet Bedeli** | **19 Adam/Gün** | | **$18.000,00 USD** |

## 5. Proje Takvimine ve Kilometre Taşlarına Etkisi
- Etkilenen Kilometre Taşı: [ Örn: M3 Kilometre Taşı ]
- Revize Teslim Tarihi: [ Önceki: 18. Hafta -> Yeni: 20. Hafta ]
- Canlıya Geçiş Hedef Tarihi: [ YYYY-AA-GG ]

## 6. Onay ve Yürürlük
Aşağıda imzası bulunan taraflar, işbu Değişiklik Protokolünde yer alan kapsam, ücret 
ve takvim değişikliklerini kabul ederek SOW belgesini tadil etmişlerdir. Ana Sözleşmenin 
diğer tüm maddeleri aynen geçerliliğini korur.

Müşteri: ApexRetail E-Ticaret A.Ş.             Hizmet Sağlayıcı: CloudScale Systems A.Ş.
İmza: ___________________________________     İmza: ___________________________________
İsim: ___________________________________     İsim: ___________________________________
Unvan: __________________________________     Unvan: __________________________________
Tarih: __________________________________     Tarih: __________________________________
```

---

## 5. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş.**  
Yetkili İmza: ________________________________  
Tarih: ______________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş.**  
Yetkili İmza: ________________________________  
Tarih: ______________________________________  
