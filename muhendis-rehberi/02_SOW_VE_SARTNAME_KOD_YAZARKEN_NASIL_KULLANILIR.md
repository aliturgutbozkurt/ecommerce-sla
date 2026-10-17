# 02. SOW ve Şartname: "Bitti" (Done) Ne Demek?

## 1. SOW (Statement of Work) Nedir?

SOW (Teknik Şartname ve İş Tanımı), projede yazılacak kodun **kutsal kitabıdır**.
*   Hangi sayfalar, API'ler, mikroservisler geliştirilecek?
*   Hangi veritabanı (PostgreSQL mi, MongoDB mi?) kullanılacak?
*   Sistem kaç kullanıcıya ve kaç isteğe dayanacak?
*   Hangi teslimat ne zaman yapılacak ve karşılığında ne kadar para ödenecek?  
Hepsi SOW'da satır satır yazar.

---

## 2. Madde Madde Yazılımcıyı İlgilendiren Konular

### 2.1 Kapsam Kayması (Scope Creep): Şirketleri Batıran Sessiz Katil

Müşteriyle toplantıdasın veya Slack'te konuşuyorsun. Müşteri şöyle dedi:  
> *"Ya Ahmet, sepet sayfasına bir de 'Arkadaşınla Paylaş' butonu koysak ya, iki satır kod değil mi senin için?"*

*   **Acemi Yazılımcının Yanıtı:** *"Tabii abi ya, akşama kadar hallederim ne olacak!"*  
    *(Sonuç: Buton çalışmaz, veritabanına yeni kolon gerekir, mobil uygulama bozulur, testler patlar ve 2 haftalık plansız mesai doğar. Şirket bu ekstra efor için tek kuruş alamaz.)*
*   **Kıdemli Yazılımcının Yanıtı:** *"Fikir harika, ancak bu özellik mevcut SOW kapsamımızda yer almıyor. Ürün yöneticimiz ve müşteri temsilcimizle görüşelim, Değişiklik Talebi (Change Order) olarak plana ekleyelim."*

> 📌 **Kural:** Şartnamede yazmayan hiçbir iş "küçük" veya "5 dakikalık" değildir. Şartname dışı her geliştirme şirketin bütçesinden ve senin hafta sonu tatilinden çalınır.

---

### 2.2 Fonksiyonel Olmayan Gereksinimler (NFR - Non-Functional Requirements)

Acemi yazılımcı sadece özelliğin çalışmasına bakar: *"Kullanıcı butona bastı, sipariş veritabanına yazıldı, bitti işte!"*  
Oysa SOW'un **4. maddesinde (Performans Kriterleri)** şöyle yazar:  
*   **Zirve Yük:** Saniyede 100.000 istek (100K RPS).
*   **Gecikme (Latency):** P99 gecikme < 120 milisaniye.

#### Bu Teknik Olarak Ne Anlama Gelir?
1.  **N+1 Query Problemi Yapamazsın:** Bir kategori altındaki 100 ürünü çekerken döngü içinde 100 ayrı SQL sorgusu atarsan (`for product in products: db.query(...)`), sistem 500 kullanıcıda kilitlenir. SOW'u ihlal etmiş olursun.
2.  **Dağıtık Kilit (Distributed Lock) Kullanmak Zorundasın:** Aynı anda 10.000 kişi son kalan 1 adet iPhone'u satın almaya çalıştığında, veritabanında race condition olup -9999 stoğa düşmemesi için Redis Redlock veya optimistic locking kurmalısın.
3.  **Önbellek (Cache) Mimarisi Şarttır:** Veritabanına her istekte gitmek yerine Redis ve CDN katmanlarını mimariye entegre etmelisin.

---

### 2.3 "Bitti" (Definition of Done) Ne Demektir?

Acemi yazılımcıya göre bir iş "Localhost'umda çalıştı abi" dediğinde bitmiştir.  
SOW ve Kabul Şartnamesine göre ise bir iş ancak şu şartlar sağlandığında bitmiştir:
1.  **Birim Test Kapsamı (Unit Test Coverage) ≥ %85:** Kodun en az %85'i otomatik testlerle taranmış olmalı.
2.  **Yük Testi (Load Testing):** K6 veya Locust ile sentetik 150.000 istek basıldığında hata oranı %0.01'in altında kalmalı.
3.  **Güvenlik Taraması (SAST / DAST):** Kodda OWASP Top 10 açığı (SQL Injection, XSS vb.) bulunmamalı.
4.  **CI/CD Pipeline:** Kod ana dala (main branch) sorunsuz merge edilip staging ortamına otomatik deploy edilebilmeli.

---

## 3. Yazılımcının Çıkarması Gereken Ders

Bir projeye başlarken mimariyi kafana göre değil, SOW'daki performans hedeflerine ve kısıtlamalarına göre tasarla. Kapsam dışı taleplere kibarca "Bunu Change Order ile değerlendirelim" demeyi öğren.
