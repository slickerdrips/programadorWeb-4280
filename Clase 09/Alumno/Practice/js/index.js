console.log('CATS')

var catext = document.getElementById('catext')
var catimg = document.getElementById('catimg')

// catext.addEventListener("click", showCat)

catext.addEventListener('click', showCat)

function showCat() {
  if (catimg.className === 'hide') {
    catimg.className = ''
  } else {
    catimg.className = 'hide'
  }
}
