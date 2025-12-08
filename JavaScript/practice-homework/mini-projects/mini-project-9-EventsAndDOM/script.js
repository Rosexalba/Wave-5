// Goal: Practice Events & DOM by wiring up interactions in a small app.

// -----------------------------------------------------------------------
// STEP A — SELECT ELEMENTS
// - Select by id: btnIncrement, countValue
// - Select by id: btnTheme
// - Select by id: taskInput, prioritySelect, priorityLabel, btnAdd, taskList
// - Select by id: demoForm, nameInput, formMsg
// - Select by id: hoverCard
const btnIncrement = document.getElementById("btnIncrement");
const countValue = document.getElementById("countValue");

const btnTheme = document.getElementById("btnTheme");

const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const priorityLabel = document.getElementById("priorityLabel");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");

const demoForm = document.getElementById("demoForm");
const nameInput = document.getElementById("nameInput");
const formMsg = document.getElementById("formMsg");

const hoverCard = document.getElementById("hoverCard")


// -----------------------------------------------------------------------
// STEP B — CLICK: COUNTERb
// - Add a click listener to btnIncrement
// - Read current number from countValue (parseInt)
// - Increase by 1 and put it back (textContent)
btnIncrement.addEventListener("click", () => {
    let current = parseInt(countValue.textContent, 10);
    countValue.textContent = current + 1;
});
// -----------------------------------------------------------------------
// STEP C — THEME TOGGLE
// - Add a click listener to btnTheme
// - Toggle the "dark" class on <body> using classList.toggle
btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

// -----------------------------------------------------------------------
// STEP D — INPUT + CHANGE + ENTER KEY
// - Add an input listener to taskInput (optional: show live length/preview)
// - Add a change listener to prioritySelect to update priorityLabel to "Priority: X"
// - Add a keydown listener to taskInput that checks if key === "Enter"; if so, call addTask()
     taskInput.addEventListener("input", () => {
        btnAdd.disabled = taskInput.value.trim() === ""; // I - Bonus Step : diable add button
     });

     prioritySelect.addEventListener("change", () => {
        priorityLabel.textContent = `Priority: ${prioritySelect.value}`;
     });
      
     taskInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.ctrlKey) {
            e.preventDefault();
            prioritySelect.value = "High";
            priorityLabel.textContent = `Priority: ${prioritySelect.value}`
            addTask();
        } else if (e.key === "Enter") {
            e.preventDefault();
            addTask();
        }
     });

     btnAdd.addEventListener("click",addTask);

// -----------------------------------------------------------------------
// STEP E — CREATE TASK ELEMENTS
// - Write a function addTask() that:
//   * Reads values from taskInput and prioritySelect
//   * Creates a new <li>, sets text to the task
//   * Creates a <span class="badge"> for the priority and appends it
//   * Creates a <button> "Delete" with a data-action="delete"
//   * Appends <li> to taskList
//   * Clears taskInput and focuses it again
function addTask() {
    const taskText = taskInput.value.trim();
    if(!taskText) return; 

    const priority = prioritySelect.value;

    const li = document.createElement("li");
    li.textContent = taskText + " ";

    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = priority;
    li.appendChild(span);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.dataset.action = "delete";
    li.appendChild(delBtn);

    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";
    taskInput.focus();
    btnAdd.disabled = true;
}
// -----------------------------------------------------------------------
// STEP F — EVENT DELEGATION FOR DELETE
// - Add one click listener to taskList (the <ul>)
// - Inside, check if event.target has data-action="delete"
// - If yes, remove the parent <li>
taskList.addEventListener("click", (e) => {
    if (e.target.dataset.action === "delete") {
        const li = e.target.parentElement;
        li.remove();
        saveTasks();
    }
});
// -----------------------------------------------------------------------
// STEP G — FORM SUBMIT (PREVENT DEFAULT)
// - Add submit listener to demoForm
// - Use event.preventDefault() to stop page reload
// - Build a friendly text using nameInput.value and show it in formMsg
// - Optionally clear the input
demoForm.addEventListener("submit", (e) => {
     e.preventDefault();
     const name = nameInput.value.trim();
     if (!name) return;
     formMsg.textContent = `Hello, ${name}! Thanks for submitting.`;
     nameInput.value = "";
});
// -----------------------------------------------------------------------
// STEP H — MOUSEOVER / MOUSEOUT
// - Add mouseover listener to hoverCard to add class "highlight"
// - Add mouseout listener to remove class "highlight"
 hoverCard.addEventListener("mouseover", () => {
    hoverCard.classList.add("highlight");
 });

 hoverCard.addEventListener("mouseout", () => {
    hoverCard.classList.remove("highlight");
 });
// -----------------------------------------------------------------------
// STEP I — BONUS IDEAS
// - Disable Add button when input is empty (use .disabled = true/false) x
// - Pressing Ctrl+Enter adds a task with "High" priority automatically x

// - Persist tasks to localStorage and load them on page load

// I - LOCAL STORAGE BONUS STEP - loads on to page

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent.trim(),
            priority: li.querySelector(".badge").textContent
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    saved.forEach(task => {
        taskInput.value = task.text;
        prioritySelect.value = task.priority;
        addTask();
    });
}

window.addEventListener("beforeunload", saveTasks);
window.addEventListener("DOMContentLoaded" , loadTasks);




console.log(prioritySelect);
console.log(prioritySelect.value);