
const productGrid = document.getElementById("productGrid"); 
const searchInput = document.getElementById("searchInput"); 
const categorySelect = document.getElementById("categorySelect"); 
const favoritesList = document.getElementById("favoritesList");
const contactForm = document.getElementById("contactForm"); 


let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts(allProducts);
  })
  .catch(err => console.error("Fetch error:", err));

function renderProducts(products) {
  productGrid.innerHTML = ""; 

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement("h3");
    title.textContent = product.title;

 
    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

   
    const favBtn = document.createElement("button");
    favBtn.textContent = "Add to Favorites";
    favBtn.addEventListener("click", () => addToFavorites(product));

    card.append(img, title, price, favBtn);
    productGrid.appendChild(card);
  });
}


function addToFavorites(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.find(item => item.id === product.id)) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
  } else {
    alert(`${product.title} is already in favorites!`);
  }
}

function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favoritesList.innerHTML = "";

  favorites.forEach((item, index) => {
    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.marginBottom = "10px";
    li.style.padding = "5px 10px";
    li.style.background = "#3a2460";
    li.style.borderRadius = "10px";
    li.style.color = "#fff";

    
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.objectFit = "contain";
    img.style.borderRadius = "8px";
    img.style.marginRight = "10px";

 
    const span = document.createElement("span");
    span.textContent = item.title;
    span.style.flex = "1";

   
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.background = "linear-gradient(135deg, #7b4cff, #a266ff)";
    removeBtn.style.border = "none";
    removeBtn.style.borderRadius = "12px";
    removeBtn.style.padding = "4px 10px";
    removeBtn.style.color = "#fff";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.fontWeight = "bold";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener("click", () => {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderFavorites();
    });

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(removeBtn);
    favoritesList.appendChild(li);
  });
}


renderFavorites();

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});

categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  const filtered = category
    ? allProducts.filter(p => p.category === category)
    : allProducts;
  renderProducts(filtered);
});

contactForm.addEventListener("submit", e => {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thanks for contacting us, ${name}! We'll get back to you soon.`);
    contactForm.reset(); 
  } else {
    alert("Please fill in all fields.");
  }
});




