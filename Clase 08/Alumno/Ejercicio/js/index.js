var mainList = document.getElementById('mainList')

var eds = ['Ed', 'Edd', 'Eddy']

for (var i = 0; i < eds.length; i++) {
  var eds1 = eds[i]

  var li = document.createElement('li')

  li.innerHTML = eds1
  li.className = 'list-group-item'

  mainList.appendChild(li)
}
