// =============================================================
// Mini Project — Contact Card
// =============================================================

/*
STEP 1 — Create these DOM references (exact names):
  - const form = document.getElementById("contactForm")
  - const contactsList = document.getElementById("contacts")
  - const status = document.getElementById("status")
  - const clearBtn = document.getElementById("clearBtn")
*/
const form = document.getElementById("contactForm");
const contactsList = document.getElementById("contacts");
const status = document.getElementById("status");
const clearBtn = document.getElementById("clearBtn");
/*
STEP 2 — Write a helper function named createContactCard(dataObject)
  - Function name: createContactCard
  - Parameter: an object with keys { first, last, email, phone, fav }
  - Returns: a <div> element with class "contact" (the card)

  Inside createContactCard:
    STEP 2A — Compute initials (variable name: initials)
    STEP 2B — Create the outer <div> (variable name: card)
    STEP 2C — Fill card content with these classes:
        - avatar
        - contact-body
        - name
        - meta
        - badge (only if fav is true)
    STEP 2D — return card
*/
// Helper
function createContactCard({first,last,email,phone, fav}) { // createContactCard(dataObject)
    // Compute initials 
    const initials = `${(first[0] || "") + (last[0] || "")}`.toUpperCase(); // handles empty first/last names produced uppercase initials outer div with class "contact" is created:
    // Outer DIV with class 
    const card = document.createElement("div");
    card.classList.add("contact");

    // Fill card content
    card.innerHTML =`
    <div class="avatar">${initials}</div>    
    <div class="contact-body">
    <div class = "name">
      ${first} ${last}
      ${fav ? `<span class="badge">★</span>` : ""}
      </div>
        <div class="meta">${email}</div>
        <div class="meta">${phone}</div>
      </div>
      `;
    // Backticks start a template literal so we can write multiline HTML inside JS
    // anything inside it will be treated like a string and can include place holders
    // .avatar = initials
    // .contact-body = container
    // .name = full name + optional badge
    // meta = email + phone

      return card;
      }



/*
STEP 3 — Write a helper function named showToast()
  - Function name: showToast
  - Action: unhides #status, then hides it after 2000ms
*/
function showToast() {
  
}
/*
STEP 4 — Write a helper function named removeEmptyState()
  - Function name: removeEmptyState
  - Action: if an element with class ".empty" exists inside #contacts, remove it
*/

/*
STEP 5 — Write a helper function named restoreEmptyState()
  - Function name: restoreEmptyState
  - Action: replace the innerHTML of #contacts with the default empty-state block
*/

/*
STEP 6 — Add a "submit" listener on form that runs an inline function
  - Read inputs into exact variable names:
      first, last, email, phone, fav
  - Build a card with createContactCard({ first, last, email, phone, fav })
  - Call removeEmptyState(), then append the new card to contactsList
  - Call showToast(), then reset the form
*/

/*
STEP 7 — Add a "click" listener on clearBtn
  - When clicked, call restoreEmptyState()
*/