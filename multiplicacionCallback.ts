function multiplicar(numero: number, callback: (resultado: number) => void): void {
  const resultado: number = numero * 2;
  callback(resultado);
}