# Schedule A: Statement of Work (SOW) & Technical Specifications

**Document Reference:** SOW-2026-OMNISTORE-001  
**Associated MSA:** MSA-2026-APEX-CS-001  
**Project Title:** OmniStore SaaS & Unified Commerce Engine  

---

## 1. PROJECT OBJECTIVES & EXECUTIVE SUMMARY

The purpose of this Statement of Work ("SOW") is to specify the architecture, functional requirements, technical specifications, milestones, and deliverables for the engineering and cloud deployment of the **OmniStore SaaS & Unified Commerce Engine**.

Customer (**ApexRetail**) operates an omnichannel electronic commerce infrastructure serving over 10,000,000 monthly active shoppers across web, iOS, Android, and social commerce touchpoints. Provider (**CloudScale**) shall develop and deliver a cloud-native, headless, multi-tenant capable commerce backend engineered for ultra-high throughput, sub-100ms API response times, zero-loss transaction integrity, and seamless horizontal auto-scaling during extreme shopping holidays (e.g., Black Friday, Cyber Week).

---

## 2. SYSTEM ARCHITECTURE & TECH STACK

```
                          [ Client Layer: Web / iOS / Android / Marketplace ]
                                                   │ (TLS 1.3 HTTPS)
                                                   ▼
                                       [ Cloudflare Edge CDN & WAF ]
                                                   │
                                                   ▼
                                    [ Envoy API Gateway / GraphQL ]
                                                   │
               ┌────────────────────────┬──────────┴──────────┬────────────────────────┐
               │                        │                     │                        │
               ▼                        ▼                     ▼                        ▼
        ┌──────────────┐         ┌──────────────┐      ┌──────────────┐         ┌──────────────┐
        │ Catalog & PIM│         │ Cart & Order │      │ Inventory    │         │ Payment      │
        │ Microservice │         │ Orchestrator │      │ Engine       │         │ Orchestrator │
        └──────┬───────┘         └──────┬───────┘      └──────┬───────┘         └──────┬───────┘
               │                        │                     │                        │
               └───────────┬────────────┴──────────┬──────────┴────────────────────────┘
                           │                       │
                           ▼                       ▼
               [ Apache Kafka Event Bus ]   [ Redis Cluster 7.x ]
                           │                       │
                           ▼                       ▼
            [ PostgreSQL 16 (Patroni HA) ]  [ OpenSearch Cluster ]
```

### 2.1 Technology Stack Specifications

*   **API Gateway & Ingress:** Envoy Proxy / Kong Enterprise API Gateway with GraphQL Mesh and REST OpenAPI 3.1 endpoints.
*   **Microservices Runtime:** Go (Golang 1.23+) for high-throughput I/O services (Inventory, Cart, Checkout); Node.js (TypeScript / NestJS) for complex business logic (Order Orchestrator, PIM).
*   **Database & Storage:**
    *   **Transactional Relational Store:** PostgreSQL 16 managed with Patroni and PgBouncer connection pooling (multi-AZ replication, sub-second failover).
    *   **In-Memory Cache & Distributed Locks:** Redis Cluster 7.2 (Redlock algorithm for distributed inventory reservations).
    *   **Search & Faceting Engine:** OpenSearch 2.14 / Elasticsearch for full-text catalog search, typo tolerance, and real-time filtering.
    *   **Event Streaming & Message Queue:** Apache Kafka 3.7 with schema registry for event-driven asynchronous order processing.
*   **Infrastructure & Orchestration:** Cloud-native Kubernetes (Amazon EKS / Google GKE) with Karpenter dynamic node provisioning, Istio Service Mesh, and AWS KMS / HashiCorp Vault for secrets management.
*   **Observability:** Datadog / Prometheus + Grafana, OpenTelemetry distributed tracing, and centralized audit logging.

---

## 3. FUNCTIONAL MICROSERVICES & SCOPE OF WORK

### 3.1 Catalog & Product Information Management (PIM)
*   **Capacity:** Catalog storage and real-time indexing for up to 5,000,000 distinct SKUs across 50,000 nested categories.
*   **Attributes & Variants:** Dynamic JSON-LD attribute sets, matrix variant generation (size, color, material), and multi-currency localized pricing.
*   **Search Engine:** Sub-30ms full-text and faceted search with synchronic index synchronization via Kafka CDC (Debezium).

### 3.2 Real-Time Inventory & Multi-Warehouse Allocation
*   **Distributed Reservation Engine:** High-concurrency pessimistic/optimistic inventory reservations using Redis distributed locks with automatic 15-minute TTL expiration for abandoned checkout sessions.
*   **Omnichannel Warehouse Routing:** Real-time stock visibility across 15 physical distribution centers and 120 brick-and-mortar retail stores (BOPIS - Buy Online, Pick Up In Store).
*   **Safety Stock & Backorder Rules:** Automated inventory buffers to prevent overselling during flash sale spikes.

### 3.3 Cart, Dynamic Promotion & Pricing Engine
*   **Session Persistence:** High-performance session store capable of handling 500,000 active concurrent carts with zero read degradation.
*   **Rule Evaluation Engine:** Highly extensible rule evaluator supporting tier discounts, BOGO (Buy One Get One), conditional coupon codes, loyalty points redemption, and personalized VIP pricing.
*   **Atomic Cart Calculation:** Recalculation of complex taxes, shipping rates, and promotions in under 50ms.

### 3.4 Distributed Checkout & Payment Gateway Orchestration
*   **PCI-DSS SAQ-A Compliance:** Zero raw payment card data touches Customer infrastructure. Front-end tokenization with Hosted Fields.
*   **Multi-Acquirer Smart Routing:** Dynamic routing of credit/debit card transactions across multiple payment gateways (e.g., Iyzico, Stripe, Adyen, Garanti BBVA, PayTR) based on card BIN, transaction cost, and real-time bank gateway health.
*   **Fallback & 3DS 2.0:** Automatic transaction retry on secondary gateways upon gateway timeout; frictionless 3D-Secure 2.0 flow.

### 3.5 Order Management & Fulfillment Orchestrator (OMS)
*   **State Machine:** Finite State Machine (FSM) managing order states: `PAYMENT_AUTHORIZED`, `ALLOCATED`, `PICK_PACK`, `SHIPPED`, `DELIVERED`, `RETURNED`, `REFUNDED`.
*   **Webhooks & ERP Sync:** Real-time bi-directional integration with SAP S/4HANA / Microsoft Dynamics 365 and major cargo logistics carriers (Yurtiçi Kargo, Aras Kargo, DHL Express).

---

## 4. NON-FUNCTIONAL & PERFORMANCE SPECIFICATIONS

| Metric | Target Specification | Measurement Method |
| :--- | :--- | :--- |
| **API Latency (Read Operations)** | **P95 < 60ms**, **P99 < 120ms** at 100,000 RPS | Synthetic load testing via k6 / Locust |
| **API Latency (Write / Cart Ops)** | **P95 < 120ms**, **P99 < 250ms** at 15,000 RPS | Synthetic load testing via k6 / Locust |
| **Peak Throughput** | **100,000 Requests/Second** sustained for 4 hours | Distributed stress testing |
| **Order Processing Throughput** | **50,000 completed orders / hour** | End-to-end checkout automation test |
| **System Uptime (Monthly)** | **≥ 99.95%** (standard), **≥ 99.99%** (Cyber Week) | CloudWatch & Datadog uptime monitors |
| **Recovery Point Objective (RPO)** | **≤ 15 minutes** | PostgreSQL WAL archive replication |
| **Recovery Time Objective (RTO)** | **≤ 1 hour** | Disaster recovery failover drill |
| **Security Standards** | OWASP Top 10 zero critical vulnerabilities; SOC 2 Type II; ISO 27001 | Third-party penetration testing report |

---

## 5. PROJECT PHASES, MILESTONES & TIMELINE

The project will be executed over twenty-eight (28) calendar weeks following the Effective Date:

```
Month 1: Phase 1 [Discovery & Blueprint]
Month 2-3: Phase 2 [Core Microservices & Catalog]
Month 4-5: Phase 3 [Checkout, Payments & Integrations]
Month 6: Phase 4 [UAT, Load Testing & Security Audit]
Month 7: Phase 5 [Cutover, Go-Live & Hypercare]
```

### Milestone Breakdown Table

| Phase | Milestone Name | Key Deliverables | Estimated Completion | Milestone Fee (% of Total) |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | Architecture Blueprint & Cloud Infra | System Architecture Document (SAD), Kubernetes Terraform scripts, CI/CD pipeline | Week 4 | 15% |
| **M2** | Core Backend & PIM Engine | PIM Microservice, OpenSearch catalog, Kafka event bus, distributed inventory API | Week 10 | 25% |
| **M3** | Checkout & Payment Gateway Integration | Cart engine, 3DS payment router (Iyzico/Stripe), OMS state machine, ERP webhooks | Week 18 | 25% |
| **M4** | Acceptance Testing & Load Simulation | 150K RPS load test report, third-party pen-test clearance, UAT sign-off | Week 24 | 20% |
| **M5** | Production Cutover & Hypercare | Live production traffic cutover, 30-day dedicated hypercare engineering support | Week 28 | 15% |

---

## 6. USER ACCEPTANCE TESTING (UAT) & CRITERIA

Acceptance of each milestone shall be governed by **Schedule G** (`08_UAT_ACCEPTANCE_TESTING_SIGN_OFF.md`). Deliverables will be evaluated against:
1.  **Functional Conformance:** 100% passage of agreed automated test suites (Unit test coverage ≥ 85%, integration tests pass).
2.  **Performance Verification:** Verification that system meets the latency and throughput thresholds under simulated load of 150,000 RPS without HTTP 5xx errors exceeding 0.01%.
3.  **Security Clearance:** Zero Critical (CVSS ≥ 9.0) and zero High (CVSS ≥ 7.0) vulnerabilities reported by independent penetration testing.

---

## 7. OUT OF SCOPE

The following items are expressly excluded from this SOW and require a formal Change Order:
*   Physical warehouse robotics / hardware conveyor firmware development.
*   Legacy ERP core internal refactoring (Customer ERP team remains responsible for SAP RFC endpoints).
*   Merchant third-party branding graphic asset creation (Customer provides UI designs and Figma files).
*   Any non-standard payment gateways not listed in Section 3.4.

---

## 8. SIGNATURES

**ApexRetail Global A.Ş. / Inc. (Customer)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  

**CloudScale Systems Yazılım A.Ş. (Provider)**  
Authorized Signature: ________________________________  
Name / Title: _______________________________________  
Date: ______________________________________________  
