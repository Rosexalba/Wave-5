// 🧠 STEP 1: SELECT THE CHECKBOX ELEMENT
// Use document.getElementById() to select the checkbox (id="subscribeCheckbox").
     const checkbox = document.getElementById("subscribeCheckbox");
     const statusText = document.getElementById("statusText");
     const resetBtn = document.getElementById("resetBtn");
// 💾 STEP 2: LOAD CHECKED STATE FROM localStorage
// Use localStorage.getItem("isSubscribed") to see if it was saved as "true" or "false".
// If "true", set checkbox.checked = true.

      const savedState = localStorage.getItem("isSubscribed");
      if(savedState === "ture") {
        checkbox.checked = true;
        checkbox.setAttribute("aria-checked", "true");
        statusText.textContent = "Subscribed"; 
      } else { 
        checkbox.checked = false;
        checkbox.setAttribute("aria-checked", "false");
        statusText.textContent = "Not Subscribed";
      }

// 🎯 STEP 3: SAVE CHECKED STATE WHEN USER TOGGLES THE BOX
// Add a "change" event listener to the checkbox.
// Inside the listener:
// - Get the current checkbox state (true or false)
// - Save it using localStorage.setItem("isSubscribed", value)

  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.checked;

    localStorage.setItem("isSubscribed", isChecked);

    statusText.textContent = isChecked ? "Subscribed" : "Not Subscribed"

    checkbox.setAttribute("aria-checked", isChecked);
  });
  
  resetBtn.addEventListener("click", () => {
  localStorage.removeItem("isSubscribed");
  checkbox.checked = false;
  checkbox.setAttribute("aria-checked", "false");
  statusText.textContent = "Not subscribed";
});