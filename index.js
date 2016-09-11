function iterate(callback) {
  var arr = ["pied piper", "hooli", "aviado"]
  arr.forEach(callback)
  return arr
}

function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function doToArray(array, callback) {
  array.forEach(callback)
}
