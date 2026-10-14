

console.log("JavaScript працює!");
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


const container = document.querySelector(".products")

container.innerHTML = products.map((products) =>
    `<li class="product-item">
    <img src="${products.image}" alt="${products.description}">
    <h2>${products.name}</h2>
    <p>Price: ${products.price} грн</p>
    <button type="button">Детальніше</button>
    </li>`
).join("")

container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON")
        console.log(event.target)
    const card = event.target.parentElement

    const name = card.querySelector("h2").textContent
    const price = card.querySelector("p").textContent

    console.log(name)
    console.log(price)


})

const price = card.querySelector("p").textContent
const cleanPrice = price.replace("Price: ", "").replace(" грн", "")
console.log(cleanPrice)




