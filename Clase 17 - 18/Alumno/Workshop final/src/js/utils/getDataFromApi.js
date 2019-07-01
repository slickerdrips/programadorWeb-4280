function getData(url, cbk) {
  $.ajax(url)
    .done(function(data) {
      cbk(null, data)
    })
    .fail(function(error) {
      cbk(error)
    })
}

function postData(url, data, cbk) {
  $.ajax({
    url: url,
    method: 'POST',
    data: data
  })
    .done(function(data) {
      cbk(null, data)
    })
    .fail(function(error) {
      cbk(error)
    })
}

/**
 * @param {Object} error
 * @param {Object} data
 */

function getAllList(error, data) {
  if (data.results) {
    var results = data.results
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].name)
    }
  }
  if (data.next) {
    getData(data.next, getAllList)
  }
}

export { getData, postData, getAllList }
