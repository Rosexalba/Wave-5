/*
Mini Project — Expression Playground 

Goal
  Given two numbers, compute arithmetic, comparisons, logical results, and precedence examples; render lines in order.

Exact element ids required
  aInput, bInput, runBtn, resultList

STEP 1 — Selection
  Select the elements by id and store them with the exact names above.

STEP 2 — Parser
  Create a function named readNumber that converts a text input’s value to a number and returns the number.

STEP 3 — Compute
  Create a function named computeAll that takes numbers a and b and returns an object with keys in this exact list and order:
    sum, diff, prod, quot, mod,
    eqLoose, eqStrict, greater,
    bothEven, anyOver10, notEqual,
    precOne, precTwo

  Rules:
    sum is a + b
    diff is a - b
    prod is a * b
    quot is a / b
    mod is a % b
    eqLoose is a == b
    eqStrict is a === b
    greater is a > b
    ven is (a is even) and (b is even)bothE
    anyOver10 is a > 10 or b > 10
    notEqual is not (a === b)
    precOne is a + b * 2
    precTwo is (a + b) * 2

STEP 4 — Render
  Create a function named renderResults that erases resultList, then appends list items in the key order listed above with the format Key: space Value.

STEP 5 — Handler
  When runBtn is clicked, read a and b, compute, and render.
*/

// 1. Selection:
// Declare and get Elements from HTML
const a = document.getElementById("aInput");
const b = document.getElementById("bInput");
const runBtn = document.getElementById("runBtn");
const resultList = document.getElementById("resultList");

// 2. Parser:
// Arrow Function
const readNumber = (inputValue) => {    // "inputValue" is my parameter
  return Number(inputValue.value)       // Number (inputValue.value) // conerts  text input into a number & reutrns throws out that number 
};

// 3. Compute ** computeAll takes numbers a and b and returns an object with keys in this exact list and order
// Arrow Function
const computeAll = (a,b) => {
    return {   
      sum: a + b,
      diff: a - b,
      prod: a * b,
      quot: a / b,
      mod: a % b,
      eqLoose: a == b,
      eqStrict: a === b,
      greater: a > b,
      bothEven: a % 2 === 0 && b % 2 === 0,
      anyOver10: a > 10 || b > 10,
      notEqual: a !== b,
      precOne: a + b * 2,
      precTwo: (a + b) * 2
    };
};


// 4.Render ** function renderResults clears resulList then appends list items in the key order with format Key: space
// renderList is declared and grabbed element at the top 
const renderResults = (results) => { // results is my parameter
  resultList.innerHTML = "";       // clear any exisiting items inside UL resultList

  const keys = [
    "sum", "diff", "prod", "quot", "mod",   // an array named keys containing the keys in exact order to be displayed
    "eqLoose", "eqStrict", "greater",
    "bothEven", "anyOver10", "notEqual",
    "precOne", "precTwo"
  ];
  
  keys.forEach(key => {                     // each item in the array above named "keys" is being looped thorugh with forEach
    const li = document.createElement("li");     // creating a new li element for each item
    li.textContent = key + ": " + results[key];   // setting the text.content inside the li 
    resultList.appendChild(li);                    // add new li to the UL resultList
  });
};


// 5. Handler **  When runBtn is clicked, read a and b, compute, and render.
// buttons declared above 

runBtn.addEventListener("click", () => {  // button is made clickable when button is clicked 

      const numA = readNumber(a);        // Read numbers from inputs
      const numB = readNumber(b);
      const results = computeAll(numA, numB);  // Compute all values using computeAll

      renderResults(results);             // call it Render "display" the results in the list 
});
