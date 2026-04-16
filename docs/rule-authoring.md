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

---

## Best practices

Focus on impact

Rules must reflect real-world consequences:

- performance degradation
- security risk
- maintainability issues

---

## Avoid stylistic rules

Syphio is not a formatter.

Avoid:

- naming conventions
- formatting rules
- purely stylistic concerns

---

## Provide remediation

Each rule must help developers fix the issue.

---

## Minimize false positives

Rules should aim to be:

- precise
- deterministic
- reliable

---

## Performance considerations

Rules must:

- avoid expensive traversal
- reuse engine utilities
- operate efficiently at scale

---

## Conclusion

A good rule is:

- useful
- accurate
- explainable
- actionable
