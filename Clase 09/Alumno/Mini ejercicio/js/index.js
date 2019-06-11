var edad = document.getElementById('age')
var button = document.getElementById('button')

button.onclick = clickButton

function validarEdad() {

  var ageValue = age.value

  if(ageValue >= 18) {

    console.log('el usuario es mayor de edad')
    }else if(ageValue < 18) {

      console.log('el usuario es menor de edad')
    }
  }
}