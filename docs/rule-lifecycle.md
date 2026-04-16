# Syphio Rule Lifecycle

## Overview

A Syphio rule is not just a detection pattern.

It is a **codified engineering principle**.

This document defines how rules are:

- proposed
- designed
- implemented
- validated
- maintained

---

## Lifecycle stages

### 1. Proposal

A rule begins as a proposal.

It should define:

- the problem
- the impact
- real-world examples
- why existing tools do not detect it

---

### 2. Drafting

The rule is formalized with:

- identifier
- category
- severity
- description
- rationale
- detection strategy
- remediation guidance

---

### 3. Validation

The rule is validated against:

- real Shopify themes
- edge cases
- false positives
- performance impact

---

### 4. Implementation

The rule is implemented in code:

- uses AST and analysis primitives
- integrates with the engine
- produces structured findings

---

### 5. Review

The rule is reviewed for:

- correctness
- clarity
- explainability
- alignment with Syphio philosophy

---

### 6. Release

The rule becomes part of the public rule set.

It is:

- documented
- versioned
- included in scoring

---

### 7. Evolution

Rules are continuously improved:

- better detection logic
- reduced false positives
- updated remediation

---

### 8. Deprecation (if needed)

A rule may be deprecated if:

- it becomes irrelevant
- the platform evolves
- a better rule replaces it

---

## Rule maturity levels (future)

Rules may eventually be labeled as:

- experimental
- stable
- recommended
- critical

---

## Philosophy

A rule should:

- reflect real engineering impact
- be explainable
- be actionable
- avoid noise

---

## Conclusion

The rule lifecycle ensures that Syphio rules remain:

- consistent
- reliable
- and trustworthy at scale
