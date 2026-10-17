# Schedule B: Service Level Agreement (SLA) & Service Level Objectives (SLO)

**Document Reference:** SLA-2026-OMNISTORE-001  
**Associated MSA:** MSA-2026-APEX-CS-001  
**Effective Date:** November 1, 2026  

---

## 1. PURPOSE & APPLICABILITY

This Service Level Agreement ("SLA") defines the levels of service availability, performance metrics (SLIs/SLOs), incident response and resolution times, maintenance protocols, and financial remedy mechanisms (Service Credits) applicable to the **OmniStore SaaS & Unified Commerce Engine** hosted and managed by **CloudScale Systems Yazılım A.Ş.** ("Provider") for **ApexRetail Global A.Ş. / Inc.** ("Customer").

---

## 2. KEY DEFINITIONS

*   **Availability / Uptime:** The percentage of total minutes in a given calendar month during which the Production Platform APIs and Commerce Engine are accessible and operational to process consumer traffic without material degradation.
*   **Downtime / Outage:** Any period during which Customer consumers or systems cannot execute critical commerce transactions (e.g., browse catalog, add to cart, authorize payment) due to Provider infrastructure, code defects, or managed services failure.
*   **Service Level Indicator (SLI):** A quantifiable, monitored operational metric measuring the real-time quality of service (e.g., latency, error rate, availability).
*   **Service Level Objective (SLO):** The target reliability threshold or internal objective defined for an SLI over a rolling 30-day window.
*   **Error Budget:** The allowable fraction of time or requests (100% - SLO) that a service may fail or degrade before triggering feature freezes and corrective engineering.
*   **Service Credit:** A percentage discount credited against Customer's subsequent monthly recurring SaaS invoice as liquidated damages for failing to meet the committed SLA.
*   **Mean Time to Acknowledge (MTTA):** The elapsed time between the detection of an incident (via monitoring alert or Customer ticket) and Provider's formal acknowledgment by a qualified on-call engineer.
*   **Mean Time to Resolve (MTTR):** The elapsed time between incident acknowledgment and the restoration of production services to normal operational state.

---

## 3. SERVICE LEVEL OBJECTIVES (SLO) & INDICATORS (SLI)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SLI / SLO RELIABILITY STACK                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. Availability SLI: (Successful HTTP Requests / Total Valid Requests) * 100│
│    -> SLO Target: ≥ 99.95% (Monthly Regular) | ≥ 99.99% (Black Friday Peak) │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. Latency SLI: Milliseconds elapsed from Edge Ingress to Response Header   │
│    -> SLO Target: P95 < 60ms, P99 < 120ms (Reads) | P95 < 150ms (Checkout) │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. Error Rate SLI: (HTTP 5xx Server Error Responses / Total Requests) * 100 │
│    -> SLO Target: ≤ 0.05% across any rolling 1-hour window                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Availability SLO Targets & Allowable Downtime

| Environment / Tier | Monthly Availability Commitment | Maximum Allowable Downtime / Month | Maximum Allowable Downtime / Year |
| :--- | :--- | :--- | :--- |
| **Production (Standard Months)** | **99.95%** | **21.9 minutes** | **4.38 hours** |
| **Peak Campaign (Black Friday / Cyber Week)** | **99.99%** | **4.38 minutes** | **52.6 minutes** |
| **Staging / UAT Environment** | 99.00% | 7.3 hours | 87.6 hours |

### 3.2 System Performance & Latency SLOs

All latency thresholds are continuously sampled at the Envoy API Gateway boundary under sustained loads up to 100,000 Requests Per Second (RPS):

*   **Catalog & Product Details API (Read):** P95 < 60ms, P99 < 120ms.
*   **Search & Facet Query API:** P95 < 80ms, P99 < 150ms.
*   **Cart Mutation & Stock Reservation (Write):** P95 < 120ms, P99 < 220ms.
*   **Checkout & Payment Authorization Handshake:** P95 < 350ms, P99 < 600ms (excluding external bank processing delays).

---

## 4. INCIDENT SEVERITY CLASSIFICATION & RESPONSE TIMES

Provider shall maintain a **24/7/365 dedicated engineering on-call rotation** reachable via integrated PagerDuty, automated Datadog alerts, dedicated Slack Connect channel, and an emergency phone hotline.

| Severity Level | Definition / Criteria | MTTA (First Response) | MTTR (Target Resolution) | Update Frequency |
| :--- | :--- | :--- | :--- | :--- |
| **P1 - Critical** | **Total Outage or Critical Business Impairment:** Core checkout is down; catalog is inaccessible; payment processing fails; database corruption; catastrophic security breach. | **≤ 15 minutes** (24/7/365) | **≤ 60 minutes** | Every 15 minutes |
| **P2 - Major** | **Severe Degradation with Workaround:** Search engine down (fallback to static catalog active); single payment gateway down with multi-acquirer fallback working; order throughput throttled by > 30%. | **≤ 30 minutes** (24/7/365) | **≤ 4 hours** | Every 60 minutes |
| **P3 - Minor** | **Partial Impairment / Minor Defect:** Admin CMS reports slow; non-critical promotion banner calculation glitch; non-blocking UI defect; batch ERP synchronization delay. | **≤ 2 hours** (Business Hours) | **≤ 24 hours** | Daily |
| **P4 - Low / Inquiry** | **Informational & Configuration:** How-to inquiries; documentation clarification; minor administrative requests; cosmetic styling suggestions. | **≤ 8 hours** (Business Hours) | **≤ 5 business days** | Upon milestone change |

---

## 5. SERVICE CREDIT PENALTY CALCULATION

If the Production Platform monthly availability falls below the committed SLA, Provider shall issue a credit note ("Service Credit") calculated as a percentage of Customer's monthly recurring SaaS platform subscription fee:

### 5.1 Standard Monthly Service Credit Matrix

| Monthly Actual Availability | Service Credit Percentage (% of Monthly SaaS Fee) | Corrective Action Required |
| :--- | :--- | :--- |
| **≥ 99.95%** | **0%** (SLA Met) | Standard operational review |
| **99.90% to < 99.95%** | **10%** | Comprehensive Root Cause Analysis (RCA) within 5 business days |
| **99.50% to < 99.90%** | **20%** | RCA + Architecture Review meeting within 3 business days |
| **99.00% to < 99.50%** | **35%** | RCA + Engineering Freeze on non-critical features for 14 days |
| **< 99.00%** | **50%** | **Breach of Contract:** Customer reserves immediate right to terminate for cause |

### 5.2 Black Friday & Cyber Week Penalty Multiplier
During the designated high-traffic peak campaign window (defined as the fourteen (14) consecutive calendar days surrounding Black Friday, Cyber Monday, and Single's Day), the availability commitment is elevated to **99.99%**, and all applicable Service Credit percentages in Section 5.1 shall be **doubled (2x)** up to a maximum cap of **100% of that calendar month's total recurring fee**.

### 5.3 Service Credit Claim & Application Protocol
1.  Service Credits must be claimed by Customer within thirty (30) calendar days following the receipt of the monthly SLA performance report.
2.  Service Credits shall be applied as a direct deduction on the next monthly recurring SaaS invoice issued to Customer.
3.  Service Credits represent Customer's primary financial remedy for minor availability shortfalls, without prejudice to Customer's right to terminate for material breach under Section 11.2 of the MSA if monthly availability drops below 99.00% or if P1 incidents recur three (3) or more times in any ninety (90) day period.

---

## 6. MAINTENANCE PROTOCOLS & ZERO-DOWNTIME RELEASES

### 6.1 Scheduled Maintenance
*   **Allowed Window:** Scheduled maintenance requiring non-disruptive infrastructure tuning shall be conducted exclusively between **03:00 AM and 05:00 AM (UTC+3)** on Tuesdays or Thursdays.
*   **Advance Notice:** Provider must deliver at least **five (5) business days' prior written notice** via email and the centralized status portal.
*   **Zero-Downtime Rule:** Routine application code releases, microservice updates, and schema migrations must utilize Blue/Green or Canary deployment strategies with zero user-facing downtime.

### 6.2 Emergency Maintenance
If an imminent critical zero-day vulnerability (e.g., Log4j-style exploit) or hardware failure threatens platform security, Provider may initiate emergency patching upon providing at least two (2) hours' prior electronic notice to Customer's designated Incident Commander.

### 6.3 Peak Period Code Freeze
Provider shall institute a strict **Code and Infrastructure Freeze** starting seven (7) days prior to major shopping campaigns (Black Friday, Cyber Week) through three (3) days post-campaign. During this period, zero non-critical configuration changes or software releases shall be introduced.

---

## 7. EXCLUSIONS & FORCE MAJEURE

Downtime shall not be counted against the Availability SLA calculation to the extent caused by:
1.  **Scheduled Maintenance** executed in full conformity with Section 6.1;
2.  **Customer Fault:** Malfunctions originating from Customer's custom frontend code, unauthorized configuration changes made by Customer personnel, or Customer's failure to configure valid DNS records;
3.  **Global Third-Party Carrier / Network Outages:** Global tier-1 internet backbone fiber cuts, or systemic card network failures (e.g., nationwide Interbank Card Center / BKM or Visa/Mastercard global settlement outages);
4.  **Force Majeure Events:** Acts of God, civil insurrection, military warfare, catastrophic earthquakes, or nuclear emergencies beyond the reasonable control of Provider;
5.  **DDoS Volume Exceeding Architecture Bounds:** Unprecedented volumetric DDoS attacks exceeding 500 Gbps, during the initial mitigation window (not to exceed 30 minutes).

---

## 8. REPORTING, OBSERVABILITY & AUDITING

1.  **Real-Time Status Dashboard:** Provider shall grant Customer 24/7 access to a dedicated, branded status page (e.g., `status.apexretail.cloudscale.io`) displaying live component health, latency metrics, and active incident notifications.
2.  **Monthly SLA Report:** Within the first five (5) business days of each calendar month, Provider shall deliver a comprehensive PDF and machine-readable JSON performance report detailing total uptime percentage, incident logs, MTTA/MTTR metrics, and calculated Service Credits.
3.  **Audit Rights:** Customer shall have the right, up to once per calendar year, to inspect Provider's automated monitoring logs and Datadog telemetry to verify SLA calculation accuracy.

---

## 9. SIGNATURES

**ApexRetail Global A.Ş. / Inc. (Customer)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  

**CloudScale Systems Yazılım A.Ş. (Provider)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  
