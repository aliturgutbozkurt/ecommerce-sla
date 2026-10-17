# 00. Sözleşmeler Neden Var ve Hangi Belge Kimi Döver?

## 1. Neden Kod Tek Başına Yetmez?

Mühendislik fakültesinde veya yazılım kamplarında (bootcamp) sana sadece kodun çalışması, testleri geçmesi ve commit atılması öğretilir. Ancak gerçek dünyada yazılım geliştirmek, iki şirket arasındaki ticari bir alışveriştir:

*   **Müşteri (Örn: ApexRetail):** "Ben sana ayda 50.000 Dolar veriyorum, sitem bir saniye bile çökemez, hacklenemez, verilerim çalınamaz." der.
*   **Yazılım Şirketi (Örn: CloudScale):** "Ben sana bu sistemi kurarım ama dünya üzerindeki hiçbir bulut sistemi %100 kesintisiz olamaz. Yılda şu kadar bakım yaparım, şu kadar hatayı tolere edersin, şu sınırı aşarsan ek para alırım." der.

İşte bu iki tarafın beklentilerini netleştiren, "Kimin kime ne zaman ne kadar para ödeyeceğini" ve "Bir şeyler patlarsa kimin sorumlu olacağını" belirleyen kurallar bütününe **Sözleşme Paketi** denir.

---

## 2. Belge Hiyerarşisi: "Hangi Belge Kimi Döver?"

Bir projede birden fazla sözleşme vardır ve bazen bu sözleşmelerdeki maddeler birbiriyle çelişir. Örneğin; Teknik Şartname (SOW) "Verileri hız için geçici süreyle üçüncü parti bir AI servisine gönderebilirsiniz" derken, Veri İşleme Sözleşmesi (DPA) "Müşteri verileri kesinlikle AB dışına çıkamaz" diyebilir. 

Bu durumda hangisi geçerlidir? İşte **Belge Öncelik Sıralaması (Precedence Order)** devreye girer:

```
    ┌──────────────────────────────────────────────┐
    │  1. Veri İşleme Sözleşmesi (DPA / KVKK-GDPR)  │ ◄── KRAL (Her şeyi ezer geçer)
    └──────────────────────┬───────────────────────┘
                           │
    ┌──────────────────────▼───────────────────────┐
    │  2. Ana Hizmet Sözleşmesi (MSA)               │ ◄── BAŞBAKAN (Genel kanunlar, para, ceza)
    └──────────────────────┬───────────────────────┘
                           │
    ┌──────────────────────▼───────────────────────┐
    │  3. Teknik Şartname ve İş Tanımı (SOW)        │ ◄── BAKAN (Teknik mimari, API'ler, iş listesi)
    └──────────────────────┬───────────────────────┘
                           │
    ┌──────────────────────▼───────────────────────┐
    │  4. Hizmet Seviyesi Taahhüdü (SLA / SLO)      │ ◄── VALİ (Uptime, gecikme, kriz müdahale)
    └──────────────────────┬───────────────────────┘
                           │
    ┌──────────────────────▼───────────────────────┐
    │  5. SaaS Lisansı, Olay Matrisi, NDA           │ ◄── YÖNETMELİKLER (Günlük operasyonel kurallar)
    └──────────────────────────────────────────────┘
```

### Madde Madde Hiyerarşi Özeti:

1.  **DPA (Veri Koruma) Neden 1. Sırada?**  
    Çünkü kanunlar (KVKK ve GDPR) devlet tarafından konur. İki şirket aralarında anlaşıp "Hadi kanunu boşverelim" diyemez. Eğer teknik şartname veri güvenliğine aykırı bir şey emrediyorsa, o şartname maddesi geçersizdir!
2.  **MSA (Ana Sözleşme) Neden 2. Sırada?**  
    Projenin anayasasıdır. Tazminat tavanları, şirketin iflası, sözleşme feshi burada yazar.
3.  **SOW (Şartname) Neden 3. Sırada?**  
    Yazılımcı olarak senin doğrudan baktığın yer burasıdır. Hangi mikroservisin yazılacağı, hangi veritabanının kullanılacağı burada yazar.
4.  **SLA Neden 4. Sırada?**  
    Sistemin ne kadar hızlı ve ayakta olması gerektiğini belirler.

---

## 3. Acemi Yazılımcının Düştüğü Klasik Tuzak

> **Senaryo:**  
> Proje Yöneticin (PM) sana geldi ve dedi ki: *"Müşteri çok rica etti, şu kullanıcı analizlerini hızlandırmak için veritabanındaki tüm müşteri ad-soyad ve telefonlarını ücretsiz bir bulut aracına POST edelim."*  
> Sen de dedin ki: *"Tamam abi, 5 satır kod, hemen yazıyorum."*

**Sonuç ne olur?**  
Tebrikler, şirketinize 10 milyon TL'ye kadar KVKK idari para cezası ve uluslararası veri kaçırma davası açtırdın!  
Çünkü SOW veya PM ne derse desin, **1. sıradaki DPA (Kişisel Veri Sözleşmesi)** üçüncü parti yurt dışı servislere habersiz veri aktarılmasını kesin olarak yasaklar.

### 💡 Yazılımcı Tavsiyesi:
Bir kod yazarken veya mimari tasarlarken "Bu yaptığım sözleşmeye uygun mu?" diye düşünmek kıdemli (Senior) mühendisle acemi (Junior) mühendisi ayıran en önemli reflekstir.
