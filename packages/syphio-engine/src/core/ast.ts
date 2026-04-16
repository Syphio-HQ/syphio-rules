import type { AstNode } from "../../../shared-types/src/index";

export function walkAst(node: AstNode, visit: (node: AstNode) => void): void {
  visit(node);

  if (!node.children) return;

  for (const child of node.children) {
    walkAst(child, visit);
  }
}

export function findNodesByType(root: AstNode, type: string): AstNode[] {
  const results: AstNode[] = [];

  walkAst(root, (node) => {
    if (node.type === type) {
      results.push(node);
    }
  });

  return results;
}