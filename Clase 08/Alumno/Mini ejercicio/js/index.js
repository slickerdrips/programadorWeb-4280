var oldTitle = document.getElementById('old-title')

setTimeout(function() {
  var newTitle = prompt('Ingresá un nuevo título')

  oldTitle.innerHTML = newTitle
}, 1000)

var oldText = document.getElementById('old-text')

setTimeout(function() {
  var newText = prompt('Ingresá un nuevo texto')

  

  oldText.innerHTML = newText
}, 6000)
