var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i]
  console.log(day)

  switch (day) {
    case 'lunes':
    case 'Lunes':
    case 'LUNES':
    case 'martes':
    case 'Martes':
    case 'MARTES':
    case 'miercoles':
    case 'Miercoles':
    case 'MIERCOLES':
    case 'miércoles':
    case 'Miércoles':
    case 'MIÉRCOLES':
    case 'jueves':
    case 'Jueves':
    case 'JUEVES':
    case 'viernes':
    case 'Viernes':
    case 'VIERNES':
      console.log('es un día hábil')
      break

    case 'sabado':
    case 'Sabado':
    case 'SABADO':
    case 'sábado':
    case 'Sábado':
    case 'SÁBADO':
    case 'domingo':
    case 'Domingo':
    case 'DOMINGO':
      console.log('no es un día hábil')
      break

    default:
      console.log('la información ingresada es inválida')
      break
  }
}
