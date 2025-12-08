// 🧠 STEP 1: LOAD SAVED VISIT COUNT FROM localStorage
// Use localStorage.getItem("visitCount") to get the saved value.
// If no value exists (null), default to 0 using a ternary operator.
let visitCount = localStorage.getItem("visits");

visitCount = visitCount ? parseInt(visitCount) : 0; // if/else if visitCount has a value conert it to a number else (otherwise) set it to 0.

visitCount++; // incrementing the count 

localStorage.setItem("visits",visitCount); // storing the updated count

let renderDisplay = document.getElementById("visitDisplay"); // storing in a variable let jaba change the text inside the element 
renderDisplay.textContent = `THis website has been visited ${visitCount}`; // .textcontent changes the inside text of the html element
                                                                         // using template literal allowing us to insert variable directly
                                                                        // ${} insterts the nunber you stored from local storage




// 🔢 STEP 2: INCREMENT THE COUNT
// Add 1 to the count to track the current visit.

// 💾 STEP 3: SAVE THE NEW COUNT BACK TO localStorage
// Use localStorage.setItem() to store the updated visit count.

// 🖥️ STEP 4: DISPLAY THE VISIT COUNT
// Use document.getElementById() to select the element that will show the count (id="visitDisplay").
// Update its textContent to tell the user how many times they’ve visited.