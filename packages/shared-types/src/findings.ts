import type { SourceLocation } from "./ast";
import type { Category } from "./categories";
import type { Severity } from "./severity";

export interface Finding {
  ruleId: string;
  title: string;
  category: Category;
  severity: Severity;
  message: string;
  location?: SourceLocation;
  suggestion?: string;
  scoreImpact?: number;
}