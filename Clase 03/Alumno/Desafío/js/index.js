
var operation = prompt('Elija una operación matemática a realizar (sum, res, mul, div)')


var number1 = prompt('Ingerese el primer número')
var parsedNumber1 = parseFloat(number1, 10)


var number2
var parsedNumber2

do {
  number2 = prompt('Ingerese el segundo número')
  parsedNumber2 = parseFloat(number2, 10)
} while (operation === 'div' && parsedNumber2 === 0)


var result

switch (operation) {
  case 'sum':
    result = parsedNumber1 + parsedNumber2
    break
  case 'res':
    result = parsedNumber1 - parsedNumber2
    break
  case 'mul':
    result = parsedNumber1 * parsedNumber2
    break
  case 'div':
    result = parsedNumber1 / parsedNumber2
    break
  default:
    result = 'Operación inválida'
    break
}

console.log(var message = 'El resultado de la operación es: ' + result)
