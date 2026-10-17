# 04. SaaS Lisansı ve Kotalar: Multi-Tenant Faciası Yaşamamak

## 1. Multi-Tenant (Çoklu Kiracılık) Nedir?

SaaS yazılım geliştirmek, müstakil ev yapmak değil; büyük bir rezidans inşa etmektir:
*   Bütün müşteriler aynı Kubernetes kümesini, aynı veritabanı sunucusunu ve aynı kod tabanını kullanır.
*   Ama her dairenin (kiracının/tenant) kapısı kilitlidir ve kimse komşusunun evindeki eşyaları göremez.

---

## 2. Madde Madde Yazılımcıyı İlgilendiren Konular

### 2.1 En Büyük Korkulu Rüya: Cross-Tenant Data Leakage (Veri Karışması)

Bir SaaS yazılımcısının meslek hayatında başına gelebilecek en felaket şey:  
**ApexRetail yöneticisinin yönetim paneline girdiğinde, rakip perakendeci BrandX'in siparişlerini ve müşteri bilgilerini görmesidir!**

Bu neden olur?
```sql
-- ACEMİ YAZILIMCI SORGUSU (FACİA):
SELECT * FROM orders WHERE status = 'COMPLETED';
-- Bütün müşterilerin siparişlerini döner!

-- DOĞRU SORGUSU:
SELECT * FROM orders WHERE tenant_id = :current_tenant_id AND status = 'COMPLETED';
```

#### Mimari Olarak Nasıl Engellenir?
1.  **PostgreSQL Row-Level Security (RLS):** Veritabanı seviyesinde `tenant_id` filtresi zorunlu kılınır. Yazılımcı `WHERE tenant_id` yazmayı unutsun bile veritabanı başka kiracının verisini döndürmez.
2.  **Ayrı Şema (Schema-per-Tenant):** Her kurumsal müşteri için `apexretail.orders`, `brandx.orders` gibi izole PostgreSQL şemaları açılır.
3.  **Redis Key Namespacing:** Önbellekte anahtarlar `tenant:apexretail:cart:123` şeklinde tutulur.

---

### 2.2 Gürültülü Komşu (Noisy Neighbor) ve API Hız Sınırları (Rate Limiting)

Sözleşmenin 2. maddesinde yer alan API kotaları:
*   Standart Kapasite: 15.000 İstek/Saniye.
*   Zirve Kapasitesi: 100.000 İstek/Saniye.

> 💣 **Tehlike:**  
> Müşterinin acemi bir stajyeri sonsuz bir `while(true)` döngüsüyle API'ye saniyede 50.000 sorgu atmaya başladı.  
> Eğer sen API Gateway'e (Envoy / Kong) **Rate Limiter (Token Bucket / Leaky Bucket)** koymadıysan; sunucunun CPU'su %100 olur, diğer tüm müşterilerin sistemi çöker ve SLA cezası yersin!  
> **Kural:** Her API ucu için IP ve API Key bazlı saniye başına maksimum istek limiti (Rate Limit) konmalıdır.

---

### 2.3 "Veri Rehni Yasağı": Müşteriyle Kavga Edince Sistemi Kapatabilir miyiz?

Bazen şirketler arasında ticari fatura anlaşmazlığı çıkar. Müşteri son faturayı ödememiştir.  
Şirketteki bazı kişiler şöyle düşünebilir:  
*"Veritabanı şifresini değiştirelim, API'leri kapatalım, parayı ödemezlerse verilerini vermeyelim!"*

**SAKIN BÖYLE BİR ŞEY YAPMA!**  
SaaS Sözleşmesinin 6. maddesinde **"Koşulsuz Veri İadesi ve Veri Rehni Yasağı"** yazar.
*   Ticari anlaşmazlık ne olursa olsun, müşterinin operasyonel verilerini rehin tutamazsın.
*   Müşteri sözleşmeyi feshederse, 14 gün içinde tüm veritabanı dökümünü (PostgreSQL dump ve JSON katalog) şifreli olarak teslim etmek zorundasın.
*   Aksi takdirde şirket "ticari gasp" ve haksız fiil davasıyla karşı karşıya kalır.

---

## 3. Yazılımcının Çıkarması Gereken Ders

1.  Kodundaki tüm veritabanı sorgularında ve cache katmanlarında tenant izolasyonunu çift kontrol et.
2.  API'lerine mutlaka rate limiting ve kota kontrolleri koy; tek bir müşterinin tüm altyapıyı eritmesine izin verme.
3.  Veri aktarım ve dışa aktarma (export) scriptlerini baştan yaz; sözleşme bittiğinde manuel uğraşmak zorunda kalma.
