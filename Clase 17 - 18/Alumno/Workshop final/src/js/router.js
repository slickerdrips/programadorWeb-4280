import crossroads from 'crossroads'
import contactControler from './controlers/contactControler'

function router() {
  crossroads.addRoute('', function() {
    console.log('Home page')
    $('#root').load('./partials/home.html', function() {
      console.log('Se cargo la home')
    })
  })

  crossroads.addRoute('#/contact', function() {
    console.log('Contact page')
    $('#root').load('./partials/contact.html', contactControler)
  })

  crossroads.addRoute('#/people', function() {
    console.log('People page')
    $('#root').load('./partials/people.html', function() {
      console.log('Se cargo la people page')
    })
  })

  crossroads.addRoute('#/local-storage', function() {
    console.log('LS page')
    $('#root').load('./partials/local-storage.html', function() {
      console.log('Se cargo el local storage')
    })
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function() {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
