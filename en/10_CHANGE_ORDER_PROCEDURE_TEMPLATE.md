# Schedule I: Change Order Procedure & Template

**Document Reference:** COP-2026-OMNISTORE-001  
**Associated MSA:** MSA-2026-APEX-CS-001 & SOW-2026-OMNISTORE-001  
**Effective Date:** November 1, 2026  

---

## 1. CHANGE MANAGEMENT PRINCIPLES

During the engineering lifecycle of the **OmniStore SaaS & Unified Commerce Engine**, any material modification, feature expansion, API extension, or timeline adjustment exceeding the baseline Statement of Work (`SOW-2026-OMNISTORE-001`) must adhere strictly to this Change Order Procedure.

No verbal agreement, Slack message, or email exchange shall be deemed to modify the project scope, pricing, or milestone delivery schedules unless formalized in a fully executed bilateral **Change Order (CO)**.

---

## 2. CHANGE REQUEST WORKFLOW

```
  [ Step 1: Change Request (CR) Submitted by Customer or Provider ]
                                 │
                                 ▼
         [ Step 2: Technical Feasibility & Impact Analysis ]
          (Provider analyzes timeline, cloud cost, man-days within 5 business days)
                                 │
                                 ▼
         [ Step 3: Formal Change Order Form Generated ]
                                 │
                                 ▼
         [ Step 4: Bilateral Review & Commercial Approval ]
                                 │
                 ┌───────────────┴───────────────┐
                 ▼                               ▼
       [ Approved & Executed ]          [ Rejected / Deferred ]
                 │                               │
                 ▼                               ▼
  [ Incorporated into SOW Baseline ]     [ Original SOW Remains In Force ]
```

---

## 3. PROFESSIONAL SERVICES MAN-DAY RATE CARD

For any custom engineering, specialized integrations, or scope expansions requested under a Change Order, the following agreed fixed daily rates (exclusive of VAT) shall apply:

| Engineering Role | Daily Rate (USD / 8-Hour Man-Day) | Description of Responsibilities |
| :--- | :--- | :--- |
| **Principal Cloud / Solutions Architect** | **$1,200.00** | System architecture, high-concurrency scaling, DB optimization |
| **Senior Golang / Node.js Backend Engineer** | **$950.00** | Microservice business logic, API endpoints, checkout flow |
| **Senior DevOps / SRE Specialist** | **$1,000.00** | Kubernetes, Kafka, Terraform, CI/CD and observability |
| **QA / Automation Test Engineer** | **$750.00** | End-to-end automated testing, load & chaos scripts |
| **UI/UX & Frontend Design Specialist** | **$800.00** | Storefront headless integration, checkout UX optimization |

---

## 4. FORMAL CHANGE ORDER TEMPLATE

```markdown
# CHANGE ORDER FORM

Change Order Number: CO-2026-OMNISTORE-[ XXX ]
Associated SOW: SOW-2026-OMNISTORE-001
Date of Submission: [ YYYY-MM-DD ]
Initiated By: [ ApexRetail Customer / CloudScale Provider ]

## 1. Detailed Description of Proposed Change
[ Comprehensive technical description of the requested feature, integration, or schema update ]

## 2. Business Justification & Expected Value
[ Explanation of merchant ROI, market necessity, or technical requirement ]

## 3. Technical Impact & Architecture Assessment
- Microservices Affected: [ e.g., Payment Orchestrator, OMS Webhooks ]
- Third-Party APIs Introduced: [ e.g., Klarna BNPL, Trendyol Marketplace API ]
- Database Schema Migrations: [ Schema DDL additions ]

## 4. Resource & Cost Breakdown
| Role | Man-Days Allocated | Daily Rate | Subtotal |
|---|---|---|---|
| Principal Architect | 3 | $1,200.00 | $3,600.00 |
| Senior Backend Dev | 12 | $950.00 | $11,400.00 |
| QA Test Automation | 4 | $750.00 | $3,000.00 |
| **Total Professional Fees** | **19 Man-Days** | | **$18,000.00 USD** |

## 5. Milestone & Delivery Schedule Impact
- Baseline SOW Milestone Impacted: [ e.g., Milestone M3 ]
- Revised Delivery Date: [ Previous: Week 18 -> Revised: Week 20 ]
- Target Production Deployment: [ Date: YYYY-MM-DD ]

## 6. Authorizations & Execution
By signing below, the Parties agree to amend the Statement of Work with the scope, fees, 
and schedule set forth in this Change Order. All other terms of the MSA remain unchanged.

For Customer: ApexRetail Global A.Ş. / Inc.    For Provider: CloudScale Systems Yazılım A.Ş.
Signature: _______________________________    Signature: _______________________________
Name: ____________________________________    Name: ____________________________________
Title: ___________________________________    Title: ___________________________________
Date: ____________________________________    Date: ____________________________________
```

---

## 5. SIGNATURES

**ApexRetail Global A.Ş. / Inc.**  
Authorized Signature: ________________________________  
Date: ______________________________________________  

**CloudScale Systems Yazılım A.Ş.**  
Authorized Signature: ________________________________  
Date: ______________________________________________  
