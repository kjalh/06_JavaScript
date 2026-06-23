const todoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")
const remainingCount = document.getElementById("remainingCount")
const totoalCount = document.getElementById("totalCount")

// 상태를 메모리에만 저장(세로고침하면 사라짐)
const todos = []

function render(){
    todoList.innerHTML = ""
    
    // [{text:"아침식사", done = false}, ...]
    // {text: "아침식사", done = fasle}
    todos.forEach((todo, index) => {
        const li = document.createElement("li") // <li></li>
        if(todo.done) li.classList.add("done")  // <li class=done></li>
    })
}

function addTodo(){
    const text = todoInput.value.trim()
    if(!text) return

    todos.push({text, done: false}) // key가 text면서 변수도 text

    todoInput.value = ""
    todoInput.focus()
    
    // 화면 그리기

}

addBtn.addEventListener("click", addTodo)

todoInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter") addTodo()
})