export enum Type {
    INT,
    STRING,
    DOUBLE,
    BOOLEAN,
    CHAR,
    error,
  }

export function tipoString(tipo: number): string {
    if (tipo == 0) {
      return "int" 
  } else if (tipo == 1) {
      return "string" 
  } else if (tipo == 2) {
      return "double" 
  } else if (tipo == 3) {
      return "boolean" 
  } else if (tipo == 4) {
      return "char" 
  }
  return ""
}
  