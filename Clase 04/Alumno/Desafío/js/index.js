var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

@param {string} text
@param {Array} studentsList
@returns {number}

function searchStudent (studentsList, text) {

  var index = -1

  for (var i; i < studentsList.length; i++) {

  var students = studentsList[i]

    if (students.firstName === text || students.lastName === text) {

     index = i
     break
    }
  }

  return index
}

var text = prompt('Ingrese el nombre o apellido del estudiante que está buscando')

var index = searchStudent(studentsList, text)

if (index !== -1) {

  console.log('se encontró al estudiante en la posición ' + index)
}else {
  console.log('No se ha podido encontrar al estudiante')
}
