fetch("Product.json")
.then(response => response.json())
.then(data => {

let container = document.getElementById("product-list");

data.products.forEach(product => {

let div = document.createElement("div");

div.className = "product";

div.innerHTML = `
<img src="${product.images[0]}" alt="">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart('${product.name}')">Add to Cart</button>
`;

container.appendChild(div);

});

});

function addToCart(name){

alert(name + " added to cart");

}
