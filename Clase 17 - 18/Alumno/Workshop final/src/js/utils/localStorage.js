/**
 * @param {string} key
 * @returns {Array}
 */

function getLocalList(key) {
  if (typeof key === 'string') {
    var localList = localStorage.getItem(key)
    if (localList) {
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      return []
    }
  }
}

/**
 * @param {string} key
 * @param {Array} list
 */
function setLocalList(key, list) {
  if (typeof key === 'string' && Array.isArray(list)) {
    var strList = JSON.stringify(list)
    localStorage.setItem(key, strList)
  }
}

export { getLocalList, setLocalList }
