const date = document.querySelector('.date');
var luni = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var data = new Date();
date.innerHTML = `${data.getDate()} ${luni[data.getMonth()]} ${data.getFullYear()}`;


var todoInput = document.querySelector('.todo-input');
var todoBtn = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var todoFilter = document.querySelector('.filter');

    document.addEventListener('DOMContentLoaded',getTodos); //DUPA CE S-A INCARCAT SITE-UL IMI APAR AUTOMAT ELEMENTELE BAGATE INAINTE(daca sunt elemente bagate)
    todoBtn.addEventListener("click",function(){
        if(todoInput.value !== "")
        addTodo();
    });
    document.addEventListener('keydown',function(e){
        if(e.keyCode === 13 && todoInput.value !== "")
        addTodo();
    });
    todoFilter.addEventListener('click',filterTodo);





function addTodo(){
        var todoDiv = document.createElement('div');
        todoDiv.classList.add('todoDiv');
    
        var newTodo = document.createElement('li');
        newTodo.innerHTML = todoInput.value;
        newTodo.classList.add('newTodo');
    
        todoDiv.appendChild(newTodo);
        saveTodos(todoInput.value); //SALVEZ IN MEMORIE ELEMETUL 
    
        var completButton = document.createElement('button');
        completButton.innerHTML = '<span class="material-icons">check_circle_outline</span>';
        completButton.classList.add('completButton');
        todoDiv.appendChild(completButton);
    
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<span class="material-icons">delete</span>';
        deleteButton.classList.add('deleteButton');
        todoDiv.appendChild(deleteButton);
    
        todoList.appendChild(todoDiv);
    
        todoInput.value = "";
    
    
        completButton.addEventListener('click',function(){
            todoDiv.classList.toggle('completButton-press');
        });
        
    

        deleteButton.addEventListener('click',function(){
            todoDiv.classList.add('animatie');
            removeLocalTodos(todoDiv); //CAND DAU CLICK PT A STERGE SE STERGE SI DIN MEMORIE

            todoDiv.addEventListener('transitionend',function(){ //functia asta se executa doar dupa ce s-a executat cea dinainte, ex:se elimina din lista doar dupa ce s-a terminat animatia
                todoDiv.remove();
            });
        });
    
}


function filterTodo(e){

    const todos = todoList.childNodes;

    todos.forEach((todo) => {

        switch (e.target.value) {
          case "all":
            todo.style.display = "flex";
            break;
          case "completed":
            if (todo.classList.contains("completButton-press")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
            case "uncompleted":
                if (!todo.classList.contains("completButton-press")) {
                  todo.style.display = "flex";
                } else {
                  todo.style.display = "none";
                }
        }
    });
}

//LOCAL STORAGE


function saveTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }   //VERIFICARE DACA AVEM ITEME DEJA IN LOCAL STORAGE, DACA NU AVEM CREEM UN VECTOR UNDE SA LE STOCAM, DACA AVEM DEJA IL ADAUGAM 

  todos.push(todo);
  localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  //LE PARCURGEM TOATE ELEMENTELE SALVATE DEJA IN LOCAL STORAGE SI LE AFISAM, DAND COPY PASTE LA CODUL DE DINAINTE, MODIFICAND DOAR newTodo.innerHTML = parametru (adica elementul stocat) 
  todos.forEach(function(todo){
    var todoDiv = document.createElement('div');
        todoDiv.classList.add('todoDiv');
    
        var newTodo = document.createElement('li');
        newTodo.innerHTML = todo;
        newTodo.classList.add('newTodo');
    
        todoDiv.appendChild(newTodo);
    
        var completButton = document.createElement('button');
        completButton.innerHTML = '<span class="material-icons">check_circle_outline</span>';
        completButton.classList.add('completButton');
        todoDiv.appendChild(completButton);
    
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<span class="material-icons">delete</span>';
        deleteButton.classList.add('deleteButton');
        todoDiv.appendChild(deleteButton);
    
        todoList.appendChild(todoDiv);


        completButton.addEventListener('click',function(){
          todoDiv.classList.toggle('completButton-press');
      });
      
  

      deleteButton.addEventListener('click',function(){
          todoDiv.classList.add('animatie');
          removeLocalTodos(todoDiv); //CAND DAU CLICK PT A STERGE SE STERGE SI DIN MEMORIE
          todoDiv.addEventListener('transitionend',function(){ //functia asta se executa doar dupa ce s-a executat cea dinainte, ex:se elimina din lista doar dupa ce s-a terminat animatia
            todoDiv.remove();
          });
      });
  });
}


function removeLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const todoIndex = todo.children[0].innerText;  //STERG DIN LOCAL STORAGE ELEMENTUL SELECTAT
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem('todos',JSON.stringify(todos));
}