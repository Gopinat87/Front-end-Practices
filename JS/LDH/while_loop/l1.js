document.getElementById('btn').addEventListener('click' , function(){
    document.getElementById('result').innerHTML = ''

    let totallap = parseInt(document.getElementById('input').value)
    let currentlap = 1 

    while (currentlap <= totallap) {
        document.getElementById('result').innerHTML += `<h2>Lap ${currentlap} is completed </h2>`     
        currentlap++
    }


})

