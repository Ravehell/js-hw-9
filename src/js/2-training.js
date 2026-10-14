const products = [
    {
        name: "Laptop",
        price: 25000,
        image: "laptop.jpg",
        description: "Powerful laptop"
    },
    {
        name: "Phone",
        price: 15000,
        image: "phone.jpg",
        description: "Modern smartphone"
    },
    {
        name: "Headphones",
        price: 2000,
        image: "headphones.jpg",
        description: "Wireless headphones"
    }
];

const container = document.querySelector(".products");
const input = document.querySelector(".price-input");
const button = document.querySelector(".filter-btn");

button.addEventListener("click", () => {
    const maxPrice = Number(input.value);

    const filteredProducts = products.filter((product) => {
        return product.price <= maxPrice;
    });

    container.innerHTML = filteredProducts.map((product) => {
        return `
        <li class="product-item">
            <img src="${product.image}" alt="${product.description}">
            <h2>${product.name}</h2>
            <p>Price: ${product.price} грн</p>
            <button type="button">Детальніше</button>
        </li>
    `;
    }).join("");

});


