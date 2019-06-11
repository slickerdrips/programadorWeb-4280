console.log('Princess Carolyn')

var email = document.getElementById('email')

email.onblur = validarMail

function validarMail(event) {
  inputNode = event.target

  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') === -1 ||
    inputNode.value.indexOf('.') === -1
  ) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

// console.log(validarMail)
