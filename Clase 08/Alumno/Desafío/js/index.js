var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode(student) {
  var ulNode = document.createElement('ul')

  ulNode.id = student.dni

  ulNode.className = 'list-group-item'

  var fullName = ''

  if (student.firstName && student.lastName) {
    fullName = student.firstName + ', ' + student.lastName
  } else if (student.firstName) {
    fullName = student.firstName
  } else if (student.lastName) {
    fullName = student.lastName
  }

  ulNode.innerHTML =
    '<li>' +
    fullName +
    '</li><li>DNI:' +
    student.dni +
    '</li><li>E-mail:' +
    student.email +
    '</li>'

  return ulNode
}

var studentNode = createStudentNode(student)

console.log(studentNode)
