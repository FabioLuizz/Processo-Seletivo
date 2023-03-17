var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeroInformado = lines.shift().split('');

let a = 0;
let b = 1;
let c;

while (b <= numeroInformado) {
  c = a + b;
  a = b;
  b = c;
}

if (a === numeroInformado) {
  console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
  console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}