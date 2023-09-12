let shop = document.getElementById("shop");
let cartContainer = document.getElementById("cart-container"); // Add a cart container element in your HTML

let ShopItemData = [
    {
        id: "Gryff",
        name: "Gryffindor",
        price: 201,
        desc: "Experience the magic of Gryffindor with our iconic scarlet and gold trunk, adorned with the proud lion emblem—a symbol of bravery and courage.",
        img: "/Images/harry4.jpg",
    },
    // Add other items
];

let array = [];

let generateShop = () => {
    return (shop.innerHTML = ShopItemData.map((x) => {
        return `
        <div class="item">
            <img width="200" src=${x.img} alt="">
            <div class="details">
                <h2>${x.name}</h2>
                <p>${x.desc}</p>
                <div class="price">
                    <h2>${x.price} DH</h2>
                    <div class="button">
                        <button><i onclick="minus('${x.id}')" class="fa-solid fa-minus"></i></button>
                        <div id="${x.id}" class="quantity">0</div>
                        <button><i onclick="plus('${x.id}')" class="fa-solid fa-plus"></i></button> 
                    </div>
                </div>
                <div class="buttonn" >
                    <button onclick="like('${x.id}')" class="like-button">❤️</button>
                    <button onclick="remove('${x.id}')" class="remove-button">Remove</button>
                </div>
            </div>
        </div>
        `;
    }).join(""));
};

generateShop();

let plus = (id) => {
    let selectedItem = id;
    let search = array.find((x) => x.id === selectedItem);
    if (search === undefined) {
        array.push({
            id: selectedItem,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    update(selectedItem);
};

let minus = (id) => {
    let selectedItem = id;
    let search = array.find((x) => x.id === selectedItem);
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem);
};

let like = (id) => {
    // Add code to handle the "Like" functionality here
    // You can toggle the liked state for the item
    console.log(`Liked ${id}`);
};

let remove = (id) => {
    // Add code to remove the item from the cart
    let index = array.findIndex((x) => x.id === id);
    if (index !== -1) {
        array.splice(index, 1);
    }
    update(id);
};

let update = (id) => {
    let search = array.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search ? search.item : 0;

    // Calculate and display the total price
    let total = calculateTotalPrice();
    cartContainer.textContent = `Total: ${total} DH`;
};

let calculateTotalPrice = () => {
    let total = 0;
    for (let item of array) {
        let product = ShopItemData.find((x) => x.id === item.id);
        if (product) {
            total += product.price * item.item;
        }
    }
    return total;
};