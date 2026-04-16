export interface SourceLocation {
  filePath: string;
  line: number;
  column: number;
}

export interface AstNode {
  id: string;
  type: string;
  value?: string;
  children?: AstNode[];
  loc?: SourceLocation;
  meta?: Record<string, unknown>;
}