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

//
// STEP 2: LISTEN FOR CLICK
// - Parse weight as Number; validate it.
// - Read isExpress selection ("yes"/"no") and country code.

//
// STEP 3: START WITH baseCost BY COUNTRY (if / else if / else)
// - If country === "US" → baseCost = 5
// - Else if country === "CA" → baseCost = 7
// - Else → baseCost = 10
//
// STEP 4: ADD WEIGHT SURCHARGE (nested conditions)
// - If weight > 5 → add 10
// - Else if weight > 1 → add 5
// - Else → add 0
//
// STEP 5: EXPRESS OPTION
// - If isExpress === "yes" → add 15
//
// STEP 6: DISPLAY TOTAL AS A NICE MESSAGE























// CHEATSHEET //
const countrySelect = document.getElementById("country");
const weightInput = document.getElementById("weight");
const isExpressSelect = document.getElementById("isExpress");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

// STEP 2: LISTEN FOR CLICK
calcBtn.addEventListener("click", () => {
  const country = countrySelect.value;
  const weight = Number(weightInput.value);
  const isExpress = isExpressSelect.value;

  // Validate weight
  if (Number.isNaN(weight) || weight <= 0) {
    result.textContent = "Please enter a valid weight greater than 0.";
    return;
  }

  // STEP 3: Base cost by country
  let baseCost;
  if (country === "US") {
    baseCost = 5;
  } else if (country === "CA") {
    baseCost = 7;
  } else {
    baseCost = 10;
  }

  // STEP 4: Weight surcharge
  let weightSurcharge;
  if (weight > 5) {
    weightSurcharge = 10;
  } else if (weight > 1) {
    weightSurcharge = 5;
  } else {
    weightSurcharge = 0;
  }

  // STEP 5: Express option
  let expressFee = (isExpress === "yes") ? 15 : 0;

  // STEP 6: Compute total
  const total = baseCost + weightSurcharge + expressFee;

  // Display nicely
  result.textContent = `Shipping to ${country}:
Base: $${baseCost.toFixed(2)}
Weight surcharge: $${weightSurcharge.toFixed(2)}
Express fee: $${expressFee.toFixed(2)}
Total shipping cost: $${total.toFixed(2)}`;
});