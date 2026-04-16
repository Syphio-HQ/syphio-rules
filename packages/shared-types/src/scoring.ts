import type { Severity } from "./severity";

export interface ScoreInput {
  severity: Severity;
  runtimeImpact: number;
  complexity: number;
  exposure: number;
  confidence: number;
}

export interface ScoreResult {
  scoreImpact: number;
}