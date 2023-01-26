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

const productList=[];
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
});
productList.push({
    name:'Screen',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
});
productList.push({
    name:'Laptop',
    price: 2120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
});

function renderProducts(arrProductList){

    for (product of arrProductList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //product={name, price, image}-> product.image
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener('click',openDetailContainer);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','assets/Icons/bt_add_to_cart.svg');

        productInfoDiv.append(productPrice,productName);


        productInfoFigure.append(productImgCart);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(img,productInfo);

       cardsContainer.append(productCard);
    }
}

renderProducts(productList);

