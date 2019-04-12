var dia = prompt('Ingrese un día de la semana. (En minúscula y sin tildes)')

switch (dia) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('es un día hábil')
    break

  case 'sabado':
  case 'domingo':
    console.log('no es un día hábil')
    break

  default:
    console.log('la información ingresada es inválida')
    break
}
