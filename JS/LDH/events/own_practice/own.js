document.getElementById('btn3').addEventListener('click', function(){
    document.getElementById('para3').innerHTML="Para 3 is successfully changede"
})

document.getElementById('namejoin').addEventListener('click' , function() {
    let firstname = document.getElementById('firstname').value
    let lastname =  document.getElementById('lastname').value
    document.getElementById('joined').innerHTML = ` Hi ${firstname}${lastname}`
})

document.getElementById('lap').addEventListener('click', function(){
    document.getElementById('result').innerHTML = ''

    let total_lap = parseInt(document.getElementById('year').value)
    let current_lap = 1

    while (current_lap <= total_lap) {
        document.getElementById('result').innerHTML += `<h4>You are completed ${current_lap} of academic year </h4>`
        current_lap++
        if (total_lap == 4) {
            Document.getElementById('result').innerHTML = 'You are completed the Gradute '
        }
    }
})