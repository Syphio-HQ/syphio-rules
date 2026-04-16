# Syphio Rule Categories

## Overview

Syphio organizes rules into **engineering domains**, not arbitrary groupings.

Each category represents a **real-world concern** in Shopify storefront development:

- performance
- security
- runtime behavior
- architecture
- platform constraints

This categorization is designed to:

- structure rule development
- enable domain-specific scoring
- support CI policies
- scale to large rule sets (300+ rules)

---

## Category system

Each rule belongs to a category identified by a prefix:

| Prefix   | Category             | Description                                             |
| -------- | -------------------- | ------------------------------------------------------- |
| SYP-LIQ  | Liquid               | Core Liquid logic, control flow, and rendering behavior |
| SYP-PRF  | Performance          | Runtime cost, TTFB impact, and execution inefficiencies |
| SYP-SEC  | Security             | XSS risks, unsafe output, and data exposure             |
| SYP-API  | Storefront API       | Query cost, overfetching, and API misuse                |
| SYP-CHK  | Checkout             | Shopify checkout constraints and compliance             |
| SYP-A11Y | Accessibility        | Storefront accessibility and usability                  |
| SYP-SEO  | SEO                  | Discoverability and structural SEO concerns             |
| SYP-I18N | Internationalization | Localization and translation issues                     |
| SYP-JSN  | JSON Templates       | Theme JSON template structure and validity              |
| SYP-3RD  | Third-party Apps     | External script impact and integration risks            |
| SYP-HYD  | Hydrogen             | Headless storefront patterns and anti-patterns          |
| SYP-ARC  | Theme Architecture   | Structural and maintainability concerns                 |
| SYP-DAT  | Data Flow            | Variable propagation and data integrity                 |
| SYP-QLT  | Quality              | General code quality and reliability                    |

---

## Category philosophy

### 1. Categories reflect impact, not syntax

A rule is categorized based on **what it affects**, not how it is written.

Example:

- A loop → Liquid
- A nested loop causing slowdown → Performance

---

### 2. Categories drive scoring

Each category has a different weight in the scoring system.

For example:

- Security issues impact score more than stylistic issues
- Performance issues impact TTFB-sensitive scoring

See: [`docs/scoring-system.md`](./scoring-system.md)

---

### 3. Categories enable CI policies

Organizations can define policies such as:

- block PR if `SYP-SEC` findings exist
- warn if `SYP-PRF` score drops below threshold
- ignore `SYP-QLT` in early development stages

---

### 4. Categories scale with the ecosystem

The system is designed to evolve as Shopify evolves.

New categories may be introduced for:

- new APIs
- new rendering paradigms
- new platform constraints

---

## Example rule identifiers

Each rule follows a structured ID:

```text
SYP-PRF-001
SYP-SEC-004
SYP-LIQ-012
```

## Format

```
SYP-{CATEGORY}-{NUMBER}
```

## Example

```
SYP-PRF-001
SYP-SEC-002
SYP-API-003
```

---

## Exemples

- [SYP-PRF-001] → Nested loop amplification
- [SYP-SEC-002] → Unsafe Liquid output
- [SYP-API-003] → Overfetching in Storefront API

---

## Category boundaries

Some rules may seem to belong to multiple categories.

In such cases:

- assign the category based on primary impact
- avoid duplicating rules across categories
- rely on scoring to reflect secondary effects

---

## Category ownership (future)

In the future, categories may be maintained by:

- core maintainers
- domain experts (security, performance, accessibility)
- ecosystem contributors

This enables:

- specialization
- higher quality rules
- faster iteration

---

## Conclusion

Categories are not just labels.

They are the foundation for:

- rule organization
- scoring
- governance
- and long-term scalability

They define how Syphio understands Shopify engineering.
