# 10. Değişiklik Talepleri (Change Order): "Ufak Bir Ekleme" Tuzağı

## 1. Değişiklik Talebi (Change Order - CO) Nedir?

Proje başladıktan sonra müşteriden kesinlikle şu cümleleri duyacaksın:
*   *"Biz yeni bir ödeme kuruluşuyla anlaştık, onu da sisteme bağlayıverin."*
*   *"Trendyol entegrasyonu da olsun demiştik sanki, unuttuk mu yazmayı?"*
*   *"Şu rapor ekranına 5 tane yeni filtre eklesek süper olur."*

İşte şartnamede (SOW) **baştan yazmayan** her yeni özellik, her tasarım değişikliği ve her ek entegrasyon bir **Değişiklik Talebidir (Change Order)**.

---

## 2. Adam/Gün (Man-Day) Hesabı ve Mühendislik Değeri

Yazılım sektöründe eforlar **Adam/Gün (Man-Day)** üzerinden ölçülür ve faturalandırılır. (1 Adam/Gün = 1 mühendisin 8 saatlik çalışması).

Sözleşmemizin 3. maddesindeki resmi ücret tarifesi:

| Rol | Günlük Ücret (8 Saatlik Adam/Gün) |
| :--- | :--- |
| **Kıdemli Bulut / Çözüm Mimarı** | **$1.200,00 USD** |
| **Kıdemli Arka Ofis Geliştirici (Go/Node)** | **$950,00 USD** |
| **Kıdemli DevOps / SRE Uzmanı** | **$1.000,00 USD** |
| **Test Otomasyon / QA Mühendisi** | **$750,00 USD** |
| **UI/UX ve Önyüz Uzmanı** | **$800,00 USD** |

> 💡 **Hesap Yapalım:**  
> Müşterinin *"Şuraya ufak bir entegrasyon ekleyelim"* dediği iş:
> *   1 gün mimari analiz ($1.200)
> *   5 gün backend geliştirme ($4.750)
> *   2 gün test otomasyonu ($1.500)  
> Toplam: **$7.450 Dolar (yaklaşık 250.000 TL)!**  
> Eğer sen müşteriye *"Hallederiz abi"* deyip bu işi gizlice yaparsan; şirketin kasasından **7.450 Dolar çalmış** ve projeyi 1 hafta geciktirmiş olursun!

---

## 3. Değişiklik Yönetimi İş Akışı (4 Adım)

```
  [ 1. Talep Gelir ] ──► [ 2. Etki & Maliyet Analizi ] ──► [ 3. Çift Taraflı İmza ] ──► [ 4. Koda Başla ]
   (Müşteri ister)        (Kaç gün sürer? Bütçe ne?)        (Para ve süre onaylanır)     (ASLA ÖNCEDEN DEĞİL!)
```

### 🚨 Altın Kural:
**Resmi Change Order formu iki şirketin yöneticisi tarafından İMZALANMADAN tek bir satır kod yazamazsın!**  
Çünkü imza atılmazsa müşteri ileride *"Biz bunu istememiştik ki, siz kafanıza göre yapmışsınız, parasını ödemeyiz"* diyebilir.

---

## 4. Yazılımcının Çıkarması Gereken Ders

1.  Müşterinin her talebini güler yüzle dinle ama kesinlikle "Hemen yaparız" deme.
2.  "Bu özellik şartname dışı bir geliştirme gerektiriyor; proje yöneticimizle efor ve takvim analizini yapıp size bir Change Order sunalım" de.
3.  Kendi emeğinin ve zamanının yüksek bir ticari değeri olduğunu asla unutma.
