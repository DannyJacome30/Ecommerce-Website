const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu ");

const menuIcon=document.querySelector(".menu");
const mobilMenu=document.querySelector(".mobil-menu");

const shoppingCartIcon=document.querySelector(".navbar-shopping-cart");
const shoppingCartMenu=document.querySelector(".shopping-cart");

const cardsContainer=document.querySelector('.card-container');

const productDetailContainer=document.querySelector('.product-detail');

const productDetailCloseIcon =document.querySelector('.product-detail-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
productDetailCloseIcon.addEventListener('click',closeProductDetailClose);
shoppingCartIcon.addEventListener('click',toggleShoppingCartMenu);
menuIcon.addEventListener('click',toggleMobilMenu);

const API='https://dummyjson.com';

function toggleDesktopMenu(){
    const isShopingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if(!isShopingCartMenuClosed){
        shoppingCartMenu.classList.add('inactive');
    }else if(!isProductDetailContainerClosed){
        closeProductDetailClose();
   }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
    const isShopingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if(!isShopingCartMenuClosed){
        shoppingCartMenu.classList.add('inactive');
    }else if(!isProductDetailContainerClosed){
        closeProductDetailClose();
   }
    mobilMenu.classList.toggle('inactive');
}

function toggleShoppingCartMenu(){
    const isDesktopMenuClosed = menuEmail.classList.contains('inactive');
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
    if(!isMobilMenuClosed){
        mobilMenu.classList.add('inactive');
    }else if(isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }else if(!isProductDetailContainerClosed){
        closeProductDetailClose();
   }
    shoppingCartMenu.classList.toggle('inactive');
}

function openDetailContainer(){
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailClose(){
    productDetailContainer.classList.add('inactive');
}

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
};

const anotherFunction =async (urlApi) => {
    try {
        let products = await fetchData(`${urlApi}/products`);
        let nameProduct, priceProduct, imgProduct;
        products.products.map( product => {
            nameProduct = product.title;
            priceProduct = product.price;
            imgProduct = product.images[0];
            renderProducts(nameProduct,priceProduct,imgProduct);
            
        })       
    
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);

function renderProducts(nameP,priceP,imgP){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product={name, price, image}-> product.image
        const img = document.createElement('img');
        img.setAttribute('src',imgP);
        img.addEventListener('click',openDetailContainer);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+priceP;

        const productName = document.createElement('p');
        productName.innerText = nameP;

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','assets/Icons/bt_add_to_cart.svg');

        productInfoDiv.append(productPrice,productName);


        productInfoFigure.append(productImgCart);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(img,productInfo);

       cardsContainer.append(productCard);
}

//renderProducts(productList);

