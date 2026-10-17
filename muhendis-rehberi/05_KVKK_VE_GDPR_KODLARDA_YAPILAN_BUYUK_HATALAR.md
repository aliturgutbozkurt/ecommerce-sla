# 05. KVKK & GDPR: Kod Yazarken Yapılan En Büyük Hatalar

## 1. DPA ve Kişisel Veri Nedir?

DPA (Data Processing Agreement), kişisel verilerin nasıl işleneceğini düzenleyen yasal sözleşmedir.  
*   **Müşteri (ApexRetail):** **Veri Sorumlusu (Data Controller)**'dur. Verinin asıl sahibidir.
*   **Yazılım Şirketi (CloudScale):** **Veri İşleyen (Data Processor)**'dur. Müşterinin talimatıyla veriyi saklayan ve işleyen taraftır.

Acemi yazılımcılar genellikle şunu düşünür:  
*"Abi bizde sadece e-posta ve isim var, T.C. Kimlik No veya parmak izi yok ki, KVKK bizi niye bağlasın?"*

**ÇOK BÜYÜK YANILGI!**  
KVKK ve GDPR'a göre bir kişiyi doğrudan veya dolaylı olarak belirleyen **HER ŞEY kişisel veridir:**
*   İsim, soyisim, telefon, açık ev adresi
*   IP adresi ve tarayıcı çerezleri (cookies)
*   Sipariş geçmişi ve sepete atılan ürünler
*   Cihaz modeli ve konum bilgisi

---

## 2. Kod Yazarken Yapılan 4 Büyük Günah

### Günah 1: Loglara Request Body Basmak (En Yaygın Hata!)
Hata ayıklamak (debug) için yazdığın şu masum kod satırına bak:

```javascript
// ACEMİ KODU (KVKK İHLALİ):
app.post('/api/checkout', (req, res) => {
  logger.info("Yeni sipariş isteği geldi:", req.body); // ❌ FACİA!
  // req.body içinde: müşterinin adı, kredi kartı CVV'si, açık ev adresi, şifresi var!
  // Bu loglar Datadog'a veya Elasticsearch'e düz metin olarak kaydedildi!
});
```

*   **Doğrusu Nedir?**  
    Hassas alanları loglamadan önce maskelemeli (redaction) veya filtrelemelisin:
```javascript
// DOĞRU KOD:
const sanitizedBody = sanitize(req.body, ['password', 'cardNumber', 'cvv', 'phone']);
logger.info("Yeni sipariş isteği:", { userId: req.body.userId, itemsCount: req.body.items.length });
```

---

### Günah 2: Veritabanına Ham Kredi Kartı Kaydetmek
Sözleşmenin 2. maddesinde **"Ham kredi kartı verisi saklanması kesinlikle yasaktır (PCI-DSS SAQ-A)"** yazar.
*   Eğer veritabanında `credit_card_number` diye bir kolon açtıysan ve 16 haneli kart numarasını oraya kaydediyorsan, şirketin uluslararası ödeme lisansını iptal ettirirsin.
*   Kartlar asla senin sunucuna temas etmez! Iyzico veya Stripe'ın "Hosted Fields" (iFrame) aracı kullanılır; sana sadece harf ve rakamlardan oluşan geçici bir `token` (Örn: `tok_1N2e3f...`) gelir.

---

### Günah 3: Veri İhlalini Gizlemeye Çalışmak (48 Saat Kuralı)
Sözleşmenin 5. maddesi çok nettir:  
*"Herhangi bir kişisel veri sızıntısı şüphesinde, Veri İşleyen en geç **48 saat içinde** Veri Sorumlusuna yazılı bildirim yapmak zorundadır."*

> 🚨 **Senaryo:**  
> Bir AWS S3 bucket'ının public olduğunu ve müşteri faturalarının internete açık olduğunu fark ettin.  
> *"Aman kimse görmeden hemen private yapayım, kimseye de söylemeyeyim, azar işitmeyeyim"* dedin.  
> **BU SUÇTUR!**  
> Kanunlara göre veri sızıntısını gizlemek, sızıntının kendisinden daha ağır cezalandırılır. Derhal şirketin Bilgi Güvenliği Yöneticisine (CISO) ve DPO'ya (Veri Koruma Görevlisi) haber vermelisin.

---

### Günah 4: "Unutulma Hakkı"nda (Right to be Forgotten) Her Şeyi Silmek
Bir müşteri "KVKK uyarınca beni sisteminizden silin" talebinde bulundu.
*   Acemi yazılımcı gider: `DELETE FROM users WHERE id = 42; DELETE FROM orders WHERE user_id = 42;` yapar.
*   **HATA!** Maliye Bakanlığı ve Vergi Usul Kanunu, fatura ve sipariş kayıtlarının **en az 10 yıl saklanmasını** emreder.
*   **Doğrusu (Anonimleştirme):**  
    Sipariş geçmişi ve muhasebe tutarları saklanır; ancak kullanıcının adı `Anonim Kullanıcı`, e-postası `silindi_42@gdpr.invalid`, telefonu ve adresi `***` ile ezilir.

---

## 3. Yazılımcının Çıkarması Gereken Ders

1.  Loglarına ne yazdığını her zaman kontrol et; şifre, token ve kişisel veri basma.
2.  Veritabanlarında hassas kolonları (adres, telefon) uygulama katmanında şifrele (Application-level encryption - AES-256).
3.  Ödeme işlemlerinde daima PCI-DSS uyumlu tokenizasyon mimarisine sadık kal.
