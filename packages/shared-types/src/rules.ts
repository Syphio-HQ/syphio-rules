import type { AstNode } from "./ast";
import type { Category } from "./categories";
import type { Finding } from "./findings";
import type { Severity } from "./severity";

export interface RuleContext {
  filePath: string;
  ast: AstNode;
}

export interface Rule {
  id: string;
  title: string;
  category: Category;
  severity: Severity;
  description: string;
  run(context: RuleContext): Finding[];
}