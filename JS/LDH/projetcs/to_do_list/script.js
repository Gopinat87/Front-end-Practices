// User can create a task
// User can Delete a task
// User can Search a task
// User can update a task as complte and undo


let tasks = []
let result = document.getElementById('result')

function rendertasks(){
    // reset  result element
    result.innerHTML = ''

    // append all values in result
    tasks.forEach( (item,index) => {
        result.innerHTML += ` <div> 
                    <h2>${item}</h2> 
                    <button onclick = "deletetask(${index})">Delete</button>
                    </div>`
                    
    })
}


document.getElementById('btn').addEventListener('click',()=>{

    // get input value
    let value = document.getElementById('input').value
    

    // push value into array
    tasks.push(value)
    rendertasks()
})
    
function deletetask(index){
    tasks.splice(index,1)
    rendertasks()

}
