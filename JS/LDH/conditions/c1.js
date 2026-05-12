document.getElementById('submit').addEventListener('click', function(){
    firstname = document.getElementById('firstname').value
    lastname = document.getElementById('lastname').value

    if (firstname === '' || lastname ==='') {
    document.getElementById('result').innerHTML = "Please enter all inputs..."
    }
    else{
    document.getElementById('result').innerHTML = `Hi ${firstname} ${lastname}`
    }
})
