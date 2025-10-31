// 🧠 STEP 1: SELECT THE BUTTON AND BODY
// Use document.getElementById() to select the button with id="toggleThemeBtn"
// We also select the <body> element so we can add/remove a CSS class for dark mode
   const toggleTheme = document.getElementById("toggleThemeBtn")
   const body = document.body;
// 💾 STEP 2: LOAD SAVED THEME ON PAGE LOAD
// Check localStorage for the key "theme"
// If the value is "dark", we add a class of "dark" to the body to enable dark mode
   window.addEventListener("DOMContentLoaded", () => { // Checks that HTML is fully loaded before manipulating
    const savedTheme = localStorage.getItem("theme"); // "theme" key name .. getItem gets the key value which is "theme"
    if (savedTheme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark"); //  ensures light mode by default 
    }
   });
// 🎯 STEP 3: TOGGLE THE THEME WHEN THE BUTTON IS CLICKED
// When the user clicks the button:
// - toggle the "dark" class on the body
// - save the current theme in localStorage as "dark" or "light"
toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");    // toggle dark mode on/off

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});