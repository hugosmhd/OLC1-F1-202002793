export enum ArithmeticOption {
    MAS,
    MENOS,
    POR,
    DIV,
    MODULO,
    POT,
    NEGACION,
    MENOSUNARIO
}

export function arithmeticString(tipo: number): string {
    if (tipo == 0) {
      return "+" 
    } else if (tipo == 1) {
        return "-" 
    } else if (tipo == 2) {
        return "*" 
    } else if (tipo == 3) {
        return "/" 
    } else if (tipo == 4) {
        return "%" 
    } else if (tipo == 5) {
        return "**" 
    } else if (tipo == 6) {
        return "!" 
    } else if (tipo == 7) {
        return "-" 
    }
  return ""
}
  