$(document).ready(function() {
  var counterDom = $('#counter')
  var counter = 0
  $(window).keydown(keyDownPress)

  function keyDownPress(event) {
    var keyCode = event.keyCode
    console.log(keyCode)

    switch (keyCode) {
      case 13:
        counter = 0
        break
      case 38:
        counter++
        break
      case 40:
        counter--
        break
    }
    counterDom.html(counter)
  }
})
