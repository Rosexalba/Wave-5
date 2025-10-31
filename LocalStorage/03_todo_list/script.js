// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Select the input where users type their todo (id="todoInput")
// Select the button to add the todo (id="addBtn")
// Select the unordered list where todos will appear (id="todoList")
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// 💾 STEP 2: LOAD TODOS FROM LOCALSTORAGE
// Try to get the key "todos" from localStorage
// If it exists, parse the JSON string into an array
// If it doesn’t exist, start with an empty array
// Display any saved todos
let todos = JSON.parse(localStorage.getItem("todos")) || [];  //  JSON 

function renderTodos() {          //function to render list 
  todoList.innerHTML = "";   // clear list 

  todos.forEach((todo, index) => {           // loop through each todo and create list item
    const li = document.createElement("li");  // append child?
    li.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.style.marginLeft = "10px"  // spacing

    deleteBtn.addEventListener("click", () => { 
      todo.splice(index,1);     // remove the todo from the array

      localStorage.setItem("todos", JSON.stringify(todos));

      renderTodos();   // re - render
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
// 🎯 STEP 3: ADD A TODO
// When the user types something and clicks the button:
// - create a new todo string
// - add it to the todos array
// - save the updated array to localStorage
// - update the page and clear the input

renderTodos();

addBtn.addEventListener("click", () => {
  const newTodo = todoInput.value.trim();
  if (!newTodo) {                           // NOT new todo
    alert ("Please enter a todo!");
    return;
  }

  todos.push(newTodo);  // add the new todo to the array
  localStorage.setItem("todos", JSON.stringify(todos)); // save to local storage 
  //JSON.stringify converts objects and arrays into strings because its the way local storage stores/recieves items
  //JSON.parse is what turns the string back into a usable object or array // used for code functionality 
  //JSON is the standard for sending data between a server and browswer (APIs)
  // APIs : A MESSENGER BETWEEN TWO PROGRAMS : lets programs talk to each other without knowing how the other works internally
  // SOOO JSON format is usually  the web APIs that is used to send/recieve data 
  renderTodos();            // update
  todoInput.value = "";    // clear input 

});

// 🔄 STEP 4: RENDER TODOS
// - Clear the list
// - Loop through todos and create a <li> for each
// - Add a ❌ button to delete the todo


// you can checkk your local stroage in the application section in your console (: