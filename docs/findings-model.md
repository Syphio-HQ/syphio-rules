# Syphio Findings Model

## Overview

A finding is the core output of the Syphio engine.

It represents a **detected issue** with:

- context
- impact
- explanation
- remediation

Findings are designed to be:

- machine-readable
- human-explainable
- CI-compatible

---

## Finding structure

Each finding must include:

- rule ID
- title
- category
- severity
- location
- message
- explanation
- impact
- remediation guidance
- score contribution

---

## Example

```json
{
  "ruleId": "SYP-PRF-001",
  "title": "Nested loop amplification",
  "category": "performance",
  "severity": "high",
  "location": {
    "filePath": "sections/product-grid.liquid",
    "line": 12,
    "column": 3
  },
  "message": "Nested loops detected",
  "explanation": "Nested loops create multiplicative runtime cost.",
  "impact": "Increased TTFB and rendering latency.",
  "remediation": "Flatten loops or precompute data.",
  "scoreImpact": 20
}
```

---

## Severity

Severity reflects the **potential business impact**:

- info
- low
- medium
- high
- critical

---

## Location

Location

Location must precisely identify where the issue occurs:

- file path
- line
- column

---

## Explanation

Explains:

- what the issue is
- why it matters
- how Syphio detected it

---

## Impact

Describes the real-world consequence:

- performance degradation
- security exposure
- maintainability issues

---

## Remediation

Provides actionable guidance to fix the issue.

---

## Score contribution

Each finding contributes to the global score.

See: [`docs/scoring-system.md`](./scoring-system.md)

---

## Design principles

Findings must be:

- clear
- actionable
- deterministic
- consistent

---

## Conclusion

Findings are the bridge between:

- analysis
- developer understanding
- and engineering decisions
