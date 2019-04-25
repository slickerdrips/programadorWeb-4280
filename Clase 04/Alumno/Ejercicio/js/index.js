// La función solamente se ejecuta si yo la llamo. Esto se hace llamando a la función por su nombre y poniendo paréntesis:

/* function ShowMessage () {
  console.log('Hoy es martes!')
}

ShowMessage () */

// EJERCICIO RESUELTO

var examResults = [7, 5, 6, 4, 3, 2, 8, 10, 2, 3, 8]

var averageResult = calcAverage(examResults)

console.log(averageResult)

function calcAverage(agesArray) {
  var total = 0
  for (var i = 0; i < agesArray.length; i++) {
    total = total + agesArray[i]
  }

  return total / agesArray.length
}
