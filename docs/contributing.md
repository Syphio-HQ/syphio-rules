# Contributing to Syphio

Syphio is not just a codebase.  
It is an attempt to define a **new standard for Shopify runtime auditing**.

Contributions are welcome — but they must align with the architectural and philosophical direction of the project.

---

## What we are building

Syphio aims to become:

- a runtime analysis standard for Liquid
- a security auditing layer for Shopify themes
- a performance and cost modeling system
- a scoring framework for storefront quality

This repository defines the **public doctrine and rule system** behind that vision.

---

## Contribution areas

At this stage, we are primarily accepting contributions in the following areas:

### Architecture

- AST modeling improvements
- graph construction strategies
- cost modeling approaches
- taint propagation logic

---

### Rules

- new rule proposals
- improvements to existing rules
- performance and security detection patterns

All rules must follow the **rule authoring guidelines**:

→ [`docs/rule-authoring.md`](./rule-authoring.md)

---

### Scoring model

- severity calibration
- weighting improvements
- runtime impact modeling
- TTFB estimation strategies

---

### Documentation

- clarifications
- missing concepts
- better examples
- improved explanations

---

## Before submitting a rule

A rule is not just a detection.  
It is a **codified engineering principle**.

Before submitting a rule, make sure:

- it reflects a real-world issue
- it has measurable impact (performance, security, or architecture)
- it is not purely stylistic
- it can be explained clearly

---

## Rule quality standards

Each rule must:

- be deterministic
- be explainable
- avoid false positives when possible
- provide actionable remediation guidance
- integrate cleanly with the scoring system

---

## Pull request process

1. Fork the repository
2. Create a feature branch
3. Implement your change
4. Add documentation if necessary
5. Submit a pull request

All PRs should:

- have a clear title
- explain the reasoning behind the change
- describe expected impact

---

## Review philosophy

Syphio prioritizes:

- correctness over speed
- clarity over cleverness
- long-term maintainability over short-term convenience

Not all contributions will be accepted.  
This is intentional.

---

## Discussions and proposals

For major changes:

- open an issue first
- describe the idea clearly
- include examples if possible

---

## Code of intent

By contributing to Syphio, you agree to:

- prioritize technical quality
- respect the architecture
- contribute to a coherent system

---

## Final note

Syphio is designed to become a **reference point in the Shopify ecosystem**.

Every contribution should move it closer to that goal.
