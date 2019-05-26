$(window).keydown(keyDownPress)

function keyDownPress (event) {
  var keyCode = event.keyCode

  switch (keyCode) {
    case 27:
      console.log('Salir de pantalla completa')
      break
    case 32:
      console.log('Pausar video')
      break
  }
}