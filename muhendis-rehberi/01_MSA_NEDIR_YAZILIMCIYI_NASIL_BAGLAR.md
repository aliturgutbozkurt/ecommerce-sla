# 01. MSA (Ana Sözleşme): Kodum Benim mi Şirketin mi?

## 1. MSA (Master Services Agreement) Nedir?

MSA, iki şirketin evlilik cüzdanı gibidir. Projenin en üst seviye anayasasıdır. Teknik detaylardan ziyade:
*   "Bu yazılımın telif hakkı kime ait olacak?"
*   "Bir hata yüzünden müşteri milyonlar kaybederse ne kadar tazminat öderiz?"
*   "Hangi durumda sözleşme iptal edilir?"  
gibi devasa hukuki ve mali konuları belirler.

---

## 2. Madde Madde Yazılımcıyı İlgilendiren MSA Konuları

### 2.1 Fikri Mülkiyet (IP Rights): Yazdığın Kod Kime Ait?
Sözleşmede iki temel kavram görürsün:

1.  **Background IP (Önceden Var Olan Mülkiyet):**  
    Yazılım şirketinin yıllardır geliştirdiği, projenin temelini oluşturan SaaS çekirdeği, genel login kütüphaneleri, ortak mesajlaşma katmanlarıdır. Bunlar **yazılım şirketinde kalır**. Müşteriye sadece "kullanım lisansı" verilir.
2.  **Foreground IP / Custom Work Product (Özel Geliştirme):**  
    Müşterinin özel istekleri doğrultusunda parasını vererek yazdırdığı özel algoritmalar, müşteriye özel ERP entegrasyon kodları ve tasarımlardır. Bunlar **müşteriye aittir**.

> ⚠️ **Acemi Hatası (Açık Kaynak Lisans Zehirlenmesi):**  
> GitHub'dan veya npm'den rastgele bir kütüphane alıp projeye ekledin. Ama kütüphanenin lisansı **GPL v3.0** idi!  
> GPL lisansı "Bu kütüphaneyi kullanan tüm projeler kaynak kodunu dünyaya açık yayınlamak zorundadır" der. Bir bakarsın, müşterinin 5 milyon dolarlık özel projesini yasal olarak açık kaynak yapmak zorunda kalmışsınız.  
> **Kural:** Şirket projelerinde MIT, Apache 2.0 veya BSD lisanslı kütüphaneler tercih edilir. GPL lisanslı kodları izinsiz projeye sokma!

---

### 2.2 Sorumluluk Limiti (Liability Cap) ve "Ağır Kusur"

Sözleşmenin 9. maddesinde şöyle yazar:  
*"Tarafların toplam tazminat sorumluluğu, son 12 ayda ödenmiş hizmet bedeliyle sınırlıdır."*

*   **Bu ne demek?**  
    Sistem çöker ve e-ticaret sitesi 10 milyon dolar ciro kaybederse, müşteri yazılım şirketinden en fazla son 1 yılda ödediği parayı (diyelim 500.000 dolar) tazminat olarak geri alabilir. Şirket batmaktan kurtulur.
*   **Ama dikkat: İstisnalar (Cap'in Kalktığı Haller)!**  
    Eğer olayda **Ağır Kusur (Gross Negligence)** veya **Kasıt** varsa bu tavan sınır kalkar! Şirket sınırsız tazminatla karşı karşıya kalır.

> 💣 **Yazılımcı İçin Ağır Kusur Örneği:**  
> Test ortamında AWS root şifresini hardcoded koda gömüp public GitHub reposuna pushladın. Hackerlar botnet ile AWS'i taradı, anahtarı kaptı, tüm müşteri veritabanını sildi ve fidye istedi.  
> Bu bir "basit yazılım hatası" değildir; bu **ağır kusurdur**. Sorumluluk tavanı delinir ve fatura doğrudan senin şirketine kesilir.

---

### 2.3 Garanti Süresi (Warranty)

Sözleşmede canlıya geçişten sonra **12 aylık kusur garantisi** verilir.
*   Eğer şartnamede "Sipariş iptal edildiğinde stok derhal iade edilir" yazıyorsa ve senin yazdığın koddaki race condition yüzünden stok geri yüklenmiyorsa; müşteri bunu 8 ay sonra bile fark etse, şirket o hatayı **tek kuruş ek ücret almadan düzeltmek zorundadır**.
*   Bu yüzden "Canlıya attık, kurtulduk, artık müşterinin sorunu" düşüncesi kurumsal dünyada geçerli değildir.

---

## 3. Yazılımcının Çıkarması Gereken Ders

1.  Lisansını bilmediğin kütüphaneleri projeye ekleme.
2.  Güvenlik kurallarını (secret yönetimi, credential saklama) "aman sonra hallederim" diye geçiştirme.
3.  Kodun ileride bakımını başkalarının yapacağını bilerek dokümante et ve test yaz.
