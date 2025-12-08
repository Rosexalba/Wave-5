// STEP 1: Create a base array named fruits with some items like "apple", "banana", "cherry".
    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits);
// ==========================
// PUSH — Add to the end
// ==========================
// STEP 2a: Use push to add "mango" to the end of fruits.
fruits.push("mango");
console.log(fruits);
// STEP 2b: Use push to add another fruit to the end.
fruits.push("pineapple");
console.log(fruits);
// STEP 2c: Use push again to add one more fruit at the end.
fruits.push("kiwi");
console.log(fruits);

// ==========================
// POP — Remove from the end
// ==========================
// STEP 3a: Use pop to remove the last fruit.
fruits.pop();
console.log(fruits);
// STEP 3b: Use pop again.
fruits.pop();
console.log(fruits);
// STEP 3c: Use pop one more time.
fruits.pop();
console.log(fruits);

// ==========================
// UNSHIFT — Add to the front
// ==========================
// STEP 4a: Use unshift to add "strawberry" at the front.
fruits.unshift("grape");
console.log(fruits);
// STEP 4b: Use unshift again with another fruit.
fruits.unshift("strawberry");
console.log(fruits);
// STEP 4c: Use unshift one more time.
fruits.unshift("potato");
console.log(fruits);

// ==========================
// SHIFT — Remove from the front
// ==========================
// STEP 5a: Use shift to remove the first fruit.
fruits.shift();
console.log(fruits);
// STEP 5b: Use shift again.
fruits.shift();
console.log(fruits);
// STEP 5c: Use shift one more time.
fruits.shift();
console.log(fruits);

// ==========================
// SLICE — Copy without changing original
// ==========================
// STEP 6a: Make a copy of the first two fruits using slice.
    const firstTwo = fruits.slice(0,2);
    console.log(firstTwo);
// STEP 6b: Make a copy of the whole array using slice.
    const allFruits = fruits.slice();
    console.log(allFruits);
// STEP 6c: Make a copy starting from index 1 using slice.
    const oneFruit = fruits.slice(1);
    console.log(oneFruit);

// ==========================
// SPLICE — Mutate original array
// ==========================
// STEP 7a: Use splice to remove 1 item from index 1.
fruits.splice(1,1);
console.log(fruits);
// STEP 7b: Use splice to add "kiwi" at index 2.
fruits.splice(2,0,"kiwi");
console.log(fruits);
// STEP 7c: Use splice to replace one item at index 0 with "grape".
fruits.splice(0,1, "grape")
console.log(fruits);

// .splice (startIndex, deleteCount, newItem1, newItem2, ...);

// ==========================
// SEARCHING — includes + indexOf
// ==========================
// STEP 8a: Check if fruits includes "apple".
    console.log(fruits.includes("apple")); // false

// STEP 8b: Check if fruits includes another fruit.
    console.log(fruits.includes("kiwi")); // true

// STEP 8c: Find the indexOf "banana" (or another fruit).
    console.log(fruits.indexOf("cherry")); // 1 

// ==========================
// LOOPING — for...of and forEach
// ==========================
// STEP 9a: Loop through fruits with for...of and log each fruit.
   for (const fruit of fruits) {
    console.log(fruit);
   }
// STEP 9b: Loop through fruits with forEach and log each fruit with "Fruit: " before it.
    fruits.forEach(fruit => {
        console.log("fruit: " + fruit);
    });
// STEP 9c: Use forEach to log the length of each fruit name.
    fruits.forEach(fruit => {
        console.log(fruit + " length: " + fruit.length, "characters");
    });
   
// ==========================
// MAP — Transform each item
// ==========================
// STEP 10a: Use map to create a new array with each fruit name in UPPERCASE.
   const upperFruits = fruits.map(fruits => fruits.toUpperCase());
   console.log(upperFruits);
// STEP 10b: Use map again to create an array of fruit name lengths.
   const lengthFruits = fruits.map(fruits => fruits.length);
   console.log(lengthFruits);

// ==========================
// FILTER — Keep only some items
// ==========================
// STEP 11a: Use filter to make a new array with only fruits that have more than 5 letters.
    const longFruits = fruits.filter(fruit => fruit.length > 5 );
    console.log(longFruits);
// STEP 11b: Use filter again to keep only fruits that contain the letter "a".
    const aFruits = fruits.filter(fruit => fruit.includes("a"));
    console.log(aFruits);

// ==========================
// REDUCE — Combine into one value
// ==========================
// STEP 12a: Use reduce to count the total number of letters across all fruits.
     const totalLetters = fruits.reduce((sum,fruit) => sum + fruit.length, 0);
     console.log(totalLetters);
// STEP 12b: Use reduce again to join all fruit names into a single string separated by commas.
     const allFruitString = fruits.reduce((str, fruit, index) => {
        return index === 0 ? fruit : str + "," + fruit;
     }, "");

     console.log(allFruitString);


