fetch("data/products.json")
.then(res => res.json())
.then(data => {

let container = document.getElementById("product-list");

data.products.forEach(product => {

let div = document.createElement("div");
div.className = "product";

div.innerHTML = `
<img src="${product.images[0]}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
`;

container.appendChild(div);

});

});
