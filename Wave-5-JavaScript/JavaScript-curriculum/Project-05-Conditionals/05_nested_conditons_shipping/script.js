// GOAL: Practice nested if/else and logical operators (&&, ||) to compute a shipping cost.
//
// RULES (example logic):
// - Base cost by country:
//   US → 5, CA → 7, OTHER → 10
// - Add by weight:
//   If weight > 5kg add 10, else if weight > 1kg add 5, else add 0
// - Express shipping adds 15 if selected
//
// STEP 1: GET ELEMENTS
// - select#country, input#weight, select#isExpress, button#calcBtn, p#result

const selectCountry = document.getElementById ("country");
const inputWeight = document.getElementById ("weight");
const selectExpress = document.getElementById ("isExpress");
const buttonCalc = document.getElementById("calcBtn");
const p = document.getElementById("result");
//
// STEP 2: LISTEN FOR CLICK
// - Parse weight as Number; validate it.
// - Read isExpress selection ("yes"/"no") and country code.
buttonCalc.addEventListener("click", function() {
  const weight = Number(inputWeight.value);    // parse weight without Number() it would stay a string
  const country = selectCountry.value;
  const isExpress = selectExpress.value; // yes or no

  if (isNaN(weight) || weight <=0) {               // validate weight 
    p.textContent = " Please enter a valid weight.";
    return;                                   
  }


//
// STEP 3: START WITH baseCost BY COUNTRY (if / else if / else)
// - If country === "US" → baseCost = 5
// - Else if country === "CA" → baseCost = 7
// - Else → baseCost = 10
let totalCost;                            // sets base shipping cost depending on the country 
if (country === "US") {                   // === checks strict equality (type+value)
  totalCost = 5;                          // else catches all other countries not US OR CA
} else if (country === "CA") {
  totalCost = 7;
} else {
  totalCost = 10;
}

// STEP 4: ADD WEIGHT SURCHARGE (nested conditions)
// - If weight > 5 → add 10
// - Else if weight > 1 → add 5
// - Else → add 0
if (weight > 5) totalCost += 10;                              // adds weight surcharge 
else if (weight > 1 && weight <= 5) totalCost += 5;           // += means add this value to the current totalCost
else totalCost += 0; 

// STEP 5: EXPRESS OPTION
// - If isExpress === "yes" → add 15
if (isExpress === "yes") {                                  // if shippping was selected add $15 to the total
  totalCost += 15;
}
// STEP 6: DISPLAY TOTAL AS A NICE MESSAGE
p.textContent = `your shipping cost is $${totalCost}.`; 
});




















