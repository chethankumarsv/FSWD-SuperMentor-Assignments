const container = document.getElementById("productContainer");
const loader = document.getElementById("loader");

let allProducts = [];

// Fetch products from FakeStore API
async function fetchProducts() {
  loader.style.display = "block";

  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  allProducts = data;
  displayProducts(allProducts);
  populateCategories(data);

  loader.style.display = "none";
}

// Display products
function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.title.slice(0, 40)}...</h4>
        <p class="price">₹${Math.round(p.price * 80)}</p>
      </div>
    `;
  });
}

// Populate category filter
function populateCategories(products) {
  const categories = [...new Set(products.map(p => p.category))];
  const select = document.getElementById("categoryFilter");

  categories.forEach(cat => {
    select.innerHTML += `<option value="${cat}">${cat}</option>`;
  });
}

// Filter + Search + Sort
function applyFilters() {
  let filtered = [...allProducts];

  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  if (search) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(search));
  }

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Event Listeners
document.getElementById("searchInput").addEventListener("input", applyFilters);
document.getElementById("categoryFilter").addEventListener("change", applyFilters);
document.getElementById("sortFilter").addEventListener("change", applyFilters);

// Init
fetchProducts();