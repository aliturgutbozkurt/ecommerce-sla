# Master Services Agreement (MSA)

**Contract Reference:** MSA-2026-APEX-CS-001  
**Effective Date:** November 1, 2026  

---

## 1. PARTIES

This Master Services Agreement ("Agreement" or "MSA") is entered into by and between:

1.  **ApexRetail Global A.Ş. / ApexRetail Inc.**, a corporation organized under the laws of Turkey and Delaware, having its principal place of business at Maslak Mah. Büyükdere Cad. No: 245/18 Sarıyer, Istanbul, Turkey (Tax ID: 1234567890) (hereinafter referred to as **"Customer"**, **"Client"**, or **"ApexRetail"**); and
2.  **CloudScale Systems Yazılım A.Ş. / CloudScale Systems Inc.**, a technology corporation organized under the laws of Turkey, having its principal place of business at ITU Arı Teknokent 4, No: 2/1 Sarıyer, Istanbul, Turkey (Tax ID: 9876543210) (hereinafter referred to as **"Provider"**, **"Vendor"**, or **"CloudScale"**).

Customer and Provider may individually be referred to as a **"Party"** and collectively as the **"Parties"**.

---

## 2. RECITALS & PURPOSE

WHEREAS, Customer operates a high-volume omnichannel electronic commerce enterprise and requires modern, cloud-native Software-as-a-Service (SaaS) platforms, headless commerce APIs, real-time inventory synchronization, and managed cloud infrastructure services; and

WHEREAS, Provider specializes in building, deploying, maintaining, and scaling high-availability enterprise commerce software, cloud microservices, and managed infrastructure; and

WHEREAS, Customer desires to engage Provider to design, build, license, host, and maintain the **OmniStore SaaS & Unified Commerce Engine**, and Provider agrees to render such services and software pursuant to the terms and conditions set forth herein and in the associated Schedules.

NOW, THEREFORE, in consideration of the mutual covenants contained herein, the Parties agree as follows:

---

## 3. STRUCTURE OF THE AGREEMENT & ORDER OF PRECEDENCE

### 3.1 Contract Documents
This Agreement establishes the overarching legal and commercial framework under which Provider shall deliver software, professional services, subscriptions, and ongoing technical support. The following Schedules are incorporated into and form an integral part of this Agreement:
*   **Schedule A:** Statement of Work (SOW) & Technical Specifications (`02_STATEMENT_OF_WORK_SOW_SPECIFICATION.md`)
*   **Schedule B:** Service Level Agreement & Service Level Objectives (`03_SERVICE_LEVEL_AGREEMENT_SLA_SLO.md`)
*   **Schedule C:** SaaS Subscription & Software License Agreement (`04_SAAS_SUBSCRIPTION_LICENSE_AGREEMENT.md`)
*   **Schedule D:** Data Processing Agreement (DPA / GDPR & KVKK) (`05_DATA_PROCESSING_AGREEMENT_DPA_GDPR.md`)
*   **Schedule E:** Mutual Non-Disclosure Agreement (`06_NON_DISCLOSURE_AGREEMENT_NDA.md`)
*   **Schedule F:** Incident Management & Escalation Matrix (`07_INCIDENT_MANAGEMENT_ESCALATION_MATRIX.md`)
*   **Schedule G:** User Acceptance Testing (UAT) & Sign-Off Protocol (`08_UAT_ACCEPTANCE_TESTING_SIGN_OFF.md`)
*   **Schedule H:** Source Code Escrow & Disaster Recovery Agreement (`09_SOURCE_CODE_ESCROW_DISASTER_RECOVERY.md`)
*   **Schedule I:** Change Order Procedure & Template (`10_CHANGE_ORDER_PROCEDURE_TEMPLATE.md`)

### 3.2 Precedence
In case of any direct conflict or inconsistency between the terms of this MSA and any Schedule, the conflict shall be resolved in according to Section 2 of the Executive Summary:
1. Data Processing Agreement (DPA) (solely with respect to Personal Data processing and security)
2. This Master Services Agreement (MSA)
3. Statement of Work (SOW)
4. Service Level Agreement (SLA)
5. Other Schedules and Annexes

---

## 4. SERVICES, DELIVERABLES & CHANGE CONTROL

### 4.1 Scope of Services
Provider shall perform the development, integration, migration, deployment, hosting, and managed support services described in each executed SOW. Time is of the essence regarding key milestone dates agreed upon in the SOW.

### 4.2 Personnel & Subcontractors
Provider shall deploy qualified, competent, and security-cleared personnel. Provider remains fully responsible for the performance, acts, and omissions of any approved subcontractors. Provider shall not subcontract core software development or direct customer database access without prior written authorization from Customer.

### 4.3 Change Management
Any material alteration, addition, or reduction in scope, architecture, or deliverables must be documented in writing via the Change Order Procedure outlined in **Schedule I**. Neither Party is obligated to proceed with scope changes until a bilateral Change Order has been fully executed.

---

## 5. FEES, INVOICING & PAYMENT TERMS

### 5.1 Pricing Structure
Customer shall pay Provider the fees specified in the applicable SOW and SaaS Subscription Schedule. Fees typically consist of:
1.  **Professional Implementation Fees:** Fixed milestone-based payments linked directly to accepted UAT Deliverables.
2.  **Recurring SaaS Platform & Hosting Fees:** Monthly or annual recurring subscription fees covering multi-tenant cloud usage, throughput quotas, and managed infrastructure.
3.  **Dedicated Support & SLA Fees:** Included or tiered fees for 24/7/365 engineering on-call coverage.

### 5.2 Invoicing & Payment
*   Invoices for milestone deliverables shall be issued within ten (10) business days following mutual signature of the UAT Sign-Off Certificate.
*   Recurring SaaS fees shall be invoiced monthly in advance on the first day of each billing cycle.
*   Payment terms are **Net thirty (30) calendar days** from the receipt of a valid, undisputed electronic tax invoice.
*   In the event of a good faith dispute regarding any portion of an invoice, Customer shall notify Provider within fifteen (15) days, pay the undisputed portion, and both Parties shall negotiate the disputed amount in good faith.

### 5.3 Taxes
All fees are exclusive of applicable Value Added Tax (VAT / KDV) or sales taxes, which shall be itemized separately on each invoice and paid by Customer in accordance with relevant tax legislation.

---

## 6. INTELLECTUAL PROPERTY RIGHTS

### 6.1 Background IP
Each Party retains exclusive ownership of its pre-existing intellectual property, proprietary software, frameworks, trade secrets, patents, and registered trademarks developed prior to or independently of this Agreement ("Background IP"). Provider grants Customer a non-exclusive, worldwide, royalty-free license to use Provider Background IP solely to the extent incorporated into the Deliverables for Customer's operational use.

### 6.2 Customer IP & Customer Data
Customer retains sole and exclusive ownership of:
1.  All Customer Data, customer personal data, transaction logs, product catalogs, pricing rules, and business logic.
2.  Customer trademarks, branding, UI designs, and proprietary integrations.
Provider is granted no right, title, or interest in Customer Data except the limited license necessary to provide the Services under this Agreement.

### 6.3 Foreground IP & Custom Work Product
Unless explicitly stated otherwise in an SOW:
*   All bespoke code, custom APIs, custom integrations, database schemas, and tailored UI components created specifically for Customer under an SOW ("Custom Deliverables") shall be deemed "work made for hire", and all copyright and IP rights therein shall transfer to Customer upon full payment of the relevant milestone fee.
*   Generic SaaS engine core components, multi-tenant microservice foundations, and general libraries remain Provider IP, subject to the perpetual, irrevocable, non-exclusive license granted to Customer.

### 6.4 Source Code Escrow
To safeguard Customer's business continuity, Provider shall deposit the source code, build scripts, deployment configurations, and documentation of the core SaaS platform into an independent third-party escrow account pursuant to **Schedule H**.

---

## 7. REPRESENTATIONS AND WARRANTIES

### 7.1 Mutual Warranties
Each Party represents and warrants that:
1.  It is validly organized, in good standing, and possessed of full corporate power to execute and deliver this Agreement.
2.  The execution and performance of this Agreement do not violate any applicable law, judicial decree, or third-party agreement.

### 7.2 Provider Warranties
Provider warrants that:
1.  **Workmanship:** Services shall be performed in a professional, workmanlike manner adhering to prevailing enterprise software industry standards.
2.  **Specification Conformity:** The Deliverables and SaaS platform shall conform in all material respects to the technical specifications set forth in the SOW and SLA.
3.  **Non-Infringement:** Deliverables, SaaS software, and documentation do not and will not infringe any third-party patent, copyright, trademark, or trade secret.
4.  **Malicious Code & Security:** Deliverables do not contain any backdoor, virus, Trojan horse, spyware, ransomware, or undocumented vulnerability that disables or compromises Customer systems.
5.  **Warranty Period:** Provider provides a twelve (12) month defect warranty commencing upon final production launch, during which all bugs or deviations from the SOW shall be rectified at zero additional cost to Customer.

---

## 8. INDEMNIFICATION

### 8.1 Provider IP Indemnification
Provider shall defend, indemnify, and hold harmless Customer, its affiliates, directors, officers, employees, and agents from and against any third-party claims, suits, liabilities, damages, judgments, and legal expenses (including reasonable attorneys' fees) arising out of or resulting from an allegation that the SaaS platform or Deliverables infringe any patent, copyright, trademark, or trade secret of a third party.

### 8.2 Customer Indemnification
Customer shall defend, indemnify, and hold harmless Provider from third-party claims arising from Customer's unauthorized alteration of the Deliverables, use in direct violation of applicable law, or third-party data provided by Customer without proper consent.

### 8.3 Indemnification Procedure
The indemnified Party must: (a) provide prompt written notice of the claim; (b) grant the indemnifying Party sole control of the defense and settlement (provided that no settlement admits liability on behalf of the indemnified Party without consent); and (c) provide reasonable assistance at the indemnifying Party's expense.

---

## 9. LIMITATION OF LIABILITY

### 9.1 Consequential Damages Waiver
EXCEPT FOR CLAIMS ARISING UNDER SECTION 6 (INTELLECTUAL PROPERTY), SECTION 8 (INDEMNIFICATION), SECTION 10 (CONFIDENTIALITY), OR SCHEDULE D (DATA PROCESSING AGREEMENT / KVKK / GDPR), NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR ANY INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF BUSINESS REPUTATION, OR LOSS OF DATA, EVEN IF ADVISED OF THE POSSIBILITY THEREOF.

### 9.2 Aggregate Liability Cap
EXCEPT FOR THE UNLIMITED LIABILITIES SPECIFIED IN SECTION 9.3 BELOW, EACH PARTY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, SHALL BE CAPPED AT THE TOTAL FEES PAID OR PAYABLE BY CUSTOMER TO PROVIDER UNDER THIS AGREEMENT DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE INCIDENT GIVING RISE TO LIABILITY.

### 9.3 Exclusions from Liability Cap
The limitations and exclusions of liability in Sections 9.1 and 9.2 shall **NOT** apply to:
1.  Breach of confidentiality obligations under **Schedule E** (NDA);
2.  Breach of data privacy and security obligations under **Schedule D** (DPA) resulting in administrative fines or civil damages under GDPR or Law No. 6698 (KVKK);
3.  Provider's indemnification obligations under Section 8.1 (IP Infringement);
4.  Gross negligence (*ağır kusur*), intentional misconduct, or willful fraud.

---

## 10. CONFIDENTIALITY

All non-public, confidential, or proprietary information disclosed by one Party to the other Party shall be safeguarded in accordance with the terms and conditions of the Mutual Non-Disclosure Agreement (**Schedule E**), the provisions of which are incorporated herein by reference.

---

## 11. TERM AND TERMINATION

### 11.1 Term
This Agreement commences on the Effective Date and shall continue in full force and effect for an initial period of **three (3) years** ("Initial Term"), unless terminated earlier in accordance with this Section 11. Thereafter, this Agreement shall automatically renew for successive twelve (12) month periods, unless either Party provides written notice of non-renewal at least sixty (60) days prior to the expiration of the then-current term.

### 11.2 Termination for Cause
Either Party may terminate this Agreement or any individual SOW immediately upon written notice if:
1.  The other Party commits a material breach of this Agreement and fails to cure such breach within thirty (30) calendar days following receipt of detailed written notice;
2.  The other Party becomes insolvent, enters receivership, makes an assignment for the benefit of creditors, or files for bankruptcy;
3.  Provider experiences recurring P1 Critical SLA breaches exceeding the SLA termination threshold defined in **Schedule B**.

### 11.3 Termination for Convenience
Customer may terminate an ongoing SOW or this Agreement for its sole convenience by providing ninety (90) calendar days' prior written notice to Provider, subject to paying Provider for all completed and accepted deliverables up to the effective termination date.

### 11.4 Effect of Termination & Transition Assistance
Upon expiration or termination:
1.  Provider shall deliver to Customer all completed or partially completed Custom Deliverables, source code, data dumps, and documentation.
2.  Provider shall provide up to ninety (90) days of transition services at Provider's standard agreed time-and-materials rate to ensure smooth migration to Customer's new vendor or internal team.
3.  Provider shall securely delete or return all Customer Data in compliance with **Schedule D**.

---

## 12. GOVERNING LAW & DISPUTE RESOLUTION

### 12.1 Governing Law
This Agreement and any dispute or claim arising out of or in connection with it shall be governed by and construed in accordance with the laws of the **Republic of Turkey** (without giving effect to any principles of conflict of laws) and the United Nations Convention on Contracts for the International Sale of Goods (CISG) is expressly excluded.

### 12.2 Dispute Escalation & Jurisdiction
1.  The Parties shall attempt in good faith to resolve any dispute through senior executive escalation (CEO / CTO level) within fifteen (15) business days.
2.  If the dispute remains unresolved, the courts and bailiff offices of **Istanbul Central (Çağlayan), Turkey** shall have exclusive jurisdiction over any proceeding, suit, or legal action arising out of this Agreement.
3.  *(Optional Arbitration Clause)* Alternatively, by mutual written consent, disputes may be submitted to binding commercial arbitration under the Istanbul Arbitration Centre (ISTAC) Rules.

---

## 13. MISCELLANEOUS

*   **Entire Agreement:** This Agreement, together with all Schedules, constitutes the complete and exclusive agreement between the Parties with respect to its subject matter and supersedes all prior proposals, understandings, or agreements.
*   **Amendments:** No modification or amendment of this Agreement shall be binding unless executed in writing by authorized representatives of both Parties.
*   **Severability:** If any provision is held invalid or unenforceable, the remaining provisions shall remain in full force.
*   **Force Majeure:** Neither Party shall be liable for failure or delay in performance caused by circumstances beyond its reasonable control, including earthquakes, armed conflict, state of emergency, catastrophic utility grid failure, or pandemic quarantine mandates, provided prompt written notice is served.

---

## 14. SIGNATURES & EXECUTION

IN WITNESS WHEREOF, the Parties hereto have caused this Master Services Agreement to be executed by their duly authorized representatives as of the Effective Date.

**For and on behalf of:**  
**ApexRetail Global A.Ş. / Inc. (Customer)**  

Name: _________________________________  
Title: Chief Executive Officer / VP Technology  
Date: __________________________________  
Signature & Stamp: ______________________  

---

**For and on behalf of:**  
**CloudScale Systems Yazılım A.Ş. (Provider)**  

Name: _________________________________  
Title: Chief Executive Officer / Managing Director  
Date: __________________________________  
Signature & Stamp: ______________________  
