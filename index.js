const btnAdd = document.querySelector('.btn');
const form = document.querySelector('.form');
const input = document.querySelector('.input-todo');
const ul = document.querySelector('.todo-list');
const todos = [
    // {
    //     job: "Lau nhà"
    // },
    // {
    //     job: "Làm bài tập"
    // },

];

todos.forEach((todo) => addTodo(todo))

const todoList = document.querySelector('.todo-list');
let newJob;
function addTodo(todo){
    const li = document.createElement("li");
    li.classList.add('todo-item')
    li.setAttribute('id', todo.id)
    li.innerHTML = `
        <span class ="job">${todo.job}</span>
        <i class="icon fa-solid fa-trash"></i>
    `
    
    li.addEventListener('click', function(){
        this.classList.toggle('complete')
    })

    li.querySelector('i').addEventListener('click', function(){
        li.classList.toggle('remove')
        // console.log(this)
    })


    ul.appendChild(li)
    
}

form.addEventListener('submit', function(e){
    e.preventDefault()
    newJob = input.value;
    addTodo({id: Math.trunc(Math.random() * 100),job: newJob})
    input.value = ''
    
})


