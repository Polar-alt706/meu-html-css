var salariotext = '3000.00'
var alugueltext = '1200.00'
var luztext = '180.50'

var salario = Number(salariotext) 
var aluguel = Number(alugueltext)
var luz = Number(luztext)
var saldo = salario - (luz + aluguel)
var Situação = saldo >= 0?'Saldo positivo':'Saldo negativo / No limite'

console.log('------------------------------------')
console.log('      Despesas mensais              ')
console.log('------------------------------------')
console.log(`Salário: R$${salario}`)
console.log(`Aluguel: R$${aluguel}, Luz: R$${luz}`)
console.log(`Situação: ${Situação}! Saldo: R$${saldo}`)
console.log('------------------------------------')