import type { AstNode } from "../../../shared-types/src/index";

export function parseLiquid(content: string, filePath: string): AstNode {
  const root: AstNode = {
    id: "root",
    type: "TemplateNode",
    loc: { filePath, line: 1, column: 1 },
    children: []
  };

  const lines = content.split("\n");

  lines.forEach((line, i) => {
    if (line.includes("{% for")) {
      root.children?.push({
        id: `for-${i}`,
        type: "ForNode",
        value: line.trim(),
        loc: { filePath, line: i + 1, column: 1 },
        children: []
      });
    }

    if (line.includes("{{")) {
      root.children?.push({
        id: `output-${i}`,
        type: "OutputNode",
        value: line.trim(),
        loc: { filePath, line: i + 1, column: 1 }
      });
    }
  });

  return root;
}