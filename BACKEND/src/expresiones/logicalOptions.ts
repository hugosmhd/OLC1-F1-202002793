export enum LogicalOption {
    OR,
    AND,
    XOR,
    NOT
}

export function tipoString(tipo: number): string {
    if (tipo == 0) {
      return "||" 
  } else if (tipo == 1) {
      return "&&" 
  } else if (tipo == 2) {
      return "^" 
  } else if (tipo == 3) {
      return "!" 
  }
  return ""
}