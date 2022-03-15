const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// 1 - Dada uma matriz, transforme em um array.

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []); // acc "acmulador" e curr "valor atual" concat para concatenar
}
console.log(flatten());