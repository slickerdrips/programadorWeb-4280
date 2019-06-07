function includesText(text, baseText) {
  if (typeof text === 'string' && typeof baseText === 'string') {
    //paso las variables a upper case para que pueda encontrar el text sin problemas en el basetext

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


console.log(includesText('PR', 'Princess Carolyn'))

console.log(includesText('ca', 'Princess Carolyn'))

console.log(includesText('Princess Carolyn', 'Pr'))

console.log(includesText(55, 'Pr'))


// como puedo hacer para que además de decirme si es true or false me lo devuelva en una oración? intenté poner un console log pero se me rompe la función ==== se ponen en funciones separadas - si da true o false en una y el mensaje en un if afuera.