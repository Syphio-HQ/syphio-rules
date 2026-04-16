
import { Finding, Rule } from "../../../shared-types/src";
import { createContext } from "./context";

export function runRules(
  filePath: string,
  content: string,
  rules: Rule[]
): Finding[] {
  const context = createContext(filePath, content);

  return rules.reduce((acc: Finding[], rule: Rule) => {
    return acc.concat(rule.run(context));
  }, []);
}