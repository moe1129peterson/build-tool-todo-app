import _ from 'lodash';
import './style.css';
import Check from './todo-check.jpg';

const myCheck = new Image();
myCheck.src = Check;

document.getElementById('icon').appendChild(myCheck);

const todoContainer = document.getElementById('todos')
const enterTodo = document.querySelector('.todo'); 
const addTodoButton = document.querySelector('.addTodo')
const removeTodoButton = document.querySelector('.removeTodo')

addTodoButton.addEventListener('click', function(e){
    
    if(enterTodo.value.trim ()){
    
        const ulTag = document.createElement('ul')
        ulTag.classList.add('todo-card')
        
        const todoList = document.createElement('div')
        todoList.classList.add('todo-list')
        
        const liTag = document.createElement('li')
        liTag.innerHTML = enterTodo.value
        liTag.classList.add('todo-item')
        
        const buttonDiv = document.createElement('div')
        buttonDiv.classList.add('button')

        const completeButton = document.createElement('button')
        completeButton.classList.add('complete')
        completeButton.innerHTML = '<i class="completeTodo" aria-hidden="true">Complete</i>'
        
        const editButton = document.createElement('button')
        editButton.classList.add('edit')
        editButton.innerHTML = '<i class="editTodo" aria-hidden="true">Edit</i>'
        editButton.onclick = function(){
            editTodo(liTag)
        }
        
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerHTML = '<i class="deleteTodo" aria-hidden="true">Delete</i>'
        
        ulTag.appendChild(todoList)
        todoList.appendChild(liTag)
        todoList.appendChild(buttonDiv)
        buttonDiv.appendChild(completeButton)
        buttonDiv.appendChild(editButton)
        buttonDiv.appendChild(deleteButton)

        todoContainer.appendChild(ulTag)

        // function deleteTodo(){
        //     const deleteTodoFunction = document.getElementById('todo-item')
        //     deleteTodoFunction.remove
        // }


        todoList.addEventListener('click', function(e){
            const items = e.target;
            
            if(items.classList[0] === 'complete'){
                const todo_list = items.parentElement
                const todo2 = todo_list.parentElement
                todo2.classList.add('line_through') 
            }
            else if(items.classList[0] === 'delete'){
                const todo_list = items.parentElement
                const todo2 = todo_list.parentElement
                todo2.classList.add('fall') 
            }
            

        })

        enterTodo.value = ''

    }
    else if(items.value === ''){
        alert ('Please enter new todo')
    }

})
function editTodo(e){
    const editedTodo = prompt('Edit this todo', e.firstChild.nodeValue)
    e.firstChild.nodeValue = editedTodo
}
