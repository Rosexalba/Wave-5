# ✅ Project 7 – Events & the DOM
## 1. Project Overview
Create a small web page with three buttons and two paragraphs. When you click different buttons, the page text changes, colors update, and console messages appear.

## 2. Why You Need This
Every modern website—from Amazon’s “Add to Cart” to Google’s search bar—listens for user actions (events) and then updates the page (DOM manipulation). Knowing how to do this is “Web Dev 101.”

## 3. Core Concepts (with micro-examples)
Concept	Beginner Definition	Tiny Code Demo	Everyday Analogy
DOM (Document Object Model)	JavaScript’s in-memory representation of your HTML.	document.title = "New tab name"	A LEGO model of your house: move a brick here, the real house (page) changes.
document.getElementById()	Grabs one element by its unique id.	const title = document.getElementById("title");	Looking up a friend’s phone number by their unique ID card.
document.querySelector()	Grabs the first element matching a CSS selector.	const firstBtn = document.querySelector("button");	Asking, “Fetch me the first red apple from the basket.”
document.querySelectorAll()	Returns all matches as a static NodeList.	const allBtns = document.querySelectorAll(".action-btn");	Getting photos of all apples right now (the list won’t auto-update).
addEventListener("click", cb)	Runs cb every time the element is clicked.	firstBtn.addEventListener("click", sayHi);	Wiring a doorbell: every press rings a sound.
.innerText	Reads or changes the visible text inside a tag.	message.innerText = "Hello world";	Swapping out a sticky note’s message.
.classList.add("highlight")	Adds a CSS class (for styling) via JavaScript.	title.classList.add("highlight");	Putting a fluorescent sticker on a box so it stands out.
## 4. What You’ll Build (Step List)
Create index.html with an <h1> and three <button> elements.
Link script.js below the HTML so the DOM exists before JS runs.
In script.js:
Grab each button using a different selector method.
Write showPrimaryMessage(), showSecondaryMessage(), and dangerAlert().
Add event listeners so each button triggers its matching function.
Use .innerText and .classList to visibly change the page.
Log messages to prove each function fired.
Open your browser’s Console (F12 → “Console” tab) and watch the logs as you click.
## 5. Checkpoint Questions
What’s the difference between querySelector and querySelectorAll?
Why must the <script> tag go after the HTML body for this simple project?
If getElementsByClassName returns a live collection, how would adding a new <p class="info"> in the click handler affect its .length?