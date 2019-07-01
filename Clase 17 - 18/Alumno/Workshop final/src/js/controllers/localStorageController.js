import { getLocalList, setLocalList } from '../utils/localStorage'
import translates from '../utils/translate'
import { searchPersonIndexById } from '../utils/search'

function localStorageController() {
  var lang = 'es'

  var localList = getLocalList('peopleList')

  var tableBody = $('#tableBody')

  for (var i = 0; i < localList.length; i++) {
    var person = localList[i]

    var id = person.url.split('/')[5]

    tableBody.append(
      '<tr><th scope="row">' +
        id +
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
        '</td><td><button id="' +
        id +
        '" type="button" class="btn btn-danger">Eliminar</button></td></tr>'
    )

    var deleteButton = $('.btn-danger')

    deleteButton.click(function() {
      var id = $(this).attr('id')
      var trNode = $(this)
        .parent()
        .parent()

      var index = searchPersonIndexById(id, localList)

      if (index !== -1) {
        localList.splice(index, 1)

        setLocalList('peopleList', localList)
      }

      trNode.hide(300, function() {
        trNode.remove()
      })
    })

    console.log(person)
  }
}

export default localStorageController
