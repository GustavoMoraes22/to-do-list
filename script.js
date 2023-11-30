const inputInfo = document.querySelector('#input-Info')
const button = document.querySelector('button')
const fullList = document.querySelector('ul')


let listItens = []

function addlistInfo() {


    if (inputInfo.value == 0) {

        alert('ERRO!! Digite uma tarefa')

    } else {
        listItens.push({
            tarefa: inputInfo.value,
            concluida: false
        })
    }


    inputInfo.value = ''

    showTasks()

}

function showTasks() {

    let newLi = ''


    listItens.forEach((task, index) => {

        newLi = newLi + `<li class="${task.concluida && "done"}"><img src="./assets/checked.png" onclick=
        concludeTask(${index})></img>${task.tarefa}<img src="./assets/trash.png" onclick="deleteItem(${index})"></img></li>`

    })

    fullList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(listItens))

}

function concludeTask(index) {
    listItens[index].concluida = !listItens[index].concluida

    showTasks()
}


function deleteItem(index) {

    listItens.splice(index, 1)

    showTasks()

}

function rechargeItems() {
    const rechargeLocalStorege = localStorage.getItem('list')

    if (rechargeLocalStorege) {
        listItens = JSON.parse(rechargeLocalStorege)
    }

    showTasks()
}

rechargeItems()
button.addEventListener('click', addlistInfo)