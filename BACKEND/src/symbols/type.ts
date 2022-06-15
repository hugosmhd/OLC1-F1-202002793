export enum Type {
    INT,
    STRING,
    DOUBLE,
    BOOLEAN,
    CHAR,
    error,
  }

export function tipoString(tipo: number): string | null {
    if (tipo == 0) {
      return "INT" 
  } else if (tipo == 1) {
      return "STRING" 
  } else if (tipo == 2) {
      return "DOUBLE" 
  } else if (tipo == 3) {
      return "BOOLEAN" 
  } else if (tipo == 4) {
      return "CHAR" 
  }
  return null
}
  