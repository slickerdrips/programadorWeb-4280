var car = '{"price":3500,"model":"Etios","brand":"Toyota"}'

var parsedCar = JSON.parse(car)

console.log('the price is ' + parsedCar.price)
console.log('the model is ' + parsedCar.model)
