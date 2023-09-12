// script.js
let shop = document.getElementById("shop");
let array = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = (id) => {
  return (shop.innerHTML = ShopItemData.map((x) => {
    let findIt = array.find((x)=> x.id === id) || [];
    return `
        <div class="item">
        <img width="200" src=${x.img} alt="">
            <div class="details">
                <h2>${x.name}</h2>
                <p>${x.desc}</p>
                <div class="price">
                    <h2>${x.price} DH</h2>
                    <div class="button">
                            <i onclick="minus(${x.id})" class="fa-solid fa-minus"></i>
                            <div id=${x.id} class="quantity">${findIt.item === undefined? 0 : findIt.item}</div>
                            <i onclick="plus(${x.id})" class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
  })
  .join(""));
};

generateShop();

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
    // console.log(array);
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
    // console.log(array);
    
    localStorage.setItem("data", JSON.stringify(array));
};

let update = (id) => {
    let search = array.find((x) => x.id === id);
    if (search !== undefined) {
        document.getElementById(id).innerHTML = search.item; }
    calculation();
 };
 let calculation = () => {
    let cartIcon = document.getElementById("quantity");
    cartIcon.innerHTML = (array.map((x) => x.item).reduce((x,y) => x + y ,0));
 };

 calculation();
