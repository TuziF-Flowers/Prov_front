export interface graph {
  id: string;
  name: string;
  label: string;
  text: string;
  status: string;
  variableName: string;
  variableValue: number;
  variableUp: boolean;
  mask: number;
  children: Array<graph>;
}