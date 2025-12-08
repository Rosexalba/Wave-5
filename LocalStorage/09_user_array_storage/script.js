// 🧠 Step 1: Use document.getElementById to select all relevant elements
// - Select the inputs for name and email using their ids: "nameInput" and "emailInput"
// - Select the button with id="addUserBtn"
// - Select the <ul> element with id="userList" to display the users
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const addUserBtn = document.getElementById("addUserBtn");
const userList = document.getElementById("userList");
// 💾 Step 2: Load users from localStorage
// - Check if there is a key "users" in localStorage
// - If yes, parse the string back into an array using JSON.parse
// - If not, start with an empty array
// Display the list immediately on load
const users = JSON.parse(localStorage.getItem("users")) || [];
displayUsers();
// 🧑‍💻 Step 3: Add new user when button is clicked
// - Create a new object with name and email values from the inputs
// - Push the object to the users array
// - Save the updated array to localStorage using JSON.stringify()
// - Clear the input fields and update the list on screen
addUserBtn.addEventListener("click", function() {
    const newUser = {
        name: nameInput.value,
        email: emailInput.value
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    nameInput.value = "";
    emailInput.value = "";
    displayUsers();
});
// 🖼️ Step 4: Display users on the screen
// - Clear the current list
// - Loop through the users array and create an <li> for each one
// - Add a remove ❌ button next to each user
// - When clicked, it removes the user from the array and updates localStorage
function displayUsers() {
    userList.innerHTML = "";
    users.forEach((user, index) => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email}) `;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.addEventListener("click", function() {
            users.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            displayUsers();
        });
        li.appendChild(removeBtn);
        userList.appendChild(li);
    });
};

// ✅ YOU’RE DONE!
// RECAP:
// 1) You selected elements from the DOM.
// 2) You loaded an array of users from localStorage.
// 3) You added functionality to add new users and save them.
// 4) You displayed the users and allowed removal of individual users.