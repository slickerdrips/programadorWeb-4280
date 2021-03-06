console.log('1er Workshop')

var studentsList = getLocalList('list')

// Nodos del DOM

var firstNameInput = document.getElementById('firstName')
var dniInput = document.getElementById('dni')
var deleteDniInput = document.getElementById('deleteDni')
var addStudentButton = document.getElementById('addStudentButton')
var deleteStudentButton = document.getElementById('deleteStudentButton')
var mainListNode = document.getElementById('mainList')
var emailInput = document.getElementById('email')
var lastNameInput = document.getElementById('lastName')
var searchTextInput = document.getElementById('searchText')
var searchStudentButton = document.getElementById('searchStudentButton')
var searchListNode = document.getElementById('searchList')

for (var i = 0; i < studentsList.length; i++) {
  var student = studentsList[i]
  var liStudent = createStudentNode(student)
  mainListNode.appendChild(liStudent)
}

firstNameInput.onblur = validateRequired
dniInput.onblur = validateDni
emailInput.onblur = emailValidation

addStudentButton.onclick = addStudent
deleteStudentButton.onclick = deleteStudent
searchStudentButton.onclick = searchStudent

function deleteStudent() {
  var dniValue = deleteDniInput.value

  if (dniValue) {
    var index = searchStudentIndexByDni(dniValue, studentsList)

    if (index !== -1) {
      studentsList.splice(index, 1)

      setLocalList('list', studentsList)

      var liNode = document.getElementById(dniValue)

      mainListNode.removeChild(liNode)

      deleteDniInput.value = ''
    } else {
      alert('Usuario NO existente')
    }
  }
}

function addStudent() {
  var firstNameValue = firstNameInput.value
  var dniValue = dniInput.value
  var emailValue = emailInput.value
  var lastNameValue = lastNameInput.value

  var student = {
    dni: dniValue,
    firstName: firstNameValue,
    email: emailValue,
    lastName: lastNameValue
  }

  studentsList.push(student)
  var liStudent = createStudentNode(student)

  mainListNode.appendChild(liStudent)

  setLocalList('listStudents', studentsList)

  firstNameInput.value = ''
  dniInput.value = ''
  emailInput.value = ''
  lastNameInput.value = ''

  firstNameInput.classList.remove('is-valid')
  dniInput.classList.remove('is-valid')
  emailInput.classList.remove('is-valid')

  addStudentButton.disabled = true
}

function validateRequired(event) {
  var inputNode = event.target

  var value = inputNode.value

  if (!value) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
  validateAddButton()
}

function validateDni(event) {
  var inputNode = event.target
  var value = inputNode.value
  var parsedValue = parseInt(value, 10)
  var dniExists

  if (searchStudentIndexByDni(value, studentsList) !== -1) {
    dniExists = true
  } else {
    dniExists = false
  }

  if (!value || isNaN(parsedValue) || parsedValue <= 0 || dniExists) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }

  validateAddButton()
}

function emailValidation(event) {
  var inputNode = event.target
  var inputValue = inputNode.value

  if (
    inputValue.indexOf('@') === -1 ||
    (inputValue.indexOf('.') === -1 || !inputValue)
  ) {
    emailInput.classList.add('is-invalid')
    emailInput.classList.remove('is-valid')
  } else {
    emailInput.classList.add('is-valid')
    emailInput.classList.remove('is-invalid')
  }
  validateAddButton()
}

function validateAddButton() {
  var validInputs = document.getElementsByClassName('is-valid')

  if (validInputs.length !== 3) {
    addStudentButton.disabled = true
  } else {
    addStudentButton.disabled = false
  }
}

function setLocalList(key, list) {
  if (typeof key === 'string' && Array.isArray(list)) {
    var strList = JSON.stringify(list)
    localStorage.setItem(key, strList)
  }
}

function getLocalList(key) {
  if (typeof key === 'string') {
    var localList = localStorage.getItem(key)
    if (localList) {
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      return []
    }
  }
}

function createStudentNode(newStudent) {
  var liNode = document.createElement('li')

  liNode.id = newStudent.dni

  liNode.className = 'list-group-item'

  var fullName = ''

  if (newStudent.firstName && newStudent.lastName) {
    fullName = newStudent.firstName + ', ' + newStudent.lastName
  } else if (newStudent.firstName) {
    fullName = newStudent.firstName
  } else if (newStudent.lastName) {
    fullName = newStudent.lastName
  }

  liNode.innerHTML =
    '<h1>' +
    fullName +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  return liNode
}

function searchStudentIndexByDni(dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}
function searchStudent() {
  var text = searchTextInput.value

  var index = searchStudentIndexByText(text, studentsList)

  searchListNode.innerHTML = ''

  if (index !== -1) {
    var searchStudent = studentsList[index]
    var liSearch = createStudentNode(searchStudent)
    searchListNode.appendChild(liSearch)
  }
}

function searchStudentIndexByText(text, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      includesText(text, student.firstName) ||
      includesText(text, student.lastName)
    ) {
      index = i
      break
    }
  }
  return index
}

function includesText(text, baseText) {
  if (typeof text === 'string' && typeof baseText === 'string') {
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
