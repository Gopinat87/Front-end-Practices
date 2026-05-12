const fruits = ["apple","banana","orange","mango","pineapple","grapes","strawberry","watermelon","papaya","guava","cherry","peach","pear","plum","kiwi","pomegranate","litchi","dragon fruit","blueberry","raspberry"];
// let entered_letter = document.getElementById('name').value


document.getElementById('name').addEventListener('keyup', function(){
    document.getElementById('result').innerHTML = ""

    let sf = document.getElementById('name').value

    let ff = fruits.filter( (items) =>{
        return items.includes(sf)
    })

    ff.forEach( items =>{
        document.getElementById('result').innerHTML += `<h6>${ff}</h6>`
    })
})