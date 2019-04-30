/* 

console.log('quería un chupetin')

function Holiday(country, location, days) {
  var id = Math.random()

  this.country = country
  this.location = location
  this.days = days
  this.hours = days * 24
  this.minutes = days * 24 * 60

  this.getId = function() {
    return id
  }
}



var userCountry = prompt('Ingresá el primer país')
var userLocation = prompt('Ingresá un lugar')
var userDays = prompt('Ingresá la cantidad de días')

var userHoliday = new Holiday(userCountry, userLocation, userDays)

console.log(
  'Vas a pasar tus vacaciones en ' +
    userCountry +
    ' en ' +
    userLocation +
    ' durante ' +
    userDays +
    ' días.'
)

console.log(userHoliday.getId()) */

// Math.random () se usa para generar números random para un ID

