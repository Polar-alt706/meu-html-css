var valorTtexto = "154.80";
var valorT = Number(valorTtexto);
var gorjeta = valorT * 0.1;
var divisao = gorjeta / 3;

var valorTform = valorT.toFixed(2).replace('.',',');
var gorjetaform = gorjeta.toFixed(2).replace('.',',');
var divisaoform = divisao.toFixed(2).replace('.',',');

console.log(`
    Valor da conta: R$${valorTform}
    Valor da gorjeta: R$${gorjetaform}
    Divisão para os 3 garçons: R$${divisaoform}
    `)