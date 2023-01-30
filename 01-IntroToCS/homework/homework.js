"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // num = 1110
//    1 1 1 0
//    0 1 1 1 
// x= 0 1 2 3

// 1*2**3 + 1*2**2 + 1*2**1 + 0*2**0 = 
let acumulador = 0
let binario = num.split('').reverse()

for(let x=0; x < binario.length ; x++){
  let res = binario[x] *2 **x;
  acumulador += res;
}
return acumulador;

}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = []
  while (num > 0) {
    let operacion = num % 2;
    num = Math.floor(num/2);
    binario.unshift(operacion);
  }
  binario = binario.join('');
  return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
