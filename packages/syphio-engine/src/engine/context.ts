import type { RuleContext } from "../../../shared-types/src/index";
import { parseLiquid } from "../core/parser";

export function createContext(filePath: string, content: string): RuleContext {
  return {
    filePath,
    ast: parseLiquid(content, filePath)
  };
}