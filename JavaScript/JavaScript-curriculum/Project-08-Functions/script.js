// ==========================
// TRADITIONAL FUNCTIONS
// ==========================

// STEP 1: Create a function named sayHello that logs 'Hello!'
           function sayHello() {
            console.log("Hello!");
           }
// STEP 2: Create a function addNumbers that adds 2 numbers and logs the result
           function addNumbers(a,b) {                 // parameter names 
            console.log(a + b);                       // adds inside the function
           }
// STEP 3: Create a function greetUser that takes a name and says hello
           function greetUser(name) {
            console.log("Hello " + name + "!");
           }
// STEP 4: Create a function that multiplies two numbers and logs it
           function multiply(a,b) {
            console.log(a*b);
           }
// STEP 5: Create a function that logs your favorite quote
           function quote() {
            console.log("I do not like green eggs and ham !");
           }

           function log(quote) {
            console.log("My favorite Quote: " + quote)
           }
         
// STEP 6: Call all the functions you created above
          sayHello();
          addNumbers(2,2);                         // input information
          greetUser("Rose");
          multiply(5,2);
          quote();
          log("Today you are you! That is truer than true! There is no one alive who is you-er than you!")
// ==========================
// FUNCTION EXPRESSIONS
// ==========================

// STEP 7: Create a function expression named sayBye that logs 'Bye!'
          const sayBye = function() {
            console.log("Bye!");
          }
// STEP 8: Create a function expression named subtractNumbers that subtracts 2 numbers
          const subtractNumbers = function(a,b) {
            console.log(a-b);
          }
// STEP 9: Create a function expression named greetAgain that takes a name and says hello again
          const greetAgain = function(name) {
            console.log("Nice to meet you " + name);
          }
// STEP 10: Create a function expression named divideNumbers that divides 2 numbers
          const divideNumbers = function(a,b) {
            console.log(a/b);
          }

// STEP 11: Create a function expression named bestFood that logs your favorite food
           const bestFood = function(food) {
            console.log(`My favorite food is ${food}`)
           }
// STEP 12: Call all the function expressions you created above
           sayBye();
           subtractNumbers(2,2);
           greetAgain("Micah");
           divideNumbers(6,2);
           bestFood("steak")
// ==========================
// ARROW FUNCTIONS (ES6)
// ==========================

// STEP 13: Create an arrow function named welcome that logs 'Welcome!'
          const welcome = () => {
            console.log("welcome!");
          }

// STEP 14: Create an arrow function named square that squares a number
          const square = num => num * num;
            console.log(square(4));

            // when you have a single parameter parentheses are optional 
            // if you have 0 or multiple parameters you must use parentheses 
            // return is optional for one-liners - this is called implicit return
        
// STEP 15: Create an arrow function named sayName that logs 'My name is ...'
           const sayName = () => {
            console.log("My name is.....");
           }

// STEP 16: Create an arrow function named cube that cubes a number
           const cube = num => num ** num;
           console.log(cube(4));
// STEP 17: Create an arrow function named dreamPlace that logs your dream vacation place
           const dreamPlace = (vacation) => {
            console.log(`My dream vacation is ${vacation}`)
           }
                        //shorter way 
        //    const dreamPlace = vacation => `My dream vacation is ${vacation}`;
        //    console.log(dreamPlace("Australia"));

// STEP 18: Call all the arrow functions you created above
            welcome();
            sayName();
            dreamPlace("Australia");

// ==========================
// ANONYMOUS FUNCTIONS     // good for when youre only going to use the function once 
                        // keeps the function local instead of global 
// ==========================

// STEP 19: Use setTimeout with an anonymous function that logs 'This is anonymous' after 1 second
            setTimeout(function () {                 // function inside setTimeout has no name // setTimeout is a built in javascript function that waits a certain amoount of time and then runs a function
                console.log("This is anonymous");
            }, 1000);                               // delat in milliseconds (1 second)

        //Arrow Function Example
            // setTimeout(() => console.log("This is anonymous"), 1000);

// STEP 20: Use forEach on an array with an anonymous function to log each item
            const fruits = ["Strawberry","Kiwi", "Papaya"];

            fruits.forEach(function(item) {
                console.log(item);
             });

        // Arrow Function Example  
        // fruits.forEach(item => console.log(item));


// STEP 21: Use map with an anonymous function to double numbers in an array
           const numbers = [1,2,3,4,5,6,7,8,9,10];

           const doubled = numbers.map(function(num) {
            return num * 2; // return the double value
           });

           console.log(doubled);

          //Arrow Function Example
        //   const double = numbers.map(num => num * 2);
        //   console.log(doubled);

// STEP 22: Use filter with an anonymous function to keep only even numbers
            const numbersTwo = [1,2,3,4,5,6,7,8,9,10]

            const evenNumbers = numbersTwo.filter(function(num) {
                return num % 2 === 0;     // keep only numbers divisble by 2
            });

            console.log(evenNumbers);


            //Arrow Function Example
            // const evenNumber = moreNumber.filter(num => % 2 === 0);
            // console.log(evenNumbers);

// STEP 23: Use reduce with an anonymous function to sum numbers in an array// 
          const numbersThree = [1,2,3,4,5,6,7,8,9,10]

          const sum = numbersThree.reduce(function(accumulator,current){
            return accumulator + current;
          }, 0);        // 0 is the initial value 

          console.log(sum);

          // accumulator - Keeps the running total 
          // current - current element in the array 
          // 0 - initial value of accumulator 
          // Each step adds curent to accumulator


          // Arrow Function Example

          //const sum = number.reduce((acc, curr) => acc + curr, 0);
          //console.log(sum);


          // map - change each thing
          // filter - keep certain things
          // reduce - combine everything into one thing