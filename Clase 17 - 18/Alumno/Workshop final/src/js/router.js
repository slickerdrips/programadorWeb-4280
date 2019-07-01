import crossroads from 'crossroads'
import contactController from './controllers/contactController'
import localStorageController from './controllers/localStorageController'
import getApiList from './controllers/peopleController'
import peopleController from './controllers/peopleController'

function router() {
  crossroads.addRoute('', function() {
    console.log('Home page')

    $('#root').load('./partials/home.html', function() {
      console.log('Se cargo la home')
    })
  })

  crossroads.addRoute('#/people', function() {
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('#/local-storage', function() {
    $('#root').load('./partials/local-storage.html', localStorageController)
  })

  crossroads.addRoute('#/contact', function() {
    $('#root').load('./partials/contact.html', contactController)
  })

  $(window).on('hashchange', function() {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
