const a = [1, 3, 5, 7];
const proximoElementoA = a[a.length - 1] + 2;
console.log(proximoElementoA); // 9

const b = [2, 4, 8, 16, 32, 64];
const proximoElementoB = b[b.length - 1] * 2;
console.log(proximoElementoB); // 128

const c = [0, 1, 4, 9, 16, 25, 36];
const proximoElementoC = Math.pow(c[c.length - 1], 2) + 1;
console.log(proximoElementoC); // 49

const d = [4, 16, 36, 64];
const proximoElementoD = d[d.length - 1] + 12;
console.log(proximoElementoD); // 100

const e = [1, 1, 2, 3, 5, 8];
const proximoElementoE = e[e.length - 1] + e[e.length - 2];
console.log(proximoElementoE); // 13

const f = [2, 10, 12, 16, 17, 18, 19];
let proximoElementoF;

if (f.length === 5) {
  proximoElementoF = f[f.length - 1] + 1;
} else {
  proximoElementoF = f[f.length - 1] + 2;
}

console.log(proximoElementoF); // 20