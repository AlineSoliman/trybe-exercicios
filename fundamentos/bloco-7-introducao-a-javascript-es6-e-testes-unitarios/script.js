// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2,8));

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') { 
//       throw new Error('Os valores devem ser numéricos'); // throw para interromper o funcionamento do código e aparecer o erroo no console.
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => { // try/catch para capturar o erro e tratá-lo
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  
  console.log(sum(2, '3'));

