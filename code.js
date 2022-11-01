let todosOsTimes = []
let exe
let exe2

exe = localStorage.getItem('todosOsTimes')
console.log(exe)

exe2 = JSON.parse(exe)
console.log(exe2)
if(exe2 === null){

}else{
    todosOsTimes = [...exe2]
}
function adicionarHTML() {
    let local = document.getElementById('localTime')
    console.log(local)
    todosOsTimes.forEach( x => local.innerHTML += `<span>${x}</span><br>`)
    console.log(todosOsTimes)
    if(todosOsTimes.length == 0){
        local.innerHTML = 'Vazio'
    }
}
console.log(todosOsTimes)


let adicionarTime = () =>{
   
    location.reload()
   console.log(exe2)
    
    if(todosOsTimes[0] == ''){
        todosOsTimes.shift()
    }
    let nomeTime = document.getElementById('nomeTime').value
    if(nomeTime == ''){
        alert('O campo está vazio!')
    }else{
        todosOsTimes.push(nomeTime)
    }
    
    
    if(todosOsTimes[0] == ''){
        todosOsTimes.shift()
    }
    localStorage.setItem('todosOsTimes', JSON.stringify(todosOsTimes))
    
}
function limpar(){
    todosOsTimes = []
    console.log(todosOsTimes)
    localStorage.setItem('todosOsTimes', JSON.stringify(todosOsTimes))
    location.reload()
}