
function levantarLista(key) {

  if (typeof key === 'string') {

    var bajarItem = localStorage.getItem(key)

  } if (bajarItem) {

    var parsedBajarItem = JSON.parse(bajarItem)

    return parsedBajarItem
  }else {

    return []
  }

}

var studentsList = levantarLista(studentsList)

if (studentsList) {

  console.log(studentsList)
}

// Adri, vi que en tu js del desafío pusiste lo siguiente:

/* if (studentsList.length) {
  console.log('Tiene guardados ' + studentsList.length + ' estudiantes')
} else {
  console.log('La lista esta vacía')
}
} else {
console.log('Le pase una key incorrecta')
} */


// En la consigna no dice que tenemos uqe mostrar en consola la cantidad de elementos que hay. Sólo dice que mostremos si hay elementos. Es necesario igual?

// Tampoco me quedó claro qué es lo que hay que validar y cómo. 