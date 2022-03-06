var todoContainer = document.getElementById('todos')
var enterTodo = document.querySelector('.todo'); 
var addTodoButton = document.querySelector('.addTodo')
var removeTodoButton = document.querySelector('.removeTodo')

addTodoButton.addEventListener('click', function(e){
    
    if(enterTodo.value.trim ()){
    
        var ulTag = document.createElement('ul')
        ulTag.classList.add('todo-card')
        
        var todoList = document.createElement('div')
        todoList.classList.add('todo-list')
        
        var liTag = document.createElement('li')
        liTag.innerHTML = enterTodo.value
        liTag.classList.add('todo-item')
        
        var buttonDiv = document.createElement('div')
        buttonDiv.classList.add('button')

        var completeButton = document.createElement('button')
        completeButton.classList.add('complete')
        completeButton.innerHTML = '<i class="completeTodo">Complete</i>'
        
        var editButton = document.createElement('button')
        editButton.classList.add('edit')
        editButton.innerHTML = '<i class="editTodo">Edit</i>'
        
        var deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.innerHTML = '<i class="deleteTodo">Delete</i>'
        
        ulTag.appendChild(todoList)
        todoList.appendChild(liTag)
        todoList.appendChild(buttonDiv)
        buttonDiv.appendChild(completeButton)
        buttonDiv.appendChild(editButton)
        buttonDiv.appendChild(deleteButton)

        todoContainer.appendChild(ulTag)

        todoList.addEventListener('click', function(e){
            var items = e.target;
            
            if(items.classList[0] === 'complete'){
                var todo = items.parentElement
                var todo_2 = todo.parentElement
                todo_2.classList.add('cross') 
            }
            else if(items.classList[0] === 'delete'){
                var todo = items.parentElement
                var todo_2 = todo.parentElement
                todo_2.classList.add('fall') 
            }

        })

        enterTodo.value = ''

    


    }

})
