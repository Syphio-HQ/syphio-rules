# Syphio Scoring System

## Overview

Syphio produces a normalized score from **0 to 100**.

This score reflects:

- security risk
- runtime cost
- complexity
- architectural quality

---

## Formula

final_score = 100 - Σ(weighted_penalties)

---

## Severity weights

| Level    | Weight |
| -------- | ------ |
| Info     | 1      |
| Low      | 3      |
| Medium   | 7      |
| High     | 12     |
| Critical | 20     |

---

## Runtime impact

| Impact      | Multiplier |
| ----------- | ---------- |
| None        | 1.0        |
| Minor       | 1.1        |
| Moderate    | 1.35       |
| Significant | 1.7        |
| Severe      | 2.2        |

---

## Complexity

| Pattern   | Multiplier |
| --------- | ---------- |
| Constant  | 1.0        |
| Linear    | 1.05       |
| Nested    | 1.5        |
| Unbounded | 2.0        |

---

## Exposure

| Level       | Multiplier |
| ----------- | ---------- |
| Theoretical | 1.0        |
| Reachable   | 1.5        |
| Exploitable | 2.3        |

---

## Confidence

| Level  | Multiplier |
| ------ | ---------- |
| Low    | 0.6        |
| Medium | 0.85       |
| High   | 1.0        |

---

## Category weights

| Category    | Weight |
| ----------- | ------ |
| Security    | 1.35   |
| Performance | 1.25   |
| Liquid      | 1.0    |
| Quality     | 0.9    |

---

## TTFB impact

| Impact | Bonus |
| ------ | ----- |
| Mild   | +2    |
| Heavy  | +9    |
| Severe | +15   |

---

## Score meaning

| Score | Meaning    |
| ----- | ---------- |
| 90+   | Excellent  |
| 80+   | Strong     |
| 70+   | Acceptable |
| <60   | Critical   |

---

## Conclusion

The score is not a vanity metric.

It represents a **real engineering signal** combining:

- risk
- cost
- complexity
