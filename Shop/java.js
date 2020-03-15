
let carts = document.querySelectorAll('.add-cart');


//JSON Upplägg
//Chassi
let products = [
    {
        name: 'AeroCool Bolt TG',
        tag: 'aerocoolbolttg',
        price: 15,
        inCart: 0
    },
    {
        name: 'AeroCool Shard TG',
        tag: 'aerocoolshardtg',
        price: 20,
        inCart: 0
    },
    {
        name: 'Fractal Design Define C',
        tag: 'fractaldesigndefinec',
        price: 25,
        inCart: 0
    },
    {
        name: 'Kolink Observatory RGB',
        tag: 'kolinkobservatoryrgb',
        price: 30,
        inCart: 0
    },
    {
        name: 'Phanteks Eclipse P300',
        tag: 'phantekseclipsep300',
        price: 35,
        inCart: 0
    },
    //MODERKORT
    {
        name: 'ASUS PRIME B360M-A',
        tag: 'asusprimeb360m-a',
        price: 15,
        inCart: 0
    },
    {
        name: 'ASUS PRIME Z390-A',
        tag: 'asusprimez390-a',
        price: 20,
        inCart: 0
    },
    {
        name: 'ASUS ROG STRIX B450-F',
        tag: 'asusrogstrixb450-f',
        price: 25,
        inCart: 0
    },
    {
        name: 'ASUS ROG STRIX Z390-F',
        tag: 'asusrogstrixz390-f',
        price: 30,
        inCart: 0
    },
    {
        name: 'Gigabyte X570 AORUS ELITE',
        tag: 'gigabytex570aoruselite',
        price: 35,
        inCart: 0
    },
    //CPU
    {
        name: 'AMD Ryzen 5 3600',
        tag: 'amdryzen53600',
        price: 15,
        inCart: 0
    },
    {
        name: 'AMD Ryzen 9 3900X',
        tag: 'amdryzen93900x',
        price: 20,
        inCart: 0
    },
    {
        name: 'Intel Core i5 9600K',
        tag: 'intelcorei59600k',
        price: 25,
        inCart: 0
    },
    {
        name: 'Intel Core i7 9700K',
        tag: 'intelcorei79700k',
        price: 30,
        inCart: 0
    },
    {
        name: 'Intel Core i9 9900K',
        tag: 'intelcorei99900k',
        price: 35,
        inCart: 0
    },
    //GPU
    {
        name: 'GeForce GTX 1660 SUPER',
        tag: 'geforcegtx1660super',
        price: 15,
        inCart: 0
    },
    {
        name: 'GeForce RTX 2070 SUPER',
        tag: 'geforcertx2070super',
        price: 20,
        inCart: 0
    },
    {
        name: 'GeForce RTX 2080 Ti',
        tag: 'geforcertx2080ti',
        price: 25,
        inCart: 0
    },
    {
        name: 'Radeon RX 580',
        tag: 'radeonrx580',
        price: 30,
        inCart: 0
    },
    {
        name: 'Radeon RX 5700 XT',
        tag: 'radeonrx5700xt',
        price: 35,
        inCart: 0
    },
    //RAM
    {
        name: 'Ballistix 16GB (2x8GB) DDR4',
        tag: 'ballistix16gb(2x8gb)ddr4',
        price: 15,
        inCart: 0
    },
    {
        name: 'Corsair 8GB (2x4GB) DDR4',
        tag: 'corsair8gb(2x4gb)ddr4',
        price: 20,
        inCart: 0
    },
    {
        name: 'Corsair 16GB (2x8GB) DDR4',
        tag: 'corsair16gb(2x8gb)ddr4',
        price: 25,
        inCart: 0
    },
    {
        name: 'Corsair 32GB (2x16GB) DDR4',
        tag: 'corsair32gb(2x16gb)ddr4',
        price: 30,
        inCart: 0
    },
    {
        name: 'G.Skill 16GB (2x8GB) DDR4',
        tag: 'g.skill16gb(2x8gb)ddr4',
        price: 35,
        inCart: 0
    },
    //Hårdisk
    {
        name: 'Seagate Desktop 1TB',
        tag: 'seagatedesktop1tb',
        price: 15,
        inCart: 0
    },
    {
        name: 'Seagate Desktop 2TB',
        tag: 'seagatedesktop2tb',
        price: 20,
        inCart: 0
    },
    {
        name: 'Seagate Desktop 3TB',
        tag: 'seagatedesktop3tb',
        price: 25,
        inCart: 0
    },
    {
        name: 'Seagate Desktop 4TB',
        tag: 'seagatedesktop4tb',
        price: 30,
        inCart: 0
    },
    {
        name: 'WD Blue 1TB',
        tag: 'wdblue1tb',
        price: 35,
        inCart: 0
    },
    //SSD
    {
        name: 'Crucial MX500 1TB 2.5',
        tag: 'crucialmx5001tb2.5',
        price: 15,
        inCart: 0
    },
    {
        name: 'Kingston A400 480GB 2.5',
        tag: 'kingstona400480gb2.5',
        price: 20,
        inCart: 0
    },
    {
        name: 'Samsung 860 EVO 1TB',
        tag: 'samsung860evo1tb',
        price: 25,
        inCart: 0
    },
    {
        name: 'Samsung 970 EVO Plus 1TB',
        tag: 'samsung970evoplus1tb',
        price: 30,
        inCart: 0
    },
    {
        name: 'Toshiba OCZ TR200 240GB',
        tag: 'toshibaocztr200240gb',
        price: 35,
        inCart: 0
    },
    //fläkt
    {
        name: 'Corsair LL Series LL120',
        tag: 'corsairllseriesll120',
        price: 15,
        inCart: 0
    },
    {
        name: 'Corsair ML120 Basic',
        tag: 'corsairml120basic',
        price: 20,
        inCart: 0
    },
    {
        name: 'Corsair ML140 PRO',
        tag: 'corsairml140pro',
        price: 25,
        inCart: 0
    },
    {
        name: 'Noctua NF-A12x25 PWM',
        tag: 'noctuanf-a12x25pwm',
        price: 30,
        inCart: 0
    },
    {
        name: 'Noctua NF-A14 140mm',
        tag: 'noctuanf-a14140mm',
        price: 35,
        inCart: 0
    },
    //CPU KYLNING
    {
        name: 'be quiet! Dark Rock Pro 4',
        tag: 'bequiet!darkrockpro4',
        price: 15,
        inCart: 0
    },
    {
        name: 'be quiet! Pure Rock',
        tag: 'bequiet!purerock',
        price: 20,
        inCart: 0
    },
    {
        name: 'Cooler Master MasterAir MA610P',
        tag: 'coolermastermasterairma610p',
        price: 25,
        inCart: 0
    },
    {
        name: 'Corsair Hydro H100i RGB Platinum',
        tag: 'corsairhydroh100irgbplatinum',
        price: 30,
        inCart: 0
    },
    {
        name: 'Noctua NH-U12A',
        tag: 'noctuanh-u12a',
        price: 35,
        inCart: 0
    },
    //PSU
    {
        name: 'Corsair RM750x 750W v2 White Series',
        tag: 'corsairrm750x750wv2whiteseries',
        price: 15,
        inCart: 0
    },
    {
        name: 'Corsair RM750X 750W v2',
        tag: 'corsairrm750x750wv2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Fractal Design EFFEKT 400W',
        tag: 'fractaldesigneffekt400w',
        price: 25,
        inCart: 0
    },
    {
        name: 'Fractal Design Integra M 550W',
        tag: 'fractaldesignintegram550w',
        price: 30,
        inCart: 0
    },
    {
        name: 'Thermaltake Smart RGB 700W',
        tag: 'thermaltakesmartrgb700w',
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
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


//Nummer av items i cart och lägger till fler per klick
function cartNumbers(product, action){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems);

    if (action == "decrease"){
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
    }else if( productNumbers ){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }


    setItems(product);
}


//Products
function setItems(product){
let cartItems = localStorage.getItem('ProductsInCart');
//String till object
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
function totalcost(product, action){
    let cartCost = localStorage.getItem('totalcost');
    cardCost = parseInt(cartCost);
    

    console.log(cartCost);

    if(action == "decrease"){
        cartCost = parseInt(cartCost);

        localStorage.setItem('totalcost',cartCost - product.price);
    
    }else if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalcost", cartCost + product.price);
    } else{
        localStorage.setItem("totalcost", product.price);
    }

    

}
//Display cart i cart, laddar in när sidan startar
function displayCart(){
    let cartItems = localStorage.getItem("ProductsInCart");
    //String till object
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products")
    let cartCost = localStorage.getItem('totalcost');
    //Skriver ut värden som namn,antal,pris.
    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product"> 
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="images/${item.tag}.jpg"></img>
                <span>${item.name}</span>
            </div>

                <div class="price">${item.price}kr</div>

                <div class="quantity">
                <ion-icon class = "decrease" name="arrow-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class = "increase" name="arrow-forward-circle-outline"></ion-icon>
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
    deleteButtons();
    manageQuantity();
}

//Delete function för button Ion-icon
function deleteButtons(){
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productName;
    let productNumbers = localStorage.getItem('CartNumbers');
    let cartItems = localStorage.getItem('ProductsInCart');
    //String till object
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalcost')
    
    


    for (let i=0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, '');

            


           localStorage.setItem('CartNumbers', productNumbers - cartItems[productName].inCart);

           localStorage.setItem('totalcost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

           delete cartItems[productName];
           localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));

           displayCart();
           onLoadCartNumbers();
        })
    }
}

//Tar upp klasserna från buttons och ger de värdern för increase och decrease
function manageQuantity(){
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let cartItems = localStorage.getItem('ProductsInCart');
    let currentQuantity = 0;
    let currentProduct = "";
    //String till object
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    
    //Läser av quantity av decrease
    for(let i=0; i< decreaseButtons.length; i++){
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            // går in i product och hämtar name.
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);


            //Decrease metod
            if(cartItems[currentProduct].inCart > 1 ){
            cartItems[currentProduct].inCart -=  1;
            cartNumbers(cartItems[currentProduct], "decrease" );
            totalcost(cartItems[currentProduct], "decrease");
            localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
            displayCart();
            }
        });
    }
    //Läser av quantity av increase
    for(let i=0; i< increaseButtons.length; i++){
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);


            
            
            // går in i product och hämtar name.
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);


            //increase metod
            
            cartItems[currentProduct].inCart +=  1;
            cartNumbers(cartItems[currentProduct]);
            totalcost(cartItems[currentProduct]);
            localStorage.setItem('ProductsInCart', JSON.stringify(cartItems));
            displayCart();
            
        })
    }
}

//Laddar in saker som finns i cart
onLoadCartNumbers();
displayCart();