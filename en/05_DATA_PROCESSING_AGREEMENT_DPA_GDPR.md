# Schedule D: Data Processing Agreement (DPA)

**Document Reference:** DPA-2026-OMNISTORE-001  
**Associated MSA:** MSA-2026-APEX-CS-001  
**Compliance Framework:** Regulation (EU) 2016/679 (GDPR Art. 28) & Turkish Law No. 6698 (KVKK Art. 12)  
**Effective Date:** November 1, 2026  

---

## 1. NATURE & SCOPE OF DATA PROCESSING

### 1.1 Purpose
This Data Processing Agreement ("DPA") governs the processing of Personal Data by **CloudScale Systems Yazılım A.Ş.** ("Data Processor" or "Provider") on behalf of **ApexRetail Global A.Ş. / Inc.** ("Data Controller" or "Customer") in connection with the operation of the **OmniStore SaaS & Unified Commerce Engine**.

### 1.2 Hierarchy
In accordance with Section 3.2 of the MSA, in the event of any conflict between this DPA and any other agreement between the Parties, this DPA shall prevail with respect to data privacy, data protection, and the processing of Personal Data.

---

## 2. DETAILS OF PROCESSING

*   **Subject Matter:** Provision of headless commerce backend services, customer order management, catalog display, and payment orchestration.
*   **Duration:** The duration of the MSA plus the period until all Personal Data is returned or securely destroyed.
*   **Categories of Data Subjects:** Consumers/shoppers visiting Customer's storefronts, registered account holders, customer service agents, and Customer administrative personnel.
*   **Categories of Personal Data:**
    *   *Identity & Contact:* First/last name, email address, telephone number, billing and physical shipping addresses.
    *   *Commerce Transactions:* Order IDs, purchased SKUs, basket history, return requests, loyalty reward balances.
    *   *Technical & Telemetry Data:* IP addresses, browser user-agent strings, geolocation approximations, session tokens.
*   **Special / Sensitive Data:** Zero Special Categories of Data (racial/ethnic origin, biometric data, health data) are processed. Raw credit card data is expressly prohibited; all card processing relies strictly on PCI-DSS SAQ-A compliant tokenization.

---

## 3. OBLIGATIONS OF THE DATA PROCESSOR

Provider warrants, agrees, and undertakes to:
1.  **Instruction Compliance:** Process Personal Data solely on documented instructions from Customer, including regarding international data transfers, unless required to do so by applicable mandatory law.
2.  **Confidentiality:** Ensure that all personnel authorized to access Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.
3.  **Technical & Organizational Measures (TOMs):** Implement and maintain rigorous technical and organizational security measures meeting or exceeding ISO/IEC 27001 and SOC 2 Type II controls, including:
    *   End-to-end encryption in transit utilizing modern TLS 1.3 cryptographic suites;
    *   Envelope encryption at rest using AES-256 with Customer-managed KMS keys;
    *   Strict Least-Privilege Role-Based Access Control (RBAC) and mandatory hardware-backed Multi-Factor Authentication (MFA);
    *   Continuous vulnerability management, automated container image scanning, and real-time SIEM log monitoring.
4.  **Assistance with Data Subject Rights (DSAR):** Provide administrative tools, APIs, and direct assistance enabling Customer to fulfill consumer requests regarding access, correction, erasure ("Right to be Forgotten"), restriction, and data portability within five (5) business days.

---

## 4. SUB-PROCESSORS

### 4.1 Authorized Sub-Processors
Customer hereby grants specific authorization for Provider to engage the following infrastructure and platform sub-processors:

| Sub-Processor Entity | Service Rendered | Hosting Location / Jurisdiction |
| :--- | :--- | :--- |
| **Amazon Web Services (AWS) EMEA SARL** | Cloud Compute, Managed EKS, S3 Storage | Frankfurt (eu-central-1), Ireland |
| **Cloudflare Inc.** | Edge CDN, DDoS Shield, Web Application Firewall | Global Edge PoPs (Istanbul, Frankfurt) |
| **Datadog Inc.** | APM, Infrastructure Metrics, Distributed Tracing | EU Data Center (Frankfurt) |
| **Twilio Ireland Ltd. / SendGrid** | Transactional SMS & Order Confirmation Emails | EU Data Center |

### 4.2 Notification of New Sub-Processors
Provider shall provide Customer with at least **thirty (30) calendar days' prior written notice** before onboarding any new sub-processor. Customer may object in writing on reasonable data protection grounds within fifteen (15) days. If the Parties cannot resolve the objection, Customer may terminate the affected service without penalty.

---

## 5. PERSONAL DATA BREACH NOTIFICATION

### 5.1 48-Hour Notification Window
In the event of a confirmed or reasonably suspected Personal Data breach (including unauthorized access, exposure, alteration, or exfiltration), Provider shall notify Customer in writing without undue delay and in any event within **forty-eight (48) hours** of becoming aware of the incident.

### 5.2 Content of Incident Report
The notification shall contain, at a minimum:
1.  A description of the nature of the breach, including categories and approximate number of Data Subjects and records affected;
2.  The identity and contact details of Provider's Data Protection Officer (DPO);
3.  The likely consequences and risk assessment regarding the affected individuals;
4.  A detailed overview of immediate remediation measures implemented or proposed to mitigate the incident and prevent recurrence.

---

## 6. CROSS-BORDER DATA TRANSFERS

To the extent that the performance of Services involves transferring Personal Data originating from the European Economic Area (EEA) or the Republic of Turkey to countries not recognized as providing an adequate level of data protection:
1.  **EEA Data Transfers:** The Parties hereby incorporate and execute the European Commission Standard Contractual Clauses (Module 2: Controller-to-Processor).
2.  **Turkish KVKK Transfers:** The Parties shall execute the Standard Contract (*Standart Sözleşme*) approved by the Turkish Personal Data Protection Board (*Kişisel Verileri Koruma Kurulu*) pursuant to Article 9 of Law No. 6698, and notify the Board within the statutory timeframe.

---

## 7. AUDIT RIGHTS & CERTIFICATIONS

Provider shall permit Customer or an independent third-party auditor appointed by Customer to conduct annual audits and inspections of Provider's cloud environments, SOC 2 reports, and compliance documentation upon thirty (30) business days' prior written notice.

---

## 8. SIGNATURES

**ApexRetail Global A.Ş. / Inc. (Data Controller)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  

**CloudScale Systems Yazılım A.Ş. (Data Processor)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  
