# Writing Syphio Rules

## Overview

Syphio rules operate on **structured analysis artifacts**, not raw text.

They are designed to detect:

- runtime inefficiencies
- security risks
- architectural issues

---

## Rule structure

A rule must define:

- id
- title
- category
- severity
- description
- detection logic
- remediation guidance

---

## Example

```ts
export const rule: Rule = {
  id: "SYP-PRF-001",
  title: "Nested loop amplification",
  category: "performance",
  severity: "high",
  description: "Detects nested loops causing multiplicative cost.",

  run(context) {
    // detection logic
    return [];
  },
};
```
