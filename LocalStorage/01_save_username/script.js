// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Use document.getElementById() to select:
// - the text input where the user types their name (id="nameInput")
// - the button the user clicks to save their name (id="saveBtn")
// - the element where we will display the saved name (id="userDisplay")
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const userDisplay = document.getElementById("userDisplay");
const msg = document.getElementById("msg");
// 💾 STEP 2: LOAD SAVED NAME ON PAGE LOAD
// When the page loads, we check if there's a saved name in localStorage using getItem()
// If there is a name, we update the display element's textContent to show that name
const savedName = localStorage.getItem("username");   // load saved name on page load
if (savedName) {
  userDisplay.textContent = savedName;                        
  msg.textContent = `Hi again, ${savedName}`;
}



// 🎯 STEP 3: ADD A CLICK EVENT TO THE BUTTON
// When the user clicks the button:
// - we get the value they typed in the input
// - we save that value to localStorage with the key "username"
// - we update the display on the page with the name
saveBtn.addEventListener("click", () => {     // save name and update display on button click
  const value = nameInput.value.trim();      // cleans up space

  if(!value) {                               // NOT value
    alert("Please enter a name!");
    return;
  }

  localStorage.setItem("username", value);    // save to local storage "value" gets the name 

  userDisplay.textContent = value;     // update display
  msg.textContent = `Hi again, ${value}`;

  nameInput.value = "";              // clear input
});


