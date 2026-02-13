function procesarNotas(notas: number[]): Promise<string> {
  return new Promise((res, rej) => {
    const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;

    if (promedio >= 3) {
      res(`Aprobado - ${promedio.toFixed(2)}`);
    } else {
      rej(`Reprobado - ${promedio.toFixed(2)}`);
    }
  });
}

procesarNotas([4, 3.5, 3.8])
  .then(console.log)
  .catch(console.log);

procesarNotas([2.5, 2.8, 1.9])
  .then(console.log)
  .catch(console.log);