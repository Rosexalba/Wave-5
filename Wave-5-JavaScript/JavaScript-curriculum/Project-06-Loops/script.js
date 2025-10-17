// STEP 1: Use a for loop to count from 1 to 3
// (Write a for loop starting at 1; run while <= 3; increase by 1; log the counter.)
      for( let i = 1; i <= 3; i++) {
        console.log(i);
      }

      // let i = 1 - start counter at 1
      // i <= 3 - keep looping while counter is <= 3
      // i ++ - increase counter by 1 each time 
      // console.log(i) - print the current counter

// STEP 2: Use a for loop to print 5 stars
// (Write a for loop that runs 5 times; log "⭐" each time.)
        for( let i = 0; i < 5; i++){
            console.log("⭐");
        }

     // let i = 0 - start counter at 0
     // i < 5 - run 5 time (0,1,2,3,4)
     // i++ insrease counter by 1 each time 

     // if you want the stars on a single line, you need to build a string first 
          let stars = "";
          for(let i = 0; i < 5; i++) {
            stars += "⭐";
          }
          console.log(stars);

     // if you want to add another star on each loop
          for (let i = 1; i <= 5; i++) {
            console.log("⭐".repeat(i));
          }

          // "⭐".repeat(i) - repeats the staar i  times 

// STEP 3: Loop through an array of fruits and log each one
// (Create const fruits = ["apple", "banana", "cherry"]; use a for loop with i < fruits.length and log each item.)
           const fruits = ["apple", "banana", "cherry"];

           for(let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
           }

           // fruits[i] - gives the actual item at that position used to access the array item

// STEP 4: Use a loop to print even numbers from 2 to 10
// (Start at 2; increment by 2; stop at 10; log each number.)
          for( let i = 2; i <= 10; i += 2) {
            console.log(i);
          }

          // let i = 2 - starts at 2 
          // i <= 10 - stop when you reach 10
          // i += 2 - add 2 every loop (so you only hit even numbers)

// STEP 5: Loop backwards from 5 to 1
// (Start at 5; decrement by 1; stop at 1; log each number.)
         for (let i = 5; i >= 1; i--) {
            console.log(i);
         }

         // i = 5 - starts at 5 
         // i >= - keeps looping while 1 or more
         // i -- - subtract 1 each time 

// STEP 6: Loop through letters in a string
// (Create let word = "hello"; loop over its length and log each character.)
            let word = "hello";
         
        for(let i = 0; i < word.length; i++) {
            console.log(word[i]);
        }

        // word.length - gives you how many letters are in the string
        // word[i] - grabs the letter at each position (0="h". 1="e", etc.) // accessing items in index

// STEP 7: Use a while loop to count from 1 to 3
// (Make a counter that starts at 1; while it’s <= 3, log it; remember to increment.)

            // in whilte loop you cant declare let i = 1 inside the parantheses you have
            // to declare it before the loop starts 
            //    let i = 1;   // declaring - set 

            //    while(i <= 3) {    // check the condition
            //     console.log(i);
            //     i++;              // increment inside the loop
            //    }

      // while loop -- only checks the condition 
      // -- it doesnt handle setup or incrementinf for you like a for loop does 

// STEP 8: Use a while loop to print 5 stars
// (Start a counter at 0; while it’s < 5, log "⭐"; increment after logging.)
        //    let i = 0;

        //    while( i < 5) {
        //    console.log("⭐");
        //    i++;
        //    }

// STEP 9: Loop through the same fruits array using a while loop and log each one
// (Use an index that starts at 0; while index < fruits.length, log fruits[index]; increment index.)
        //   let i = 0;

        //   while(i < fruits.length) {           // fruit array is located above
        //     console.log(fruits[i]);
        //     i++;
        //   }

// STEP 10: Use a while loop to print even numbers from 2 to 10
// (Start at 2; while <= 10, log the number; add 2 each time.)
        //    let i = 2;                  // start the counter at 2 
             
        //    while(i <= 10) {            // keep looping as long as i is <=10
        //     console.log(i);            // prin the current value of i 
        //     i += 2;                   // add 2 to i for the next loop iteration keeping it at an even number
        //    } 
           

// STEP 11: Use a while loop to loop backwards from 5 to 1
// (Start at 5; while >= 1, log the number; subtract 1 each loop.) 
            //   let i = 5; 

            //   while(i >=1) {
            //     console.log(i);
            //     i--;                // subtract 1 each loop
            //   }

// STEP 12: Use a while loop to loop through letters in the same string
// (Use an index starting at 0; while index < word.length, log word[index]; then increment.)
              let letter = "ILOVEU";

              let i = 0;
              while(i < letter.length) {
                console.log(letter[i]);
                i++;
              }

            


