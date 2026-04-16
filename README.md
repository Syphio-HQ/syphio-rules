<div align="center">

# Syphio Rules

### The runtime, security, and scoring standard for Shopify themes

<br/>

![Build Status](https://img.shields.io/badge/build-passing-black?style=for-the-badge)
![Rules](https://img.shields.io/badge/rules-400%2B-black?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-black?style=for-the-badge)
![Shopify](https://img.shields.io/badge/shopify-plus%20ready-black?style=for-the-badge)

</div>

---

## What is Syphio?

**Syphio Rules** defines a new category in the Shopify ecosystem:

> **runtime-aware auditing for Liquid and storefront architecture**

It is not a linter.  
It is not a formatting tool.  
It is not a syntax validator.

Syphio is designed to answer a deeper question:

> _What does this code actually cost, risk, and impact at runtime?_

This repository contains the **public standard** behind Syphio:

- rule definitions
- runtime analysis concepts
- scoring methodology
- architecture doctrine
- engine contracts

---

## Why Syphio exists

Shopify tooling has historically focused on **syntax correctness**.

That is necessary — but not sufficient.

### Syntax vs Runtime Intelligence

| Capability                   | Traditional Tools | Syphio |
| ---------------------------- | ----------------- | ------ |
| Liquid syntax validation     | ✓                 | ✓      |
| Theme structure validation   | ✓                 | ✓      |
| Runtime cost estimation      | ✗                 | ✓      |
| Loop amplification detection | ✗                 | ✓      |
| Render hot-path analysis     | ✗                 | ✓      |
| Context-aware XSS detection  | Limited           | ✓      |
| TTFB impact modeling         | ✗                 | ✓      |
| Architecture-level insights  | Limited           | ✓      |
| Scoring system (0–100)       | ✗                 | ✓      |

**Theme Check validates structure.**  
**Syphio evaluates consequences.**

---

## Core concept

Liquid is not just a template language.

It is a **runtime system** with:

- control flow
- data flow
- execution cost
- rendering depth
- security boundaries

Syphio treats Liquid as an **execution graph**, not static text.

---

## Architecture overview

Syphio is built around a multi-layer analysis model:

1. Parse Liquid and theme files
2. Build a normalized AST
3. Construct semantic graphs
4. Estimate runtime cost
5. Track data flow and taint
6. Evaluate rules
7. Produce findings and a score

→ Full architecture: [`docs/architecture.md`](./docs/architecture.md)

---

## Rule domains

Syphio organizes rules into domains representing real-world engineering concerns:

| Domain             | Purpose                              |
| ------------------ | ------------------------------------ |
| Liquid             | Rendering logic and control flow     |
| Security           | XSS, unsafe output, trust boundaries |
| Performance        | TTFB, loops, rendering cost          |
| Accessibility      | Storefront usability                 |
| SEO                | Structural discoverability           |
| Hydrogen           | Headless storefront patterns         |
| Storefront API     | Query cost and overfetching          |
| Theme Architecture | Maintainability and structure        |
| Data Flow          | Variable propagation and tracing     |
| Quality            | Consistency and reliability          |

→ Full taxonomy: [`docs/categories.md`](./docs/categories.md)

---

## Scoring system

Syphio introduces a normalized **0–100 score** that reflects:

- security risk
- runtime cost
- algorithmic complexity
- architectural quality

The score is not cosmetic — it is a **governance signal**.

→ Full scoring model: [`docs/scoring-system.md`](./docs/scoring-system.md)

---

## Example findings

Syphio is designed to detect patterns such as:

- nested Liquid loops with multiplicative cost
- unsafe output in HTML or JavaScript contexts
- render calls inside hot execution paths
- expensive filter chains in critical templates
- high-cost Storefront API usage
- silent performance regressions

See examples:

- [`examples/basic-theme/product-grid.liquid`](./examples/basic-theme/product-grid.liquid)
- [`examples/basic-theme/unsafe-output.liquid`](./examples/basic-theme/unsafe-output.liquid)

---

## Monorepo structure

```text
syphio-rules/
├── docs/
├── rules/
├── packages/
│   ├── shared-types/
│   ├── syphio-engine/
│   └── config/
├── examples/
└── assets/
```

## Packages

### `packages/shared-types`

Defines the core contracts:

- AST structure
- Rule interface
- Findings model
- Scoring primitives

---

### `packages/syphio-engine`

Implements the public analysis engine:

- parsing abstraction
- AST utilities
- graph construction
- cost modeling
- taint tracking
- rule execution

---

### `packages/config`

Defines:

- default categories
- scoring weights
- shared configuration standards

---

## How rules work

Each rule operates on structured analysis artifacts, not raw text.

Rules can inspect:

- AST nodes
- control-flow and data-flow graphs
- execution cost estimates
- taint propagation
- output contexts

---

## Rule contract

A rule defines:

- identifier
- category
- severity
- description
- detection logic
- remediation guidance

→ Authoring guide: [`docs/rule-authoring.md`](./docs/rule-authoring.md)

---

## Findings model

Every issue detected by Syphio is a structured finding containing:

- rule ID
- category
- severity
- location
- explanation
- impact
- remediation
- score contribution

→ Details: [`docs/findings-model.md`](./docs/findings-model.md)

---

## Public engine contract

This repository exposes:

- rule definitions
- analysis model
- scoring system
- engine contracts

Execution tooling (CLI, integrations, platform features) may be distributed separately.

→ Contract: [`docs/public-engine-contract.md`](./docs/public-engine-contract.md)

---

## Design principles

### Runtime-first

All rules must relate to real execution impact.

### Explainability

Every finding must be understandable and justified.

### Severity with consequence

Severity reflects business impact, not just correctness.

### Determinism

Analysis must be stable and reproducible.

### Enterprise-ready

Designed for CI pipelines, agencies, and large storefronts.

---

## Professional roadmap

### Phase 1 — Foundation

- Monorepo architecture
- Technical doctrine
- Rule taxonomy
- Engine contracts

### Phase 2 — Engine Core

- AST normalization
- graph construction
- cost model
- taint analysis

### Phase 3 — Rule Packs

- Liquid rules
- Security rules
- Performance rules
- Architecture rules

### Phase 4 — Developer Platform

- CLI (private distribution)
- CI integration
- reporting formats
- policy enforcement

### Phase 5 — Ecosystem

- editor integrations
- rule presets
- autofix engine
- partner tooling

---

## Positioning

Syphio is not:

- a formatter
- a linter
- a syntax checker

Syphio is:

> a runtime, security, and architecture intelligence layer for Shopify

That is the category.

---

## Contributing

At this stage, contributions focus on:

- architecture discussions
- rule design
- scoring model refinement
- analysis methodology

→ Guidelines: [`docs/contributing.md`](./docs/contributing.md)

---

## License

MIT
