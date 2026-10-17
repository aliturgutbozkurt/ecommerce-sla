# Schedule H: Source Code Escrow & Disaster Recovery Agreement

**Document Reference:** ESCROW-DR-2026-OMNISTORE-001  
**Associated MSA:** MSA-2026-APEX-CS-001  
**Escrow Agent:** NCC Group Escrow / Iron Mountain Intellectual Property Management  
**Effective Date:** November 1, 2026  

---

## 1. SOURCE CODE ESCROW PURPOSE & DEPOSIT OBLIGATIONS

To protect **ApexRetail Global A.Ş. / Inc.** ("Customer") against catastrophic business interruption in the event of insolvency or abandonment by **CloudScale Systems Yazılım A.Ş.** ("Provider"), Provider shall maintain a tri-partite Software Escrow Agreement with a reputable international Escrow Agent.

### 1.1 Deposit Materials
Provider shall deposit:
1.  Complete, uncompiled source code for all proprietary microservices comprising the **OmniStore SaaS Engine**;
2.  Infrastructure-as-Code (Terraform, Helm charts, Dockerfiles, Kubernetes manifests);
3.  Database schemas, DDL migration scripts, and seed data recipes;
4.  Comprehensive compilation manuals, environment dependency specifications, and deployment runbooks.

### 1.2 Deposit Frequency & Verification
*   **Bi-Weekly Automated Sync:** Deposits shall be automatically pushed via secure automated git pipeline every fourteen (14) calendar days.
*   **Annual Usability Audit:** The Escrow Agent shall conduct an annual "Level 3 Build Verification" certifying that the deposited materials can be successfully compiled and booted into an operational staging environment without Provider intervention.

---

## 2. ESCROW RELEASE EVENTS (TRIGGER CONDITIONS)

The Escrow Agent shall release the deposited materials to Customer within five (5) business days upon the occurrence of any of the following "Release Events":

1.  **Insolvency & Bankruptcy:** Provider files for bankruptcy, enters formal insolvency, enters corporate liquidation, or makes an assignment for the benefit of creditors.
2.  **Cessation of Business:** Provider ceases normal business operations or formally discontinues commercial support for the OmniStore SaaS platform.
3.  **Critical Abandonment of Support:** Provider fails to provide agreed P1 SLA support or resolve critical platform failures for fourteen (14) consecutive calendar days following formal written default notice from Customer.

### 2.1 Scope of Customer License Upon Release
Upon release, Customer receives a perpetual, irrevocable, worldwide, royalty-free, non-exclusive license to compile, modify, enhance, host, and execute the source code strictly for Customer's own e-commerce business operations.

---

## 3. DISASTER RECOVERY (DR) & BUSINESS CONTINUITY (BCP)

Provider shall maintain a multi-region active-passive Disaster Recovery infrastructure designed to withstand catastrophic cloud-datacenter failures.

```
       [ Active Production: Primary Region (eu-central-1 / Frankfurt) ]
                               │
            Synchronous Data   │ Real-time WAL Streaming
            Replication (Kafka)│ & Continuous Database Journaling
                               ▼
       [ Standby DR Site: Secondary Region (eu-west-1 / Ireland) ]
                               │
            Automatic DNS      │ Health Check Failure < 60s
            Route53 Failover   ▼
       [ Automated Warm Spin-up via Karpenter & Terraform ]
```

### 3.1 DR Metrics Commitment

| Metric | Target Specification | Enforcement Mechanism |
| :--- | :--- | :--- |
| **Recovery Point Objective (RPO)** | **≤ 15 Minutes** | Continuous cross-region PostgreSQL streaming replication |
| **Recovery Time Objective (RTO)** | **≤ 1 Hour** | Automated Terraform spin-up & container orchestrator failover |
| **Failover Health Detection** | **≤ 60 Seconds** | Route 53 health probes & synthetic HTTP transaction monitors |

### 3.2 Annual Disaster Recovery Drills
Provider shall conduct a live, unannounced failover simulation at least **twice per calendar year** outside peak shopping seasons. A comprehensive post-drill performance audit shall be delivered to Customer's VP of Infrastructure within ten (10) business days following each exercise.

---

## 4. SIGNATURES

**ApexRetail Global A.Ş. / Inc. (Customer)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  

**CloudScale Systems Yazılım A.Ş. (Provider)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  
