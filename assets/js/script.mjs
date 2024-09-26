import { arrayLimpio } from "./regalos.mjs";
import Regalo from "./Regalo.mjs";

const regalos = arrayLimpio;
let result = [];

regalos.forEach((box) => {
  const regalo = new Regalo(box.ancho, box.largo, box.alto);
  const papel = regalo.calcularPapel();
  result.push(papel);
});

const totalPaper = result.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(totalPaper);
