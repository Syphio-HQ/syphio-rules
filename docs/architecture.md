# Syphio Architecture

## Overview

Syphio analyzes Shopify themes as a **runtime system**, not static templates.

The architecture is based on:

- AST analysis
- graph modeling
- cost estimation
- taint tracking
- rule evaluation

---

## Parsing and AST

Source files are parsed into a normalized AST.

The AST preserves:

- structure
- expressions
- control flow
- variable references

---

## Graph layers

Syphio builds multiple analysis graphs:

### Include graph

Tracks template composition.

### Control-flow graph

Tracks execution paths.

### Data-flow graph

Tracks variable propagation.

### Execution graph

Models runtime behavior.

---

## Cost model

Each node contributes to execution cost.

Cost factors include:

- loops
- nested structures
- render depth
- data access

---

## Security model

Syphio uses source-to-sink analysis.

Tracks:

- tainted inputs
- transformations
- output contexts

Detects:

- XSS risks
- unsafe output

---

## Rule engine

Rules operate on:

- AST
- graphs
- cost model
- taint state

They produce structured findings.

---

## Findings

Findings are standardized outputs used for:

- developer feedback
- CI integration
- scoring

---

## Scoring

Findings are aggregated into a global score.

See: [`docs/scoring-system.md`](./scoring-system.md)

---

## Conclusion

Syphio treats Liquid as:

> a runtime execution system

This enables deeper analysis than traditional tools.
