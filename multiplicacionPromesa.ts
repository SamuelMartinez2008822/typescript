function multiplicacion(numero: number): Promise<number> {
  return new Promise<number>((res, rej) => {
    if (numero > 0) {
      res(numero * 5);
    } else {
      rej(new Error("El número debe ser mayor a 0"));
    }
  });
  
}

const promesa = multiplicacion(10);

console.log("La promesa está en estado:", promesa);

promesa
    .then((resultado) => {
        console.log("Éxito! El resultado es:", resultado);
    })
    .catch((error) => {
        console.log("Ocurrió un error:", error);
    });