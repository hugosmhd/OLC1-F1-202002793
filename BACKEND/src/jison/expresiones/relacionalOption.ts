export enum RelacionalOption {
    MAYOR,
    MENOR,
    MAYORIGUAL,
    MENORIGUAL,
    IGUALIGUAL,
    DIFERENTE
}

export function tipoString(tipo: number): string {
    if (tipo == 0) {
      return ">" 
  } else if (tipo == 1) {
      return "<" 
  } else if (tipo == 2) {
      return ">=" 
  } else if (tipo == 3) {
      return "<=" 
  } else if (tipo == 4) {
    return "==" 
  } else if (tipo == 5) {
    return "!=" 
  }
  return ""
}