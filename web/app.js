// OmniStore SaaS Contracts & SLA Suite Interactive Logic
let currentLang = 'en';
let currentCategory = 'all';

// Contract Database (Bilingual)
const contractsData = [
  {
    id: '00',
    category: 'legal',
    en: {
      title: 'Executive Summary & Contract Precedence',
      code: 'EXEC-00',
      file: '../en/00_EXECUTIVE_SUMMARY.md',
      desc: 'Master architectural summary, governing legal hierarchy (DPA > MSA > SOW > SLA), and relationship matrix between ApexRetail and CloudScale.',
      clause: `## Document Hierarchy & Precedence
In the event of any conflict or ambiguity between the provisions of the documents comprising this suite, the following order of precedence shall strictly govern:
1. Data Processing Agreement (DPA) (KVKK / GDPR Compliance)
2. Master Services Agreement (MSA)
3. Statement of Work (SOW) & Technical Specifications
4. Service Level Agreement (SLA / SLO)
5. SaaS Subscription & License Agreement`
    },
    tr: {
      title: 'Yönetici Özeti ve Sözleşme Öncelik Sıralaması',
      code: 'OZET-00',
      file: '../tr/00_YONETICI_OZETI.md',
      desc: 'Proje ana özeti, sözleşme hiyerarşisi (DPA > MSA > SOW > SLA) ve ApexRetail ile CloudScale arasındaki hukuki ilişki matrisi.',
      clause: `## Belge Hiyerarşisi ve Öncelik Sıralaması
Sözleşme paketini oluşturan belgeler arasında herhangi bir çelişki veya uyumsuzluk olması halinde, aşağıdaki öncelik sırası esas alınacaktır:
1. Veri İşleme Sözleşmesi (DPA - KVKK/GDPR)
2. Ana Hizmet Sözleşmesi (MSA)
3. Teknik Şartname ve İş Tanımı Belgesi (SOW)
4. Hizmet Seviyesi Taahhüdü ve Hedefleri (SLA/SLO)
5. SaaS Abonelik ve Lisans Sözleşmesi`
    }
  },
  {
    id: '01',
    category: 'legal',
    en: {
      title: 'Master Services Agreement (MSA)',
      code: 'MSA-01',
      file: '../en/01_MASTER_SERVICES_AGREEMENT_MSA.md',
      desc: 'Supreme governing legal contract covering intellectual property ownership, 12-month liability caps, indemnification, warranty, and dispute resolution.',
      clause: `## 9. LIMITATION OF LIABILITY
9.2 Aggregate Liability Cap: EXCEPT FOR UNLIMITED LIABILITIES, EACH PARTY'S TOTAL AGGREGATE LIABILITY SHALL BE CAPPED AT THE TOTAL FEES PAID OR PAYABLE BY CUSTOMER DURING THE TWELVE (12) MONTH PERIOD PRECEDING THE INCIDENT.
9.3 Exclusions: Cap shall NOT apply to: (1) Confidentiality breaches; (2) Data privacy/GDPR/KVKK violations; (3) IP Indemnification; (4) Gross negligence or intentional misconduct.`
    },
    tr: {
      title: 'Ana Hizmet Sözleşmesi (MSA)',
      code: 'MSA-01',
      file: '../tr/01_ANA_HIZMET_SOZLESMESI_MSA.md',
      desc: 'Tarafların temel hakları, fikri mülkiyet aidiyeti, son 12 ay sorumluluk tavanı (cap), tazminat ve uyuşmazlık çözüm kurallarını içeren ana hukuki metin.',
      clause: `## 9. SORUMLULUĞUN SINIRLANDIRILMASI
9.2 Toplam Sorumluluk Limiti: TARAFLARIN HER TÜRLÜ MADDİ TAZMİNAT SORUMLULUĞU, ZARARA SEBEP OLAN OLAYDAN ÖNCEKİ SON 12 (ON İKİ) AY BOYUNCA ÖDENMİŞ TOPLAM HİZMET BEDELİ İLE SINIRLIDIR.
9.3 İstisnalar: Gizlilik ihlali, KVKK/GDPR veri ihlalleri, Fikri mülkiyet tazminatı ve ağır kusur hallerinde sorumluluk sınırsızdır.`
    }
  },
  {
    id: '02',
    category: 'technical',
    en: {
      title: 'Statement of Work (SOW) & Technical Specs',
      code: 'SOW-02',
      file: '../en/02_STATEMENT_OF_WORK_SOW_SPECIFICATION.md',
      desc: 'Complete architectural specification: Go/Node.js microservices, PostgreSQL Patroni, Redis Redlock, Kafka bus, 100K RPS performance benchmarks, and 5 project milestones.',
      clause: `## 4. NON-FUNCTIONAL & PERFORMANCE SPECIFICATIONS
- API Latency (Read): P95 < 60ms, P99 < 120ms at 100,000 RPS
- API Latency (Write/Cart): P95 < 120ms, P99 < 250ms at 15,000 RPS
- Peak Checkout Capacity: 50,000 completed orders / hour
- System Availability: ≥ 99.95% (standard), ≥ 99.99% (Cyber Week)
- RPO ≤ 15 minutes, RTO ≤ 1 hour`
    },
    tr: {
      title: 'Teknik Şartname ve İş Tanımı Belgesi (SOW)',
      code: 'SOW-02',
      file: '../tr/02_TEKNIK_SARTNAME_VE_IS_TANIMI_SOW.md',
      desc: 'Mikroservis mimarisi, saniyede 100.000 istek kapasitesi, Redis dağıtık stok kilidi, Kafka olay yolu, saatte 50.000 sipariş işleme kapasitesi ve teslimat fazları.',
      clause: `## 4. FONKSİYONEL OLMAYAN VE PERFORMANS KRİTERLERİ
- API Okuma Gecikmesi: 100.000 RPS altında P95 < 60ms, P99 < 120ms
- Sepet/Yazma Gecikmesi: 15.000 RPS altında P95 < 120ms, P99 < 250ms
- Zirve Sipariş Kapasitesi: Saatte 50.000 başarılı ödeme ve sipariş
- Erişilebilirlik: ≥ %99.95 (Normal aylar), ≥ %99.99 (Efsane Cuma)
- RPO ≤ 15 dakika, RTO ≤ 1 saat`
    }
  },
  {
    id: '03',
    category: 'sla',
    en: {
      title: 'Service Level Agreement (SLA & SLO)',
      code: 'SLA-03',
      file: '../en/03_SERVICE_LEVEL_AGREEMENT_SLA_SLO.md',
      desc: '99.95% monthly uptime commitment, 99.99% Cyber Week peak SLA, SLI/SLO indicators, service credit penalty matrix (10% to 50%), and maintenance window rules.',
      clause: `## 5. SERVICE CREDIT PENALTY CALCULATION
- Actual Availability ≥ 99.95%: 0% Credit (SLA Met)
- 99.90% to < 99.95%: 10% Credit (20% in Peak Campaign)
- 99.50% to < 99.90%: 20% Credit (40% in Peak Campaign)
- 99.00% to < 99.50%: 35% Credit (70% in Peak Campaign)
- < 99.00%: 50% Credit (100% in Peak) + Right to Terminate for Cause`
    },
    tr: {
      title: 'Hizmet Seviyesi Taahhüdü ve Hedefleri (SLA & SLO)',
      code: 'SLA-03',
      file: '../tr/03_HIZMET_SEVIYESI_TAAHHUDU_SLA_SLO.md',
      desc: '%99.95 aylık kesintisiz çalışma taahhüdü, Efsane Cuma %99.99 özel hedefi, arıza durumunda %10-%50 arası fatura indirimi (hizmet kredisi) kuralları.',
      clause: `## 5. HİZMET KREDİSİ (CEZA VE İNDİRİM) CETVELİ
- Gerçekleşen Uptime ≥ %99.95: %0 Ceza (SLA Başarılı)
- %99.90 ile < %99.95 arası: %10 İndirim (Kampanyada %20)
- %99.50 ile < %99.90 arası: %20 İndirim (Kampanyada %40)
- %99.00 ile < %99.50 arası: %35 İndirim (Kampanyada %70)
- < %99.00: %50 İndirim (Kampanyada %100) + Haklı Nedenle Fesih Hakkı`
    }
  },
  {
    id: '04',
    category: 'sla',
    en: {
      title: 'SaaS Subscription & License Agreement',
      code: 'SUBS-04',
      file: '../en/04_SAAS_SUBSCRIPTION_LICENSE_AGREEMENT.md',
      desc: 'Multi-tenant cloud resource partitioning, 250 staff seats, unlimited shoppers, 100K RPS burst policy, 30-day point-in-time recovery, and exit data portability.',
      clause: `## 6. SUBSCRIPTION TERMINATION & DATA PORTABILITY
6.1 Unconditional Data Extraction: Within fourteen (14) calendar days of termination, Provider shall furnish Customer with a complete, encrypted export of all Customer Data, database dumps (PostgreSQL raw SQL and JSON), and media assets via secure S3 pre-signed bucket. Zero data ransom allowed.`
    },
    tr: {
      title: 'SaaS Abonelik ve Yazılım Lisans Sözleşmesi',
      code: 'SUBS-04',
      file: '../tr/04_SAAS_ABONELIK_VE_LISANS_SOZLESMESI.md',
      desc: 'Çoklu kiracılı bulut kaynak izolasyonu, 250 yetkili kullanıcı, sınırsız tüketici trafiği, 30 günlük anlık veritabanı geri dönüşü (PITR) ve sözleşme sonu veri tahliyesi.',
      clause: `## 6. SÖZLEŞME SONU VERİ TAHLİYESİ VE VERİ TAŞINABİLİRLİĞİ
6.1 Koşulsuz Veri İadesi: Fesih tarihinden itibaren 14 gün içinde Müşteri veritabanı kayıtları (PostgreSQL SQL ve JSON dökümleri) şifreli olarak teslim edilir. Veri rehni veya ticari alacak gerekçesiyle geciktirme kesinlikle yasaktır.`
    }
  },
  {
    id: '05',
    category: 'compliance',
    en: {
      title: 'Data Processing Agreement (DPA - GDPR & KVKK)',
      code: 'DPA-05',
      file: '../en/05_DATA_PROCESSING_AGREEMENT_DPA_GDPR.md',
      desc: 'Data Controller vs Data Processor terms under GDPR Art. 28 and Turkish KVKK Law 6698, sub-processors list, TLS 1.3, AES-256, and mandatory 48-hour breach notification.',
      clause: `## 5. PERSONAL DATA BREACH NOTIFICATION
5.1 48-Hour Notification Window: In the event of a confirmed or suspected Personal Data breach, Provider shall notify Customer in writing without undue delay and in any event within forty-eight (48) hours of becoming aware of the incident, including details of affected data subjects and mitigation measures.`
    },
    tr: {
      title: 'Kişisel Veri İşleme Sözleşmesi (DPA - KVKK & GDPR)',
      code: 'DPA-05',
      file: '../tr/05_VERI_ISLEME_SOZLESMESI_DPA_KVKK.md',
      desc: '6698 sayılı KVKK m. 12 ve GDPR m. 28 uyumlu veri sorumlusu - veri işleyen ilişkisi, alt işleyenler, şifreleme standartları ve 48 saatlik zorunlu veri ihlali bildirimi.',
      clause: `## 5. VERİ İHLALİ BİLDİRİMİ (48 SAAT KURALI)
5.1 Acil Bildirim Süresi: Kişisel verilerin güvenliğini tehdit eden herhangi bir sızıntı veya yetkisiz erişim tespit edildiğinde, Veri İşleyen durumu en geç kırk sekiz (48) saat içinde Veri Sorumlusu'na yazılı olarak bildirir.`
    }
  },
  {
    id: '06',
    category: 'legal',
    en: {
      title: 'Mutual Non-Disclosure Agreement (NDA)',
      code: 'NDA-06',
      file: '../en/06_NON_DISCLOSURE_AGREEMENT_NDA.md',
      desc: 'Comprehensive mutual protection for source code, algorithmic logic, pricing formulas, penetration test reports, with perpetual protection for trade secrets.',
      clause: `## 6. TERM OF CONFIDENTIALITY
The obligations under this NDA shall remain in full force during the Term of the MSA and shall survive for a period of five (5) years following expiration or termination; provided, however, that trade secrets, proprietary algorithms, and source code shall remain confidential in perpetuity.`
    },
    tr: {
      title: 'Karşılıklı Gizlilik Sözleşmesi (NDA)',
      code: 'NDA-06',
      file: '../tr/06_GIZLILIK_SOZLESMESI_NDA.md',
      desc: 'Kaynak kodlar, algoritmalar, ticari sırlar, müşteri verileri ve penetrasyon test sonuçlarının karşılıklı korunması; ticari sırlar ve kodlar için süresiz gizlilik.',
      clause: `## 6. GİZLİLİK YÜKÜMLÜLÜĞÜNÜN SÜRESİ
İşbu Gizlilik Sözleşmesi, Ana Hizmet Sözleşmesi'nin süresi boyunca ve fesihten itibaren beş (5) yıl süreyle yürürlükte kalır. Ancak kaynak kodlar, algoritmalar ve ticari sırlar üzerindeki gizlilik yükümlülüğü süresiz olarak devam edecektir.`
    }
  },
  {
    id: '07',
    category: 'sla',
    en: {
      title: 'Incident Management & Escalation Matrix',
      code: 'ESC-07',
      file: '../en/07_INCIDENT_MANAGEMENT_ESCALATION_MATRIX.md',
      desc: 'P1 to P4 severity classification, 24/7 on-call SRE rotation, War Room protocol, PagerDuty integration, and 5-business-day blameless Root Cause Analysis (RCA).',
      clause: `## 2. SEVERITY TIERS & TARGETS
- P1 Critical: MTTA ≤ 15 min | MTTR ≤ 60 min | Updates every 15 min in War Room
- P2 Major: MTTA ≤ 30 min | MTTR ≤ 4 hours | Updates every 60 min
- P3 Minor: MTTA ≤ 2 hours | MTTR ≤ 24 hours | Daily ticket update
- P4 Low: MTTA ≤ 8 hours | MTTR ≤ 5 business days | Sprint review`
    },
    tr: {
      title: 'Olay Yönetimi ve Eskalasyon Matrisi',
      code: 'ESC-07',
      file: '../tr/07_OLAY_YONETIMI_VE_ESKALASYON_MATRISI.md',
      desc: 'P1-P4 arıza seviyeleri, 7/24 nöbetçi SRE rotasyonu, 10 dakikada kriz masası açılışı, eskalasyon yolları ve 5 iş günü içinde Kök Neden Analizi (RCA) raporu.',
      clause: `## 2. ARIZA DERECELERİ VE HEDEFLER
- P1 Kritik: İlk Yanıt ≤ 15 dk | Çözüm ≤ 60 dk | Kriz Masasında 15 dk'da bir özet
- P2 Yüksek: İlk Yanıt ≤ 30 dk | Çözüm ≤ 4 saat | Saatte bir bilgilendirme
- P3 Orta: İlk Yanıt ≤ 2 saat | Çözüm ≤ 24 saat | Günlük bilet güncellemesi
- P4 Düşük: İlk Yanıt ≤ 8 saat | Çözüm ≤ 5 iş günü | Haftalık planlama`
    }
  },
  {
    id: '08',
    category: 'technical',
    en: {
      title: 'User Acceptance Testing (UAT) & Sign-Off',
      code: 'UAT-08',
      file: '../en/08_UAT_ACCEPTANCE_TESTING_SIGN_OFF.md',
      desc: 'Formal 10-business-day acceptance review, 150K RPS load simulation checks, defect severity classification, conditional acceptance terms, and sign-off certificate.',
      clause: `## 3. DEFECT CLASSIFICATION & ACCEPTANCE
- Severity 1 (Blocker): Strict Rejection; resubmit in 3 business days.
- Severity 2 (Critical): Strict Rejection until remediated.
- Severity 3 (Major): Conditional Acceptance subject to 10-day punch-list fix.
- Severity 4 (Minor): Acceptance Granted; addressed in regular backlog.`
    },
    tr: {
      title: 'Kullanıcı Kabul Testi (UAT) ve Teslim Tutanağı',
      code: 'UAT-08',
      file: '../tr/08_KABUL_TESTI_VE_TESLIM_TUTANAGI_UAT.md',
      desc: '10 iş günlük kabul süreci, 150.000 RPS yük testi onayı, hata derecelendirmesi, şartlı kabul protokolü ve hakediş onay tutanağı şablonu.',
      clause: `## 3. HATA DERECELENDİRMESİ VE KABUL EŞİKLERİ
- Seviye 1 (Engelleyici): Kesin Ret; 3 iş günü içinde düzeltilip tekrar sunulmalıdır.
- Seviye 2 (Kritik): Kesin Ret; hata giderilene kadar kabul verilmez.
- Seviye 3 (Büyük): Şartlı Kabul; 10 iş günü içinde punch-list kapatılmalıdır.
- Seviye 4 (Küçük): Tam Kabul; olağan sprint iş listesine aktarılır.`
    }
  },
  {
    id: '09',
    category: 'compliance',
    en: {
      title: 'Source Code Escrow & Disaster Recovery',
      code: 'ESCROW-09',
      file: '../en/09_SOURCE_CODE_ESCROW_DISASTER_RECOVERY.md',
      desc: 'Bi-weekly automated escrow code deposits to NCC Group, bankruptcy/abandonment trigger conditions, multi-region DR (RPO ≤ 15m, RTO ≤ 1h), and failover drills.',
      clause: `## 2. ESCROW RELEASE EVENTS (TRIGGER CONDITIONS)
The Escrow Agent shall release deposited source code to Customer upon:
1. Provider insolvency, bankruptcy, or corporate liquidation;
2. Formal cessation of business or discontinuance of the OmniStore SaaS platform;
3. Failure to provide agreed P1 SLA support for fourteen (14) consecutive calendar days.`
    },
    tr: {
      title: 'Kaynak Kod Yediemin (Escrow) ve İş Sürekliliği',
      code: 'ESCROW-09',
      file: '../tr/09_KAYNAK_KOD_YEDIEMIN_ESCROW_VE_IS_SUREKLILIGI.md',
      desc: 'İki haftada bir bağımsız kuruluşa otomatik kaynak kod yüklemesi, iflas/hizmet terk durumunda kodların açılması, RPO ≤ 15 dk ve RTO ≤ 1 saat felaket kurtarma.',
      clause: `## 2. KODLARIN MÜŞTERİYE AÇILMA ŞARTLARI
Yediemin kuruluşu kaynak kodları şu hallerde 5 iş günü içinde Müşteri'ye teslim eder:
1. Hizmet Sağlayıcı'nın iflas etmesi, konkordato veya tasfiyeye girmesi;
2. Hizmet Sağlayıcı'nın ticari faaliyetini veya OmniStore SaaS platformunu durdurması;
3. 14 gün boyunca P1 kritik teknik desteği yerine getirmeyi haksız olarak reddetmesi.`
    }
  },
  {
    id: '10',
    category: 'technical',
    en: {
      title: 'Change Order Procedure & Rate Card Template',
      code: 'COP-10',
      file: '../en/10_CHANGE_ORDER_PROCEDURE_TEMPLATE.md',
      desc: 'Scope change workflow, impact analysis, fixed man-day rate card ($750 - $1,200/day), timeline evaluation, and formal bilateral amendment form.',
      clause: `## 3. PROFESSIONAL SERVICES MAN-DAY RATE CARD
- Principal Cloud / Solutions Architect: $1,200.00 / Man-Day
- Senior Golang / Node.js Backend Engineer: $950.00 / Man-Day
- Senior DevOps / SRE Specialist: $1,000.00 / Man-Day
- QA / Automation Test Engineer: $750.00 / Man-Day
- UI/UX & Frontend Design Specialist: $800.00 / Man-Day`
    },
    tr: {
      title: 'Değişiklik Talebi (Change Order) Prosedürü ve Formu',
      code: 'COP-10',
      file: '../tr/10_DEGISIKLIK_TALEBI_PROSEDURU_VE_FORMU.md',
      desc: 'Proje kapsam değişikliklerinin yönetimi, teknik etki analizi, sabit adam/gün ücret cetveli ($750-$1.200) ve resmi değişiklik protokolü şablonu.',
      clause: `## 3. PROFESYONEL HİZMETLER ADAM/GÜN ÜCRET CETVELİ
- Kıdemli Bulut / Çözüm Mimarı: $1.200,00 / Adam-Gün
- Kıdemli Arka Ofis Geliştirici: $950,00 / Adam-Gün
- Kıdemli DevOps / SRE Uzmanı: $1.000,00 / Adam-Gün
- Test Otomasyon / QA Mühendisi: $750,00 / Adam-Gün
- UI/UX ve Önyüz Tasarım Uzmanı: $800,00 / Adam-Gün`
    }
  }
];

// i18n Dictionary
const i18n = {
  en: {
    view_github: 'GitHub Repo',
    hero_badge: 'Production-Grade SaaS Legal & Technical Architecture',
    hero_title: 'Enterprise Contracts, SLA & Technical Specifications Suite',
    hero_desc: 'Complete bilingual legal contracts, high-availability SLA/SLO commitments, incident escalation protocols, and microservice technical specifications designed for high-scale e-commerce platforms.',
    stat_uptime: 'Standard Monthly Uptime',
    stat_peak: 'Black Friday Peak SLA',
    stat_p1: 'P1 Critical MTTA / MTTR',
    stat_rps: 'Peak Throughput Capacity',
    tab_calculator: 'SLA Credit Calculator',
    tab_contracts: 'Contract Documents',
    tab_incident: 'Incident Severity & MTTR',
    tab_arch: 'System Architecture',
    calc_title: 'Interactive Monthly SLA & Service Credit Calculator',
    calc_desc: 'Calculate downtime minutes, actual availability %, and financial service credit rebates according to Schedule B.',
    peak_mode_label: 'Campaign Peak (Cyber Week 2x):',
    input_fee_label: 'Monthly SaaS Subscription Fee ($ USD):',
    input_downtime_label: 'Total Unscheduled Downtime in Month (Minutes):',
    calc_hint: 'Total minutes in a 30-day billing cycle = 43,200 minutes.',
    penalty_table_title: 'Schedule B Penalty Thresholds:',
    metric_uptime: 'Actual Monthly Uptime',
    res_allowed_downtime: 'Allowable Downtime:',
    res_actual_downtime: 'Recorded Unscheduled Outage:',
    res_credit_rate: 'Service Credit Penalty Rate:',
    res_refund_amount: 'Invoice Deduction / Credit Refund:',
    cat_all: 'All (11)',
    cat_legal: 'Legal Core',
    cat_technical: 'Technical & SOW',
    cat_sla: 'SLA & Operations',
    cat_compliance: 'Privacy & Escrow',
    copy_clause: '📋 Copy Clause',
    open_full_file: 'View Full Markdown File →',
    inc_title: 'Incident Severity Classification & On-Call Response Matrix',
    inc_desc: 'Schedule F operational incident response timelines, triage criteria, and escalation triggers.',
    rca_box_title: 'Root Cause Analysis (RCA) Protocol',
    rca_box_desc: 'For all P1 incidents and major P2 incidents, Provider must deliver a blameless 5-Whys RCA document within 5 business days, including chronological timeline, root cause, and Corrective and Preventative Actions (CAPA).',
    arch_title: 'OmniStore SaaS Microservices Topology',
    arch_desc: 'High-throughput, event-driven commerce architecture designed for 100,000 requests/second.'
  },
  tr: {
    view_github: 'GitHub Projesi',
    hero_badge: 'Kurumsal Seviye SaaS Hukuki ve Teknik Mimari',
    hero_title: 'Kurumsal Sözleşmeler, SLA ve Teknik Şartname Paketi',
    hero_desc: 'Yüksek hacimli e-ticaret platformları için tasarlanmış eksiksiz iki dilli hukuki sözleşmeler, yüksek erişilebilirlik taahhütleri (SLA/SLO), kriz eskalasyon matrisi ve teknik şartnameler.',
    stat_uptime: 'Standart Aylık Uptime',
    stat_peak: 'Efsane Cuma Zirve SLA',
    stat_p1: 'P1 Kritik MTTA / MTTR',
    stat_rps: 'Zirve İstek Kapasitesi',
    tab_calculator: 'SLA Ceza ve İndirim Hesaplayıcı',
    tab_contracts: 'Sözleşme Belgeleri',
    tab_incident: 'Arıza Seviyeleri ve MTTR',
    tab_arch: 'Sistem Mimarisi',
    calc_title: 'İnteraktif Aylık SLA ve Hizmet Kredisi Hesaplayıcı',
    calc_desc: 'Ek B uyarınca kesinti süresi, gerçekleşen erişilebilirlik yüzdesi ve fatura ceza/mahsup tutarını hesaplayın.',
    peak_mode_label: 'Kampanya Zirvesi (Efsane Cuma 2x):',
    input_fee_label: 'Aylık SaaS Düzenli Abonelik Bedeli ($ USD):',
    input_downtime_label: 'Ay İçindeki Toplam Plansız Kesinti (Dakika):',
    calc_hint: '30 günlük faturalama dönemindeki toplam süre = 43.200 dakikadır.',
    penalty_table_title: 'Ek B Hizmet Kredisi Ceza Eşikleri:',
    metric_uptime: 'Gerçekleşen Aylık Uptime',
    res_allowed_downtime: 'İzin Verilen Kesinti:',
    res_actual_downtime: 'Kaydedilen Plansız Kesinti:',
    res_credit_rate: 'Hizmet Kredisi (Ceza) Oranı:',
    res_refund_amount: 'Faturadan Düşülecek İndirim / Mahsup:',
    cat_all: 'Tümü (11)',
    cat_legal: 'Temel Hukuki',
    cat_technical: 'Teknik ve SOW',
    cat_sla: 'SLA ve Operasyon',
    cat_compliance: 'KVKK ve Escrow',
    copy_clause: '📋 Maddeyi Kopyala',
    open_full_file: 'Tam Belgeyi İncele →',
    inc_title: 'Arıza Derecelendirmesi ve Nöbetçi Mühendis Müdahale Matrisi',
    inc_desc: 'Ek F operasyonel arıza müdahale süreleri, triyaj kriterleri ve eskalasyon tetikleyicileri.',
    rca_box_title: 'Kök Neden Analizi (RCA) Protokolü',
    rca_box_desc: 'Tüm P1 ve majör P2 arızalarında Hizmet Sağlayıcı; 5 iş günü içinde kronolojik akışı, 5-Neden analizini ve Düzeltici/Önleyici Eylemleri (CAPA) içeren suçlayıcı olmayan resmi RCA raporu sunar.',
    arch_title: 'OmniStore SaaS Mikroservis Topolojisi',
    arch_desc: 'Saniyede 100.000 istek için tasarlanmış yüksek hacimli, olay güdümlü (event-driven) e-ticaret mimarisi.'
  }
};

// Language Switcher
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('btnLangEn').classList.toggle('active', lang === 'en');
  document.getElementById('btnLangTr').classList.toggle('active', lang === 'tr');

  // Update static text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  renderContracts();
  calculateSLA();
}

// Tab Switcher
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(`tab-${tabId}`).classList.add('active');
  const btnMap = {
    calculator: 'tabBtnCalc',
    contracts: 'tabBtnDocs',
    incidents: 'tabBtnInc',
    architecture: 'tabBtnArch'
  };
  if (btnMap[tabId]) {
    document.getElementById(btnMap[tabId]).classList.add('active');
  }
}

// SLA Calculator Logic
function syncDowntime(val) {
  document.getElementById('downtimeMinutesInput').value = val;
  calculateSLA();
}
function syncRange(val) {
  document.getElementById('downtimeRange').value = Math.min(val, 600);
  calculateSLA();
}

function calculateSLA() {
  const fee = parseFloat(document.getElementById('monthlyFeeInput').value) || 0;
  const downtime = parseFloat(document.getElementById('downtimeMinutesInput').value) || 0;
  const isPeak = document.getElementById('peakModeCheckbox').checked;

  const totalMinutesInMonth = 43200; // 30 days * 24 * 60
  const actualUptime = Math.max(0, ((totalMinutesInMonth - downtime) / totalMinutesInMonth) * 100);

  const targetUptime = isPeak ? 99.99 : 99.95;
  const allowableDowntimeMinutes = ((100 - targetUptime) / 100) * totalMinutesInMonth;

  let creditPercent = 0;
  let actionText = '';
  let isBreached = false;

  if (actualUptime >= targetUptime) {
    creditPercent = 0;
    isBreached = false;
    actionText = currentLang === 'en' 
      ? 'SLA commitment fully satisfied. Routine operational telemetry monitoring continues.'
      : 'SLA taahhüdü başarıyla sağlandı. Rutin operasyonel izleme devam etmektedir.';
  } else {
    isBreached = true;
    if (actualUptime >= 99.90) {
      creditPercent = isPeak ? 20 : 10;
      actionText = currentLang === 'en'
        ? 'Submit formal Root Cause Analysis (RCA) report within 5 business days.'
        : '5 iş günü içinde resmi Kök Neden Analizi (RCA) raporunun sunulması zorunludur.';
    } else if (actualUptime >= 99.50) {
      creditPercent = isPeak ? 40 : 20;
      actionText = currentLang === 'en'
        ? 'Submit RCA report and convene executive engineering review within 3 business days.'
        : 'RCA raporu sunulmalı ve 3 iş günü içinde üst yönetim teknik kriz toplantısı yapılmalıdır.';
    } else if (actualUptime >= 99.00) {
      creditPercent = isPeak ? 70 : 35;
      actionText = currentLang === 'en'
        ? 'RCA required. Immediate 14-day engineering freeze on non-critical platform features.'
        : 'RCA zorunludur. Platformda 14 gün boyunca yeni özellik geliştirmesi dondurulmalıdır.';
    } else {
      creditPercent = isPeak ? 100 : 50;
      actionText = currentLang === 'en'
        ? 'MATERIAL BREACH: Customer reserves immediate statutory right to terminate contract for cause.'
        : 'ESASLI SÖZLEŞME İHLALİ: Müşteri sözleşmeyi derhal ve tazminatsız haklı nedenle feshedebilir.';
    }
  }

  const refundAmount = (fee * (creditPercent / 100));

  // Update UI
  const badge = document.getElementById('slaStatusBadge');
  const periodBadge = document.getElementById('periodBadge');
  if (isBreached) {
    badge.className = 'status-badge status-breached';
    badge.textContent = currentLang === 'en' ? 'SLA BREACHED' : 'SLA İHLAL EDİLDİ';
  } else {
    badge.className = 'status-badge status-met';
    badge.textContent = currentLang === 'en' ? 'SLA MET (HEALTHY)' : 'SLA BAŞARILI';
  }

  periodBadge.textContent = isPeak
    ? (currentLang === 'en' ? '🔥 Campaign Peak (99.99%)' : '🔥 Kampanya Zirvesi (%99.99)')
    : (currentLang === 'en' ? 'Standard Month (99.95%)' : 'Standart Ay (%99.95)');

  document.getElementById('actualUptimeText').textContent = actualUptime.toFixed(4) + '%';
  document.getElementById('maxAllowableDowntime').textContent = allowableDowntimeMinutes.toFixed(2) + ' mins';
  document.getElementById('recordedDowntimeText').textContent = downtime.toFixed(2) + ' mins';
  document.getElementById('creditPercentText').textContent = creditPercent.toFixed(1) + '%';
  document.getElementById('refundAmountText').textContent = '$' + refundAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD';
  document.getElementById('actionRequiredText').textContent = actionText;

  const diff = downtime - allowableDowntimeMinutes;
  const diffEl = document.getElementById('allowedDowntimeDiff');
  if (diff > 0) {
    diffEl.style.color = 'var(--accent-rose)';
    diffEl.textContent = currentLang === 'en' 
      ? `${diff.toFixed(1)} minutes over allowable threshold`
      : `İzin verilen sürenin ${diff.toFixed(1)} dakika üzerinde kesinti`;
  } else {
    diffEl.style.color = 'var(--accent-emerald)';
    diffEl.textContent = currentLang === 'en'
      ? `${Math.abs(diff).toFixed(1)} minutes remaining in monthly error budget`
      : `Hata bütçesinde ${Math.abs(diff).toFixed(1)} dakika tolerans kaldı`;
  }
}

// Render Contracts Grid
function renderContracts() {
  const container = document.getElementById('contractsGrid');
  const query = (document.getElementById('contractSearchInput').value || '').toLowerCase();
  container.innerHTML = '';

  const filtered = contractsData.filter(item => {
    const data = item[currentLang];
    const matchesCat = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = !query || 
      data.title.toLowerCase().includes(query) || 
      data.desc.toLowerCase().includes(query) ||
      data.code.toLowerCase().includes(query) ||
      data.clause.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  filtered.forEach(item => {
    const data = item[currentLang];
    const card = document.createElement('div');
    card.className = 'contract-card';
    card.innerHTML = `
      <div>
        <span class="card-doc-num">${data.code}</span>
        <h4>${data.title}</h4>
        <p>${data.desc}</p>
      </div>
      <div class="contract-card-footer">
        <button class="clause-preview-btn" onclick="openClauseModal('${item.id}')">
          ${currentLang === 'en' ? '🔍 Preview Clause' : '🔍 Maddeyi İncele'}
        </button>
        <a href="${data.file}" target="_blank" class="raw-file-link">
          ${currentLang === 'en' ? 'Read File (.md)' : 'Dosyayı Oku (.md)'}
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderContracts();
}

function filterContracts() {
  renderContracts();
}

// Modal
let activeClauseContent = '';
function openClauseModal(id) {
  const item = contractsData.find(c => c.id === id);
  if (!item) return;
  const data = item[currentLang];
  document.getElementById('modalDocTitle').textContent = `${data.code} - ${data.title}`;
  document.getElementById('modalDocBody').textContent = data.clause;
  document.getElementById('modalDirectFileLink').href = data.file;
  activeClauseContent = data.clause;
  document.getElementById('clauseModal').classList.add('active');
}

function closeModal(e) {
  document.getElementById('clauseModal').classList.remove('active');
}

function closeModalDirect() {
  document.getElementById('clauseModal').classList.remove('active');
}

function copyModalContent() {
  if (!activeClauseContent) return;
  navigator.clipboard.writeText(activeClauseContent).then(() => {
    const btn = document.querySelector('.copy-btn');
    const orig = btn.textContent;
    btn.textContent = currentLang === 'en' ? '✓ Copied to Clipboard!' : '✓ Panoya Kopyalandı!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  });
}

// Keyboard ESC to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalDirect();
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  renderContracts();
  calculateSLA();
});
