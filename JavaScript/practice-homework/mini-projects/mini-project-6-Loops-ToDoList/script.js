// ===================== MENTEE — INSTRUCTIONAL STEPS =====================
// Goal: Practice different types of loops by generating a to-do list.

// STEP 1 — Create an array with 5 tasks (strings).
            const tasks = ["code","cook","work on Business", "workout","study"];
// STEP 2 — Select button (#btnGenerate), ul (#taskList), and p (#taskCount).
            const button = document.getElementById("btnGenerate");
            const ul = document.getElementById("taskList");
            const p = document.getElementById("taskCount");
// STEP 3 — Add click event listener to button.
            button.addEventListener("click", () => {

            ul.innerHTML = "";       // clear all list items 
             // for loop:
            for(let i = 0; i < tasks.length; i++) {
                const li = document.createElement("li");
                li.textContent = `for: ${tasks[i]}`;  
                ul.appendChild(li);    
            }
            // while loop:
            let i = 0;
            while(i < tasks.length) {
                const li = document.createElement("li");
                li.textContent = `while: ${tasks[i]}`;
                ul.appendChild(li);
                i++;
            }
            // for ..of loop:
            for(const task of tasks) {
                const li = document.createElement("li");
                li.textContent = `for... of: ${task}`;
                ul.appendChild(li);
            }
            // forEach 
            tasks.forEach(task => {
                const li = document.createElement("li");
                li.textContent = `forEach: ${task}`;
                ul.appendChild(li); 
            });

        

// STEP 4 — Inside the event:
//   - Clear the list.
//   - Use a for loop to add tasks with prefix "(for)".
//   - Use a while loop to add tasks with prefix "(while)".
//   - Use for...of to add tasks with prefix "(for...of)".
//   - Use forEach to add tasks with prefix "(forEach)".
// STEP 5 — Show total task count in #taskCount.
             p.textContent = `Total Tasks: ${ul.children.length}`;
            });


            // for of & forEach: has no direct access to the index  
            // forEach is good for applyinh function to each array element runs callback on each item
            // for of is good for iterating over array values directly 