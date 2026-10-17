# Ek D: Kişisel Veri İşleme Sözleşmesi (DPA)

**Belge Referans No:** DPA-2026-OMNISTORE-001  
**Bağlı Olduğu MSA:** MSA-2026-APEX-CS-001  
**Yasal Dayanak:** 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK m. 12) ve AB Genel Veri Koruma Tüzüğü (GDPR m. 28)  
**Yürürlük Tarihi:** 1 Kasım 2026  

---

## 1. TARAFLAR VE SÖZLEŞMENİN AMACI

İşbu Kişisel Veri İşleme Sözleşmesi ("DPA"); **ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş.** ("Veri Sorumlusu" veya "Müşteri") ile **CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş.** ("Veri İşleyen" veya "Hizmet Sağlayıcı") arasında, **OmniStore SaaS ve Birleşik E-Ticaret Motoru** altyapısının işletilmesi sırasında işlenecek kişisel verilerin güvenliğini ve yasal uyumunu temin etmek üzere akdedilmiştir.

MSA-2026-APEX-CS-001 Madde 3.2 uyarınca; kişisel verilerin korunması, gizliliği ve güvenliği konularında işbu DPA hükümleri diğer tüm sözleşme maddelerine nazaran mutlak önceliğe sahiptir.

---

## 2. VERİ İŞLEMENİN AYRINTILARI

*   **İşleme Konusu:** E-ticaret sipariş akışının sağlanması, sepet orkestrasyonu, katalog gösterimi ve ödeme entegrasyonu hizmetleri.
*   **İşleme Süresi:** Ana Sözleşme süresi artı verilerin güvenli şekilde iade veya imha edilmesine kadar geçen süre.
*   **İlgili Kişi Grupları:** Müşteri'nin e-ticaret sitelerini ve mobil uygulamalarını kullanan tüketiciler, kayıtlı üyeler ve Müşteri'nin yetkili şirket personeli.
*   **İşlenen Kişisel Veri Kategorileri:**
    *   *Kimlik ve İletişim:* Ad, soyad, e-posta adresi, telefon numarası, fatura ve teslimat adresleri.
    *   *Müşteri İşlem Verileri:* Sipariş numaraları, satın alınan ürün SKU'ları, sepet hareketleri, iade talepleri, kupon/puan bilgileri.
    *   *İşlem Güvenliği ve Loglar:* IP adresleri, tarayıcı bilgisi, oturum çerezleri, cihaz parmak izi.
*   **Özel Nitelikli Kişisel Veri:** Sistem üzerinde özel nitelikli kişisel veri işlenmez. Ham kredi kartı numaraları sisteme kaydedilemez; tüm kart işlemleri PCI-DSS SAQ-A uyumlu güvenli tokenizasyon üzerinden yürütülür.

---

## 3. VERİ İŞLEYENİN YÜKÜMLÜLÜKLERİ

Veri İşleyen şunları taahhüt eder:
1.  **Talimatlara Uygunluk:** Kişisel verileri münhasıran Veri Sorumlusu'nun yazılı talimatları doğrultusunda işlemek.
2.  **Personel Gizliliği:** Verilere erişimi olan tüm personelin yazılı gizlilik taahhüdü imzalamasını sağlamak.
3.  **Teknik ve İdari Tedbirler (TOMs):** ISO/IEC 27001 ve SOC 2 Tip II kontrollerine tam uyumlu tedbirleri almak:
    *   Verilerin ağ üzerinden iletiminde güncel TLS 1.3 şifrelemesi;
    *   Veritabanlarında ve yedeklerde AES-256 disk seviyesinde şifreleme;
    *   En az yetki (Least Privilege) ilkesi ve zorunlu Çok Faktörlü Kimlik Doğrulama (MFA);
    *   Merkezi SIEM loglaması ve 7/24 otomatik anomali izleme.
4.  **İlgili Kişi Hakları (KVKK m. 11):** Veri sahiplerinin bilgi alma, düzeltme, silme ("Unutulma Hakkı") veya aktarma taleplerini 5 (beş) iş günü içinde yerine getirebilecek teknik altyapı ve yönetim API'lerini sunmak.

---

## 4. ALT VERİ İŞLEYENLER (SUB-PROCESSORS)

### 4.1 Onaylı Alt Veri İşleyenler
Müşteri, aşağıdaki kuruluşların altyapı hizmeti sunmasını peşinen onaylar:

| Alt İşleyen Kuruluş | Hizmet Niteliği | Veri Merkezi Konumu |
| :--- | :--- | :--- |
| **Amazon Web Services (AWS) EMEA SARL** | Bulut Sunucu, Kubernetes (EKS), Veritabanı | Frankfurt (Almanya) Veri Merkezi |
| **Cloudflare Inc.** | Kenar CDN, DDoS Koruması, WAF Güvenlik Duvarı | Küresel PoP Noktaları (İstanbul/Frankfurt) |
| **Datadog Inc.** | APM Sistem Performansı ve Dağıtık İzleme | AB Veri Merkezi (Almanya) |
| **Twilio Ireland Ltd. / SendGrid** | Sipariş Bilgilendirme SMS ve E-posta Gönderimi | AB Veri Merkezi |

### 4.2 Yeni Alt İşleyen Bildirimi
Veri İşleyen, sisteme yeni bir alt işleyen eklemeden en az **30 (otuz) takvim günü önce** Müşteri'ye yazılı bildirimde bulunacaktır. Müşteri'nin makul gerekçelerle 15 gün içinde itiraz etme hakkı saklıdır.

---

## 5. VERİ İHLALİ BİLDİRİMİ (48 SAAT KURALI)

### 5.1 Acil Bildirim Süresi
Kişisel verilere yetkisiz erişim, verilerin sızması, kaybolması veya değiştirilmesi şüphesini doğuran herhangi bir güvenlik ihlali tespit edildiğinde, Veri İşleyen durumu gecikmeksizin ve en geç **kırk sekiz (48) saat içinde** Müşteri'ye yazılı olarak bildirir.

### 5.2 İhlal Raporunun İçeriği
Bildirimde asgari olarak:
1.  İhlalin niteliği, etkilenen tahmini kişi ve kayıt sayısı;
2.  Veri Koruma İrtibat Kişisinin bilgileri;
3.  İhlalin muhtemel riskleri ve sonuçları;
4.  İhlali durdurmak ve zararları azaltmak için alınan ve planlanan tüm teknik tedbirler yer alacaktır.

---

## 6. YURT DIŞINA VERİ AKTARIMI

Kişisel verilerin Türkiye dışındaki bulut veri merkezlerine aktarılması halinde;
1.  6698 sayılı Kanun'un 9. maddesi uyarınca Kişisel Verileri Koruma Kurulu tarafından ilan edilen **Standart Sözleşme** metni imzalanarak usulüne uygun şekilde Kurul'a bildirilecektir.
2.  AB vatandaşlarının verileri için Avrupa Komisyonu Standart Sözleşme Maddeleri (SCC) hükümleri uygulanacaktır.

---

## 7. DENETİM HAKKI

Müşteri veya Müşteri'nin görevlendireceği bağımsız bir siber güvenlik denetçisi, 30 gün önceden yazılı haber vermek şartıyla Veri İşleyen'in teknik sistemlerini ve SOC 2 uyumluluk kanıtlarını yılda bir kez denetleyebilir.

---

## 8. İMZALAR

**ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş. (Veri Sorumlusu)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  

**CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş. (Veri İşleyen)**  
Yetkili İmza: ________________________________  
İsim / Unvan: _______________________________  
Tarih: ______________________________________  
