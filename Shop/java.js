let carts = document.querySelectorAll('.add-cart');


//JSON Upplägg
let products = [
    {
        name: 'AeroCool Bolt TG',
        tag: 'chassi1',
        price: 15,
        inCart: 0
    },
    {
        name: 'AeroCool Shard TG',
        tag: 'chassi2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Fractal Design Define C',
        tag: 'chassi3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Kolink Observatory RGB',
        tag: 'chassi4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Phanteks Eclipse P300',
        tag: 'chassi5',
        price: 35,
        inCart: 0
    },
    //MODERKORT
    {
        name: 'ASUS PRIME B360M-A',
        tag: 'mod1',
        price: 15,
        inCart: 0
    },
    {
        name: 'ASUS PRIME Z390-A',
        tag: 'mod2',
        price: 20,
        inCart: 0
    },
    {
        name: 'ASUS ROG STRIX B450-F',
        tag: 'mod3',
        price: 25,
        inCart: 0
    },
    {
        name: 'ASUS ROG STRIX Z390-F',
        tag: 'mod4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Gigabyte X570 AORUS ELITE',
        tag: 'mod5',
        price: 35,
        inCart: 0
    },
    //CPU
    {
        name: 'AMD Ryzen 5 3600',
        tag: 'cpu1',
        price: 15,
        inCart: 0
    },
    {
        name: 'AMD Ryzen 9 3900X',
        tag: 'cpu2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Intel Core i5 9600K',
        tag: 'cpu3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Intel Core i7 9700K',
        tag: 'cpu4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Intel Core i9 9900K',
        tag: 'cpu5',
        price: 35,
        inCart: 0
    },
    //GPU
    {
        name: 'GeForce GTX 1660 SUPER',
        tag: 'gpu1',
        price: 15,
        inCart: 0
    },
    {
        name: 'GeForce RTX 2070 SUPER',
        tag: 'gpu2',
        price: 20,
        inCart: 0
    },
    {
        name: 'GeForce RTX 2080 Ti',
        tag: 'gpu3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Radeon RX 580',
        tag: 'gpu4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Radeon RX 5700 XT',
        tag: 'gpu5',
        price: 35,
        inCart: 0
    },
    //RAM
    {
        name: 'Ballistix 16GB (2x8GB) DDR4',
        tag: 'ram1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Corsair 8GB (2x4GB) DDR4',
        tag: 'ram2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Corsair 16GB (2x8GB) DDR4',
        tag: 'ram3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Corsair 32GB (2x16GB) DDR4',
        tag: 'ram4',
        price: 30,
        inCart: 0
    },
    {
        name: 'G.Skill 16GB (2x8GB) DDR4',
        tag: 'ram5',
        price: 35,
        inCart: 0
    },
    //Hårdisk
    {
        name: 'Seagate Desktop 1TB',
        tag: 'hdd1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Seagate Desktop 2TB',
        tag: 'hdd2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Seagate Desktop 3TB',
        tag: 'hdd3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Seagate Desktop 4TB',
        tag: 'hdd4',
        price: 30,
        inCart: 0
    },
    {
        name: 'WD Blue 1TB',
        tag: 'hdd5',
        price: 35,
        inCart: 0
    },
    //SSD
    {
        name: 'Crucial MX500 1TB 2.5',
        tag: 'ssd1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Kingston A400 480GB 2.5',
        tag: 'ssd2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Samsung 860 EVO 1TB',
        tag: 'ssd3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Samsung 970 EVO Plus 1TB',
        tag: 'ssd4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Toshiba OCZ TR200 240GB',
        tag: 'ssd5',
        price: 35,
        inCart: 0
    },
    //fläkt
    {
        name: 'Corsair LL Series LL120',
        tag: 'flk1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Corsair ML120 Basic',
        tag: 'flk2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Corsair ML140 PRO',
        tag: 'flk3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Noctua NF-A12x25 PWM',
        tag: 'flk4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Noctua NF-A14 140mm',
        tag: 'flk5',
        price: 35,
        inCart: 0
    },
    //CPU KYLNING
    {
        name: 'Corsair LL Series LL120',
        tag: 'cp1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Corsair ML120 Basic',
        tag: 'cp2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Corsair ML140 PRO',
        tag: 'cp3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Noctua NF-A12x25 PWM',
        tag: 'cp4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Noctua NF-A14 140mm',
        tag: 'cp5',
        price: 35,
        inCart: 0
    },
    //PSU
    {
        name: 'Corsair RM750x 750W v2 White Series',
        tag: 'psu1',
        price: 15,
        inCart: 0
    },
    {
        name: 'Corsair RM750X 750W v2',
        tag: 'psu2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Fractal Design EFFEKT 400W',
        tag: 'psu3',
        price: 25,
        inCart: 0
    },
    {
        name: 'Fractal Design Integra M 550W',
        tag: 'psu4',
        price: 30,
        inCart: 0
    },
    {
        name: 'Thermaltake Smart RGB 700W',
        tag: 'psu5',
        price: 35,
        inCart: 0
    },



];


//Loop för Button click card nummer. Loppar kostnad
for (let i=0; i < carts.length; i++){
carts[i].addEventListener('click', () =>{
    cartNumbers(products[i]);
    totalcost(products[i])
})
}


//Räknar och sparar items i CART
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('CartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


//Nummer av items i cart och lägger till fler per klick
function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('CartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('CartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('CartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItems(product);
}


//Products
function setItems(product){
let cartItems = localStorage.getItem('ProductsInCart');
cartItems = JSON.parse(cartItems)


if (cartItems != null){

    if(cartItems[product.tag] == undefined){
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
    cartItems[product.tag].inCart += 1; 
} else{
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }


}

localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
}


//Räknar ut kostnad
function totalcost(product){
    let cartCost = localStorage.getItem('totalcost');
    cardCost = parseInt(cartCost);
    

    console.log(cartCost);

    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalcost", cartCost + product.price);
    } else{
        localStorage.setItem("totalcost", product.price);
    }

    

}
//Display cart i cart, laddar in när sidan startar
function displayCart(){
    let cartItems = localStorage.getItem("ProductsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products")
    let cartCost = localStorage.getItem('totalcost');
    //Skriver ut värden som namn,antal,pris.
    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="products"> 
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="images/${item.tag}.jpg"></img>
                <span>${item.name}</span>
            <div>

                <div class="price">${item.price}kr</div>

                <div class="quantity">
                <ion-icon name="arrow-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>
                
                <div class="total">
                ${item.inCart * item.price}kr
                </div>
                `;
            
        });
        //Total av kostnaden.
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
            <h4 class="BasketTotalTitle">
             Basket Total
             </h4>
             <h4 class="basketTotal">
                ${cartCost}kr
             </h4>
        `;

    }
}

//Laddar in saker som finns i cart
onLoadCartNumbers();
displayCart();