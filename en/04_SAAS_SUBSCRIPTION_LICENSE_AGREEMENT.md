# Schedule C: SaaS Subscription & Software License Agreement

**Document Reference:** SLAg-2026-OMNISTORE-001  
**Associated MSA:** MSA-2026-APEX-CS-001  
**Effective Date:** November 1, 2026  

---

## 1. SUBSCRIPTION GRANT & LICENSE SCOPE

### 1.1 SaaS Subscription Grant
Subject to the terms and timely payment of subscription fees under MSA-2026-APEX-CS-001, **CloudScale Systems Yazılım A.Ş.** ("Provider") grants to **ApexRetail Global A.Ş. / Inc.** ("Customer") a non-exclusive, worldwide, revocable (solely upon expiration or termination for cause), non-transferable (except as permitted under MSA assignment clauses) right to access, execute, and utilize the hosted **OmniStore SaaS & Unified Commerce Engine** during the Term.

### 1.2 Multi-Tenant Dedicated Resource Partitioning
While the platform operates as a modern cloud-native Software-as-a-Service, Provider guarantees logical data isolation, dedicated PostgreSQL schemas, dedicated Redis database indices, and segregated Kubernetes tenant namespaces for Customer's production traffic to prevent noisy neighbor degradation or cross-tenant data contamination.

---

## 2. CAPACITY QUOTAS, USAGE TIERS & API ALLOCATIONS

The subscription fee covers the following baseline operational allocations:

| Metric / Parameter | Baseline Included Allocation | Overage / Burst Policy |
| :--- | :--- | :--- |
| **Enterprise Staff Seats** | Up to **250 Named Administrative Seats** | Additional seats billed at $45/seat/month |
| **End-Consumer Shoppers** | **Unlimited Monthly Active Users (MAU)** | Included with zero consumer surcharge |
| **API Throughput Baseline** | **15,000 Requests / Second (Continuous)** | Automated dynamic bursting up to 100,000 RPS |
| **Peak Campaign Burst Allowance** | **100,000 RPS for up to 96 peak hours/year** | Included at no extra charge during Cyber Week |
| **Database & Media Storage** | **10 Terabytes (NVMe SSD & S3 Object Store)** | $0.08 per additional GB/month |
| **Outbound Data Egress** | **25 Terabytes / Month included** | $0.05 per additional GB egress |

---

## 3. ACCEPTABLE USE & FAIR USAGE POLICY (FUP)

Customer shall not, directly or indirectly:
1.  Reverse engineer, decompile, disassemble, or derive the source code of the proprietary background microservice binaries, except to the extent permitted by law;
2.  Resell, sublicense, or white-label the SaaS platform to unrelated third-party merchants without Provider's prior written consent;
3.  Subject the platform to unauthorized automated security fuzzing or denial-of-service stress tests without giving forty-eight (48) hours' prior written coordination to Provider's SecOps team;
4.  Use the platform to store, process, or transmit illicit material, malware, or content in violation of applicable laws.

---

## 4. DATA BACKUP, INTEGRITY & RETENTION POLICY

Provider shall enforce stringent data protection mechanisms across all Customer production environments:

*   **Continuous Transaction Logging:** Write-Ahead Logging (WAL) replicated synchronously across three (3) distinct Cloud Availability Zones (AZs).
*   **Point-in-Time Recovery (PITR):** Continuous transactional journaling allowing rollbacks to any specific second within the preceding **thirty (30) calendar days**.
*   **Daily Cold Snapshots:** Full automated database snapshots taken at 02:00 AM UTC+3 daily, encrypted with AES-256, and replicated to a geographically isolated secondary cloud region.
*   **Bi-Annual Recovery Audits:** Provider shall conduct bi-annual simulated recovery drills verifying that the Recovery Time Objective (**RTO ≤ 1 hour**) and Recovery Point Objective (**RPO ≤ 15 minutes**) are rigorously achieved.

---

## 5. PLATFORM UPGRADES, API LIFECYCLE & BACKWARD COMPATIBILITY

### 5.1 Continuous Improvements
Customer shall receive all standard software updates, security hotfixes, performance patches, and minor feature releases at no additional licensing charge.

### 5.2 API Deprecation & Backward Compatibility Guarantee
*   **API Immobility:** Any production REST or GraphQL endpoint marked as Active shall remain fully functional and backward-compatible for a minimum of **twelve (12) calendar months** following any formal notice of deprecation.
*   **Breaking Changes:** Provider shall not introduce breaking schema changes to Customer's active checkout or catalog APIs without Customer's prior explicit technical sign-off.

---

## 6. SUBSCRIPTION TERMINATION, EXIT ASSISTANCE & DATA PORTABILITY

### 6.1 Unconditional Data Extraction
Upon expiration or termination of the subscription for any reason:
1.  **Format of Handover:** Within fourteen (14) calendar days, Provider shall furnish Customer with a complete, encrypted export of all Customer Data, database dumps (PostgreSQL raw SQL and JSON dumps), catalog metadata, and media assets via a secure, high-speed S3 pre-signed bucket.
2.  **No Data Ransom:** Provider shall not withhold, ransom, or delay Customer Data on account of any disputed commercial balance.
3.  **Secure Purge:** Following Customer's formal written confirmation of data receipt and integrity verification, Provider shall execute a certified cryptographic erase (DoD 5220.22-M or NIST SP 800-88 compliant) of all Customer data remnants from Provider's active and backup storage within sixty (60) days.

---

## 7. SIGNATURES

**ApexRetail Global A.Ş. / Inc. (Customer)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  

**CloudScale Systems Yazılım A.Ş. (Provider)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  
