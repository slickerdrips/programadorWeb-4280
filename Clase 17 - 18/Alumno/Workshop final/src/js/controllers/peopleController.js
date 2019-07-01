import { getData, getAllList } from '../utils/getDataFromApi'
import { getLocalList, setLocalList } from '../utils/localStorage'
import translates from '../utils/translate'
import { searchPersonIndexById, searchIndexByUrl } from '../utils/search'

function peopleController() {
  var tableBody = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  var apiList = []

  var peopleLocalList = getLocalList('peopleList')

  var startUrl = 'https://swapi.co/api/people/'

  loadPeople(startUrl)

  function loadPeople(url) {
    getData(url, function(error, data) {
      if (data.results) {
        appendPeople(data.results)
        apiList = apiList.concat(data.results)
      }

      if (!error && data) {
        seeMoreButton.one('click', function() {
          loadPeople(data.next)
        })
      } else if (data.next === 'null') {
        seeMoreButton.remove()
      }
    })
  }

  function appendPeople(peopleList) {
    var lang = 'es'
    var person

    for (var i = 0; i < peopleList.length; i++) {
      person = peopleList[i]

      var personUrl = person.url

      var localIndex = searchIndexByUrl(personUrl, peopleLocalList)

      var peopleId = personUrl.split('/')[5]

      var addButton

      if (localIndex === -1) {
        addButton =
          '<button id="button' +
          peopleId +
          '" type="button" class="btn btn-success">Guardar</button>'
      } else {
        addButton = ''
      }

      tableBody.append(
        '<tr id="' +
          peopleId +
          '"><th scope="row" >' +
          peopleId +
          '</th><td>' +
          person.name +
          '</td><td>' +
          translates[lang]['gender'][person.gender] +
          '</td><td>' +
          person.height +
          ' cm</td><td>' +
          person.mass +
          ' kg</td><td>' +
          translates[lang]['eyeColor'][person.eye_color] +
          '</td><td>' +
          addButton +
          '</td></tr>'
      )

      $('#button' + peopleId).click(function() {
        var button = $(this)

        var buttonId = button.attr('id')

        var id = buttonId.replace('button', '')

        var newUrl = 'https://swapi.co/api/people/' + id + '/'

        var index = searchIndexByUrl(newUrl, apiList)

        if (index !== -1) {
          var personInfo = apiList[index]

          peopleLocalList.push(personInfo)

          setLocalList('peopleList', peopleLocalList)

          button.remove()
        }
      })
    }
  }
}

export default peopleController
