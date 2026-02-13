function procesarNumero(numero: number, callback: (valor: number) => void): void {
  if (numero > 0) {
    callback(numero);
  } else if (numero < 0) {
    console.error("El número no puede ser negativo");
  }
}