async function loadProducts(targetId, filterType = null) {
  try {
    const response = await fetch("products.json");
    const products = await response.json();
    const container = document.getElementById(targetId);
    container.innerHTML = "";
    const filtered = filterType ? products.filter(p => p.category === filterType) : products;
    filtered.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `<h3>${prod.name}</h3><p>${prod.description}</p><p><strong>Price:</strong> ${prod.price}</p>`;
      container.appendChild(card);
    });
  } catch (error) { console.error("Error loading products:", error); }
}
if (document.getElementById("product-list")) loadProducts("product-list");
if (document.getElementById("cpvc-products")) loadProducts("cpvc-products", "cpvc");
if (document.getElementById("ppr-products")) loadProducts("ppr-products", "ppr");