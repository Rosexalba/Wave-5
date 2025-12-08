// GOAL: Use a switch statement to show benefits based on a selected membership tier.
//
// STEP 1: GET ELEMENTS
// - select#tierSelect, button#showBtn, p#result

const tierSelect = document.getElementById("tierSelect");
const showBtn = document.getElementById("showBtn");
const result = document.getElementById("result");

// STEP 2: ADD CLICK LISTENER
// - Read the current value of the select (e.target.value or tierSelect.value).
showBtn.addEventListener("click", () => {
  const tier = tierSelect.value; // read current value
  let benefits = "";

// STEP 3: SWITCH ON THE SELECTED VALUE
// - case "bronze": result = "Bronze: Basic support."
// - case "silver": result = "Silver: Priority support + discounts."
// - case "gold": result = "Gold: 24/7 support + VIP access."
// - default: result = "Unknown tier."

//SWITCH: Cleaner than many else ifs when checking a single value against fixed lables 

    switch (tier) { 
      case "bronze":
        benefits = "Bronze: Basic Support.";
        break;
      case "silver":
        benefits = "Silver: Priority support + discounts.";
        break;
      case "gold": 
        benefits = "Gold: 24/7 support + VIP access.";
        break;
        default: 
        benefits = "Unknown tier.";

    }




// STEP 4: DISPLAY THE BENEFITS IN result.textContent

result.textContent = benefits;
  });

