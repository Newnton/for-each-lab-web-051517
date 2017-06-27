function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  let array = ['captain corn', 'more corn', 'king of the corns', 'queen corn', 'captain corn']
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
  return array
}
