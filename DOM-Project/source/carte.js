let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let array = JSON.parse(localStorage.getItem("data")) || [];
// console.log(array);

let calculation = () => {
    let cartIcon = document.getElementById("quantity");
    cartIcon.innerHTML = (array.map((x) => x.item).reduce((x,y) => x + y ,0));
 };
 calculation();

 let GenerateCartItems = () => {
    if (array.length !== 0){
        return (ShoppingCart.innerHTML = array.map((x) => {
            let search = ShopItemData.find((z) => z.id === x.id) || [] ;
            return `
            <div class="cart-item">
                <img width="100" src=${search.img} alt=""/>
                <div class="details">
                    <div class="title-price-rem">
                    <h4 class="title-price">
                        <p>${search.name}</p>
                        <p class="cart-p">${search.price} DH</p>
                    </h4>
                    <i onclick="removeItem(${x.id})" class="fa-solid fa-xmark"></i>
                    </div>
                    <div class="button">
                        <i onclick="minus(${x.id})" class="fa-solid fa-minus" style="border: 1px solid gray; padding: 2px;"></i>
                        <div id=${x.id} class="quantity">${x.item}</div>
                        <i onclick="plus(${x.id})" class="fa-solid fa-plus" style="border: 1px solid gray; padding: 2px;"></i>
                    </div>
                    <h3>
                    ${x.item *search.price} DH
                    </h3>
                    <button id="like-button" class="like-button"><i id="i" class="fa-regular fa-heart"></i></button>
                </div>

            </div>
            `;
        }).join(""));
    } else {
        ShoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2> Cart is Empty</h2>
        <a href="harry.html">
        <button class="Homeb">Back To Home</button>
        </a>`
    }
 };

 GenerateCartItems();

 let plus = (id) => {
    let selectedItem = id;
    let search = array.find((x) => x.id === selectedItem.id);
    if(search === undefined) {
        array.push({
            id: selectedItem.id,
            item: 1,
        });
    }else{
        search.item += 1;
    }
    
    GenerateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(array));
};
let minus = (id) => {
    let selectedItem = id;
    let search = array.find((x) => x.id === selectedItem.id);
    if(search === undefined) return 
    else if(search.item === 0) return  
    else{
        search.item -= 1;
    }
    update(selectedItem.id);
    array = array.filter((x) => x.item !== 0 );
    GenerateCartItems();
    localStorage.setItem("data", JSON.stringify(array));
};
let update = (id) => {
    let search = array.find((x) => x.id === id);
    if (search !== undefined) {
        document.getElementById(id).innerHTML = search.item; }
    calculation();
    totalPrice();
 };

 let removeItem = (id) => {
    let selected = id;
    // console.log(selected.id);
    array = array.filter((x) => x.id !== selected.id);
    GenerateCartItems();
    totalPrice();
    calculation();
    localStorage.setItem("data", JSON.stringify(array));
 }

 let clearCart = () => {
    array = [];
    GenerateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(array));
 }

 let totalPrice = () => {
    if(array.length !== 0){
        let amount = array.map((x) => {
            let {item , id} = x;
            let search = ShopItemData.find((z) => z.id === x.id) || [] ;

            return (item * search.price);
        }).reduce((x,y) => x+y, 0);
        // console.log(amount);
        label.innerHTML = `
        <h2> Total Price : ${amount} DH
        </h2>
        <button class="checkout"><a style="color : white" href="Harry.html">Checkout</a></button>
        <button onclick="clearCart()" class="removeAll">Clear Cart</button>
        `;
    }else return ;
 }

 totalPrice();



