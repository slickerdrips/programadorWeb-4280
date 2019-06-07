import { getLocalList } from '../utils/localStroagejs'

function localStorageController() {
  var localList = getLocalList('peopleList')
  console.log('controler LS', localList)

  Var person

  for (var i=0; i<localList.length; i++)
  var person = localList[i]
  console.log(person)


}

export default localStorageController
