document.getElementById('submit').addEventListener('click' , function(){
let firstname = document.getElementById('firstname').value
let lastname = document.getElementById('lastname').value
document.getElementById('result').innerHTML = `Hello ${firstname} ${lastname}`
})