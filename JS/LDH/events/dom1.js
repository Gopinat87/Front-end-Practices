function text_change3(){
    document.getElementById("para3").innerHTML = "param 3 changed"
}

function clicked(){
document.getElementById("click").innerHTML = "H5 paragraph changed"
}

document.getElementById("click1").addEventListener('click', function()
{
    clicked()
})

