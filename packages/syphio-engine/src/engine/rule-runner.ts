import { Finding, RuleContext } from "../../../shared-types/src";
import { createContext } from "./context";

export function runRules(
  filePath: string,
  content: string,
  rules: RuleContext[]
): Finding[] {
  const context = createContext(filePath, content);

  return rules.flatMap((rule) => rule.run(context));
}