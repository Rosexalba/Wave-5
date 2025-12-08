/*
Mini Project — Type Table 

Goal
  Build a small fixed list of values and render "<value> — <type>" lines using correct type detection.
  Practice: typeof, Array.isArray, special-case null, and function detection.

Exact element ids required
  buildBtn, outputList

STEP 1 — Values
  Create variables with these exact values:
    textValue equals hello
    numberValue equals 42
    boolValue equals true
    nullValue equals null
    undefValue is declared but not assigned any value
    objValue equals an object with a single key label with the value sample
    arrValue equals a list with values 1, 2, 3
    fnValue equals a function that returns the text yo
  Create a list named values in this exact order:
    textValue, numberValue, boolValue, nullValue, undefValue, objValue, arrValue, fnValue

STEP 2 — Type helper
  Create a function named describeType that returns:
    the text null when the value is exactly null,
    the text array when the value is an array,
    the text function when typeof returns function,
    otherwise use the result of typeof.

STEP 3 — Display helper
  Create a function named toDisplay that tries to build a readable string:
    when the value is an object or an array, try to convert with a structured approach; if that fails, fall back to a simple approach,
    otherwise convert to a text form directly.

STEP 4 — Builder
  Create a function named buildList that removes any existing items inside outputList,
  then for each value in values creates a list item whose text is the display string, a space, a dash, a space, then the type from describeType,
  and appends it to outputList.

STEP 5 — Wiring
  When buildBtn is clicked, run buildList.
*/

// 1: Values
let textValue = "hello";
let numberValue = 42;
let boolValue = true;
let nullValue = null;
let undefValue;
let objValue = { label: "sample" };
let arrValue = [1, 2, 3];
let fnValue = function() { return "yo"; };

// 1.2: Value list
let values = [textValue, numberValue, boolValue, nullValue, undefValue, objValue, arrValue, fnValue];
console.log(values);


// 2: Type helper **describeType is a function that is helping you know what kind of value youre dealing with 
// Arrow Function
const describeType = (value) => {
// Returns
  if (value === null) {                 // if value is equal to null stop and return null
    return "null";

  } else if (Array.isArray (value)) {    // if value is an array stop and return "array"
       return "array";
  
  } else if (typeof value === "function") {  // if typeof value is a function return "function" ***"function" is always used to check if the value is a function.
       return "function";
  }
    else {                                  // other wise use the result of type off for the value
        return typeof value;                  
      }
  };


  // 3. Display helper **toDisplay is a function that helps you read values by converting them to strings  
  // Traditional function 
  function toDisplay(value){
     if (typeof value === "object" && value!==null) {
        // checking if value is an object or array (array are also objects in JS)\
        // USING !==null meaning not null because of historic quirk that would pass null as well under "object" without !==null
       try {                                
       // "try": we try something like a structured approach for example like JSON
         return JSON.stringify(value);    
       // "JSON" structured approach: converts object or array into string 
       } catch  {               
      //  "catch":FALLBACK if "JSON." fails fallback 
        return String(value);   // if fails convet it to a string
       }
     }
     return String(value);     //calling it to display
    }


  // 4. Builder ** buildList is a function that creates a list item for each value 
  // declare and get element for the UL ID found in HTML for UL list 
  const outputList = document.getElementById("outputList");
  // Arrow Function
  const buildList = () => {
     outputList.innerHTML = ""; // clear existing items

     values.forEach(function(value) {   // forEach : loop through each value
      const li = document.createElement("li");   // create a new list item  

      li.textContent = toDisplay(value) + " - " + describeType(value); // text Content to be display string -type
      outputList.appendChild(li);     // append to outputList appendChild: add the new element as a child inside outputList(UL)
     });
  }
  
  // 5. Wiring ** buildBtn is an add event listner that makes your button clickable
  // declare element - get element ID buildBtn from HTML
  const buildBtn = document.getElementById("buildBtn");
  // add event listener
  buildBtn.addEventListener("click", () => { // runs code when clicked 

    buildList();  // call the buildList function so the list is updated in the browser when the button is clicked 
  });

     




