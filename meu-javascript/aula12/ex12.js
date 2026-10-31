var nowhour = new Date()
var hour = nowhour.getHours()
console.log(`Agora são exatamente ${hour} horas.`)
if (hour >= 6 && hour < 12) {
    console.log('Bom dia.')
} else if (hour >= 12 && hour <= 17) {
    console.log('Boa tarde.')
} else if (hour >= 18 && hour <= 23){
    console.log('Boa noite.')
} else {
    console.log('Boa madruga.')
}