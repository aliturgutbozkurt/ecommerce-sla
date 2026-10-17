# Ek G: Kullanıcı Kabul Testi (UAT) ve Teslim Tesellüm Tutanağı

**Belge Referans No:** UAT-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001 & SOW-2026-OMNISTORE-001  
**Yürürlük Tarihi:** 1 Kasım 2026  

---

## 1. KABUL TESTLERİNİN AMACI VE YÖNETİMİ

İşbu Kabul Testi ve Teslim Tesellüm Protokolü; Teknik Şartname (`SOW-2026-OMNISTORE-001`) kapsamında tamamlanan kilometre taşlarının teknik ve işlevsel doğrulanmasını ve hakediş onay mekanizmasını düzenler.

Testler, **CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş.** ("Hizmet Sağlayıcı") tarafından canlı ortama birebir eşdeğer olarak hazırlanan test (staging) ortamında yürütülür ve **ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş.** ("Müşteri") ürün ve mühendislik ekipleri tarafından titizlikle denetlenir.

---

## 2. TEST AŞAMALARI VE METODOLOJİ

```
[ Teslimat Bildirimi ] ──► [ Otomasyon Testlerinin Koşulması ] ──► [ İş Senaryosu UAT Testleri ]
                                                                             │
[ Canlı Kabul İmzası ] ◄── [ Güvenlik ve Stres Testleri ] ◄─────────────────┘
```

1.  **Entegrasyon ve Regresyon Testleri:** Cypress, Playwright ve Postman ile otomatik uçtan uca senaryoların çalıştırılması.
2.  **Kullanıcı Kabul Testleri (UAT):** Sepet akışları, kupon kuralları, stok rezervasyonları, sipariş iptal/iade adımları ve ERP web servislerinin testi.
3.  **Yük ve Stres Testleri:** Sistemin saniyede 150.000 istek yük altında P99 gecikmesinin 120ms altında kaldığının ve bellek sızıntısı olmadığının teyidi.
4.  **Güvenlik ve Sızma Testi Doğrulaması:** Bağımsız siber güvenlik firması tarafından gerçekleştirilen zafiyet taraması.

---

## 3. HATA DERECELENDİRMESİ VE KABUL EŞİKLERİ

10 (on) iş günlük kabul testi sürecinde tespit edilen bulgular aşağıdaki biçimde sınıflandırılır:

| Hata Seviyesi | Tanım | Kabule Etkisi |
| :--- | :--- | :--- |
| **Seviye 1 (Engelleyici / Blocker)** | Sistemin çökmesi, veri bozulması, ödemenin durması, kritik güvenlik açığı. | **Kesin Ret:** Kilometre taşı reddedilir; 3 iş günü içinde düzeltilip yeniden sunulmalıdır. |
| **Seviye 2 (Kritik / Critical)** | Ana işlevin çalışmaması (alternatifsiz), ERP stok senkronizasyonunun kopması. | **Kesin Ret:** Hata giderilip test edilene kadar kabul verilmez. |
| **Seviye 3 (Büyük / Major)** | Geçici alternatif çözümü (workaround) bulunan fonksiyonel hata. | **Şartlı Kabul:** 10 iş günü içinde giderilmek üzere şartlı kabul imzalanabilir. |
| **Seviye 4 (Küçük / Minor)** | Kozmetik panel hatası, metin yazım yanlışı, küçük görsel kusur. | **Tam Kabul:** Genel sürüm iş listesine (backlog) eklenerek onay verilir. |

---

## 4. TESLİM TESELLÜM VE KABUL TUTANAĞI ÖRNEĞİ

### KİLOMETRE TAŞI KABUL VE TESLİM TESELLÜM TUTANAĞI

```markdown
Proje Adı: OmniStore SaaS ve Birleşik E-Ticaret Motoru
Kilometre Taşı Referansı: [ Örneğin: M3 - Sepet ve Ödeme Sistemi Entegrasyonu ]
Teslim Bildirim Tarihi: ____________________
Test Tamamlanma Tarihi: ___________________

BÖLÜM A: TEST ÖZETİ
- Koşulan Toplam Test Senaryosu: [ 450 ]
- Başarılı Test Sayısı: [ 448 ]
- Seviye 1 (Engelleyici) Hata Sayısı: [ 0 ]
- Seviye 2 (Kritik) Hata Sayısı: [ 0 ]
- Seviye 3 (Büyük) Hata Sayısı: [ 2 - Ekli Eksik Listesinde Belirtilmiştir ]
- Seviye 4 (Küçük) Hata Sayısı: [ 5 - Backlog'a Aktarılmıştır ]

BÖLÜM B: KABUL KARARI (Birini Seçiniz)
[   ] TAM KABUL: Teslimat Teknik Şartnamedeki tüm kabul kriterlerini eksiksiz karşılamaktadır.
[   ] ŞARTLI KABUL: Teslimat ekteki Eksik Listesindeki (Punch-List) maddelerin 
      [ Tarih: ____________ ] tarihine kadar giderilmesi şartıyla kabul edilmiştir.
[   ] RET: Teslimat Seviye 1 veya Seviye 2 hatalar nedeniyle kabul edilmemiştir. 
      Yüklenici eksikleri gidererek sistemi yeniden teste sunacaktır.

BÖLÜM C: HAKEDİŞ VE FATURA ONAYI
İşbu Tutanağın Taraflarca imzalanmasıyla:
- Hakediş Oranı: [ %25 ]
- Fatura Edilecek Tutar: [ 125.000,00 USD ] + KDV.
```

---

## 5. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş. (Müşteri)**  
Kabul Eden: __________________________________________  
Unvan: Mühendislik Direktörü / Kıdemli Ürün Yöneticisi  
İmza: ________________________________________________  
Tarih: _______________________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş. (Hizmet Sağlayıcı)**  
Teslim Eden: _________________________________________  
Unvan: Proje Direktörü / Baş Sistem Mimarı  
İmza: ________________________________________________  
Tarih: _______________________________________________  
