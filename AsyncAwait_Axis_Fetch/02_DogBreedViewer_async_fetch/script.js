// 🧠 STEP 1: Select the dropdown, button, and image container using document.getElementById
// - These elements let us know which breed the user picked, when to run the code, and where to display the dog image.
   const breedSelect = document.getElementById("breedSelect");
   const fetchBtn = document.getElementById("fetchBtn");
   const imageContainer = document.getElementById("imageContainer");
// 🧠 STEP 2: Add an event listener to the button
// - This function will run every time the user clicks the "Show Dog" button.
   fetchBtn.addEventListener("click",async () => {
    const breed = breedSelect.value;
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    try {             // try works together with catch {} to handle if something goes wrong in the code instead of crashing 
       const response = await fetch(url);            // await: wait fot the server to answer fetch() built in function that makes a request asking to get data 
       const data =  await response.json();          // convert response to JSON
       const image = data.message;
       imageContainer.innerHTML = `<img src="${image}" alt="${breed}" style="width: 100%; border-radius: 8px;" />`; // inner.html in Java replace whatever is inside the base element with the new HTML code so it matches with in this example the dog breed the user selected 
    } catch (err) {
        imageContainer.innerHTML = `<p style= "color:red;"> "Something went wrong"</p>`;    // error message
    }
   });
// 🧠 STEP 3: Get the selected breed from the dropdown
// - .value gets the breed that the user chose (like "pug" or "dalmatian")

// 🧠 STEP 4: Build the API URL using the selected breed
// - We insert the breed into the URL using a template literal - `https://dog.ceo/api/breed/${breed}/images/random`

// 🧠 STEP 5: Use fetch() with await to get a random dog image
// - The fetch call waits for the response to come back from the Dog API

// 🧠 STEP 6: Convert the response into a JavaScript object
// - The .json() method returns a Promise, so we use await again

// 🧠 STEP 7: Get the image URL from the response data
// - The image URL is inside the "message" property

// 🧠 STEP 8: Display the image by setting the innerHTML of the container
// - We use an <img> tag with the URL and style it to fit nicely

// 🧠 STEP 9: If something goes wrong (like no internet), show an error message