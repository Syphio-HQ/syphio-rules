## Overview

This repository defines the **public contract** of the Syphio engine.

It exposes:

- rule definitions
- analysis model
- scoring system
- findings structure

It does not expose:

- execution tooling
- CLI distribution
- platform integrations

---

## Purpose

The goal of the public contract is to:

- standardize rule behavior
- enable community contributions
- define a stable analysis model
- separate public logic from private orchestration

---

## Engine responsibilities

The public engine defines:

- AST structure
- rule execution model
- findings format
- scoring inputs

---

## Rule execution model

Rules operate on:

- AST
- graph structures
- cost model
- taint analysis

Each rule must:

- be deterministic
- produce structured findings
- avoid side effects

---

## Stability guarantees

The public contract should remain:

- backward-compatible where possible
- versioned
- documented

Breaking changes should be explicit.

---

## Separation of concerns

### Public (this repository)

- rules
- analysis model
- scoring logic
- documentation

### Private (separate systems)

- CLI
- UI
- SaaS platform
- integrations

---

## Extensibility

The engine is designed to support:

- new rule categories
- new analysis layers
- future Shopify features

---

## Conclusion

The public engine contract ensures that:

Syphio remains:

- open
- extensible
- and consistent

while allowing private execution layers to evolve independently.
