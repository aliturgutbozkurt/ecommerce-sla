# Yönetici Özeti: SaaS ve Birleşik E-Ticaret Hukuki ve Teknik Sözleşme Çerçevesi

## 1. Proje Arka Planı ve Sözleşme Mimarisi

Bu sözleşme paketi, **OmniStore SaaS ve Birleşik E-Ticaret Motoru** platformunun tasarımı, yazılım geliştirmesi, bulut konuşlandırması, sürekli barındırılması, teknik desteği ve kesintisiz hizmet seviyesi taahhütlerini düzenler. Taraflar:

*   **Müşteri (E-Ticaret Şirketi):** **ApexRetail Elektronik Ticaret ve Bilişim Hizmetleri A.Ş.** (Aylık 10 milyondan fazla aktif kullanıcıya ve kampanya dönemlerinde saatte 50.000 sipariş zirvesine sahip çok kanallı perakende devi).
*   **Hizmet Sağlayıcı (Yazılım Şirketi):** **CloudScale Systems Bilişim ve Yazılım Çözümleri A.Ş.** (Bulut yerel SaaS mimarileri, yüksek erişilebilir dağıtık sistemler ve yönetilen altyapı sağlayıcısı).

```
                             ┌──────────────────────────────────────┐
                             │     Ana Hizmet Sözleşmesi (MSA)       │
                             │         [En Üst Hiyerarşik Belge]     │
                             └──────────────────┬───────────────────┘
                                                │
         ┌────────────────────────┬─────────────┴────────────┬────────────────────────┐
         │                        │                          │                        │
         ▼                        ▼                          ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Teknik Şartname  │    │ Hizmet Seviyesi  │    │ SaaS Abonelik ve │    │ Veri İşleme      │
│ ve İş Tanımı     │    │ Taahhüdü (SLA)   │    │ Lisans Sözleşmesi│    │ Sözleşmesi (DPA) │
│ (SOW)            │    │ SLO'lar & Ceza   │    │ Çoklu Kiracılık  │    │ KVKK & GDPR      │
└────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘
         │                       │                       │                       │
         └───────────────────────┴───────────┬───────────┴───────────────────────┘
                                             │
                       ┌─────────────────────┴─────────────────────┐
                       ▼                                           ▼
             ┌───────────────────┐                       ┌───────────────────┐
             │ Karşılıklı        │                       │ Olay Yönetimi ve  │
             │ Gizlilik (NDA)    │                       │ Eskalasyon Matrisi│
             └───────────────────┘                       └───────────────────┘
```

---

## 2. Belge Hiyerarşisi ve Öncelik Sıralaması

Sözleşme paketini oluşturan belgeler arasında herhangi bir çelişki veya uyumsuzluk olması halinde, aşağıdaki öncelik sırası esas alınacaktır:

1.  **Veri İşleme Sözleşmesi (DPA - KVKK/GDPR)** *(Kişisel verilerin güvenliği, gizliliği ve kanuni uyumlulukta mutlaktır)*
2.  **Ana Hizmet Sözleşmesi (MSA)** *(Temel ticari koşullar, sorumluluk sınırları ve uyuşmazlık çözümü)*
3.  **Teknik Şartname ve İş Tanımı Belgesi (SOW)** *(Proje teslimatları, kilometre taşları ve teknik kapsam)*
4.  **Hizmet Seviyesi Taahhüdü ve Hedefleri (SLA/SLO)** *(Çalışma süresi, yanıt süreleri ve ceza/hizmet kredisi kuralları)*
5.  **SaaS Abonelik ve Lisans Sözleşmesi** *(Bulut kullanım kotaları, adil kullanım ilkeleri ve lisans hakları)*
6.  **Olay Yönetimi ve Eskalasyon Matrisi** *(Operasyonel destek seviyeleri ve kriz müdahalesi)*
7.  **Gizlilik Sözleşmesi (NDA)** *(Ticari sırların ve mülkiyet bilgilerinin korunması)*

---

## 3. Temel Finansal ve Operasyonel Değerler Tablosu

| Boyut / Parametre | Taahhüt / Değer | İlgili Sözleşme Belgesi |
| :--- | :--- | :--- |
| **Sistem Çalışma Süresi (Uptime)** | **%99.95** (Aylık Standart) / **%99.99** (Efsane Cuma / Siber Hafta Zirvesi) | [SLA/SLO Sözleşmesi](03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO.md) |
| **P1 Kritik Arıza Müdahale / Çözüm** | İlk Yanıt (MTTA) ≤ **15 dk**, Çözüm (MTTR) ≤ **60 dk** (7/24 Nöbetçi Mühendis) | [Eskalasyon Matrisi](07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md) |
| **Maksimum Hizmet Kredisi (Ceza)** | İhlal derecesine göre aylık abonelik bedelinin **%30'una** kadar fatura mahsubu | [SLA/SLO Sözleşmesi](03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO.md) |
| **Zirve Yük Kapasitesi** | 100.000 İstek/Sn (P99 Gecikme < 120ms), Saatte 50.000 Ödeme İşlemi | [Teknik Şartname (SOW)](02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md) |
| **Felaket Kurtarma (DR)** | **RTO ≤ 1 Saat**, **RPO ≤ 15 Dakika** (Farklı Bölge Aktif-Pasif Replikasyon) | [Escrow & İş Sürekliliği](09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md) |
| **Mali Sorumluluk Sınırı (Cap)** | Son 12 ayda ödenen toplam hizmet bedeli (KVKK, Fikri Mülkiyet ve Ağır Kusur hariç) | [Ana Hizmet Sözleşmesi](01_ANA_HIZMET_SOZLESMESI_MSA.md) |
| **Kaynak Kod Yediemin (Escrow)** | İki haftada bir bağımsız yediemin kuruluşuna (EscrowTech / NCC) otomatik yükleme | [Escrow & İş Sürekliliği](09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md) |

---

## 4. Sözleşme Paketi Rehberi

*   **`01_ANA_HIZMET_SOZLESMESI_MSA.md`**: Tarafların genel hakları, fikri mülkiyet aidiyeti, tazminat, sorumluluk sınırlamaları, fesih şartları ve yetkili mahkemeler.
*   **`02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md`**: Mikroservis mimarisi, API entegrasyonları, ödeme orkestrasyonu, kabul kriterleri ve teslimat fazları.
*   **`03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO.md`**: SLI/SLO metrikleri, kesinti süre hesaplamaları, hariç tutulan haller ve fatura kesinti/kredi cetveli.
*   **`04_SAAS_ABONELIK_VE_LISANS_SOZLESMESI.md`**: Çoklu kiracılı bulut mimarisi, kullanıcı ve kota sınırlamaları, yedekleme politikaları ve sözleşme sonu veri tahliyesi.
*   **`05_VERI_ISLEME_SOZLESMESI_DPA_KVKK.md`**: 6698 sayılı KVKK ve GDPR uyumlu veri sorumlusu - veri işleyen ilişkisi, veri güvenliği tedbirleri ve ihlal bildirimleri.
*   **`06_GIZLILIK_SOZLESMESI_NDA.md`**: Karşılıklı ticari sırlar, kaynak kodlar, müşteri verileri ve algoritmaların korunması.
*   **`07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md`**: P1-P4 arıza önceliklendirmesi, 7/24 çağrı merkezi ve eskalasyon yolları, Kök Neden Analizi (RCA) şablonu.
*   **`08_KABUL_TESTI_VE_TESLIM_TUTANAGI_UAT.md`**: Kullanıcı kabul testleri (UAT), koşullu kabul mekanizması ve teslim tesellüm tutanak örneği.
*   **`09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md`**: Yazılım şirketi iflas veya ağır hizmet aksatma durumunda kodların müşteriye açılması ve felaket kurtarma hedefleri.
*   **`10_DEGISIKLIK_TALEBI_PROSEDURU_VE_FORMU.md`**: Proje devam ederken ortaya çıkan kapsam değişikliklerinin maliyet, adam/gün ve süre analizi ile onaya sunulması.
