let fruits = ["banana","orange","potato","apple"]

// fruits.forEach(function(fruit){
//     debugger
//     document.getElementById('result').innerHTML += `<h1>${fruit}</h1>`
// })

fruits.forEach( fruit => {
    document.getElementById('result').innerHTML += `<h1>${fruit}</h1>`
}
 )