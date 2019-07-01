/**
 * @param {string} text
 * @param {Array} studentsList
 * @returns {number}
 */

function searchPersonIndexById(id, peopleList) {
  var index = -1
  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]
    var personId = person.url.split('/')[5]
    if (personId === id) {
      index = i
      break
    }
  }
  return index
}

function searchIndexByUrl(url, peopleList) {
  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]
    if (url === person.url) {
      return i
    }
  }

  return -1
}

export { searchPersonIndexById, searchIndexByUrl }
