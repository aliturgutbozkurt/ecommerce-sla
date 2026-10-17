# Schedule G: User Acceptance Testing (UAT) & Sign-Off Protocol

**Document Reference:** UAT-2026-OMNISTORE-001  
**Associated MSA:** MSA-2026-APEX-CS-001 & SOW-2026-OMNISTORE-001  
**Effective Date:** November 1, 2026  

---

## 1. UAT OBJECTIVES & GOVERNANCE

This Protocol establishes the procedure and acceptance standards for validating deliverables completed under each milestone of the Statement of Work (`SOW-2026-OMNISTORE-001`).

Testing shall occur in an isolated, production-identical staging environment deployed by **CloudScale Systems Yazılım A.Ş.** ("Provider") and subjected to thorough verification by the engineering and product team of **ApexRetail Global A.Ş. / Inc.** ("Customer").

---

## 2. TESTING PHASES & METHODOLOGY

```
[ Milestone Handover ] ──► [ Automated Test Suite Run ] ──► [ Business UAT Scenarios ]
                                                                     │
[ Final Production Sign-Off ] ◄── [ Security & Load Test ] ◄─────────┘
```

1.  **Automated Smoke & Integration Verification:** Execution of end-to-end Cypress, Playwright, and Postman API regression suites.
2.  **Functional User Acceptance Testing:** Verification of checkout flows, coupon rules, inventory reservations, order lifecycle transitions, and ERP webhooks.
3.  **Stress & Concurrency Load Testing:** Synthetic load simulation up to 150,000 Requests/Second to verify P99 latency < 120ms and zero memory leak under sustained load.
4.  **Security & Penetration Verification:** Automated dynamic application security testing (DAST) and independent manual penetration audit.

---

## 3. DEFECT CLASSIFICATION & ACCEPTANCE THRESHOLDS

Defects identified during the ten (10) business day UAT review window are categorized as follows:

| Severity Level | Definition | Impact on Acceptance |
| :--- | :--- | :--- |
| **Severity 1 (Blocker)** | System crash, data corruption, checkout inoperable, critical security flaw. | **Strict Rejection:** Milestone rejected; Provider must patch and re-submit within 3 business days. |
| **Severity 2 (Critical)** | Major business feature fails without viable workaround; ERP inventory desync. | **Strict Rejection:** Milestone rejected until resolved and re-tested. |
| **Severity 3 (Major)** | Feature defect with an agreed operational workaround; non-critical API failure. | **Conditional Acceptance:** Accepted subject to formal punch-list remediation within 10 business days. |
| **Severity 4 (Minor)** | Minor styling glitch, translation typo, administrative cosmetic defect. | **Acceptance Granted:** Added to regular sprint backlog. |

---

## 4. ACCEPTANCE CERTIFICATE TEMPLATE

### FORMAL MILESTONE ACCEPTANCE AND HANDOVER CERTIFICATE

```markdown
Project Title: OmniStore SaaS & Unified Commerce Engine
Milestone Reference: [ e.g. M3 - Checkout & Payment Gateway Integration ]
Deliverable Completion Date: ____________________
Testing Completion Date: _______________________

PART A: TESTING SUMMARY
- Total Test Cases Executed: [ 450 ]
- Test Cases Passed: [ 448 ]
- Severity 1 (Blocker) Defects: [ 0 ]
- Severity 2 (Critical) Defects: [ 0 ]
- Severity 3 (Major) Defects: [ 2 - Listed on Punch-List ]
- Severity 4 (Minor) Defects: [ 5 - Backlogged ]

PART B: ACCEPTANCE DETERMINATION (Select One)
[   ] FULL ACCEPTANCE: The Milestone Deliverables satisfy all requirements in the SOW.
[   ] CONDITIONAL ACCEPTANCE: Deliverables are accepted subject to the resolution of 
      the attached Punch-List items by [ Date: ____________ ].
[   ] REJECTION: Deliverables fail to meet acceptance criteria due to unresolved 
      Severity 1 or 2 defects. Provider must remediate and re-submit.

PART C: FINANCIAL CLEARANCE
Upon mutual execution of this Certificate:
- Milestone Payment Percentage: [ 25% ]
- Approved Invoice Amount: $ [ 125,000.00 USD ] + Applicable VAT.
```

---

## 5. SIGNATURES & EXECUTION

**ApexRetail Global A.Ş. / Inc. (Customer)**  
Accepted By: _________________________________________  
Title: VP of Engineering / Lead Product Manager  
Signature: ___________________________________________  
Date: ________________________________________________  

**CloudScale Systems Yazılım A.Ş. (Provider)**  
Delivered By: ________________________________________  
Title: Delivery Director / Principal Technical Architect  
Signature: ___________________________________________  
Date: ________________________________________________  
