// GOAL: Use the ternary operator to show "Adult" or "Minor" based on age.
//
// STEP 1: GET ELEMENTS
// - input#ageInput, button#checkBtn, p#result

const input = document.getElementById("ageInput");
const button = document.getElementById("checkBtn");
const p = document.getElementById("result");

//
// STEP 2: ADD CLICK LISTENER
// - Convert input value to Number.
// - Validate (Number.isNaN). If invalid, show a helpful message and stop.
button.addEventListener("click", () => {
    let age = input.valueAsNumber;

    // validate input
    let message = Number.isNaN(age) ? "Please provide a valid input" : "";
    if(message) {
        p.textContent = message;
        return;
    }
     
    // ternary check 
    let label =(age >= 18) ? "Adult" : "Minor";
    result.textContent = label;

});

//
// STEP 3: TERNARY
// - Create a variable called label:
//   label = (age >= 18) ? "Adult" : "Minor"
//
// STEP 4: DISPLAY label IN result.textContent



























