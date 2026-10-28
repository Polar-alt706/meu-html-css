var a = 10;
var b = -5;
var par = a % 2 === 0;
var emaior0positivo = a > b && a > 0;
var eIgual = a === b;
var negativo = a < 0 || b < 0;

console.log(`O número ${a} é par? ${par}`)
console.log(`${a} é maior que ${b} e ${a} é positivo? ${emaior0positivo}`)
console.log(`${a} é igual a ${b} em valor e tipo? ${eIgual}`)
console.log(`Pelo menos um dos dois números é menor que zero? ${negativo}`)