"use strict";
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');
const totalItems = document.getElementById('totalItems');
startUp();
function generateCart() {
    let currentArrJSON = localStorage.getItem("cart");
    let currentArr = JSON.parse(currentArrJSON);
    cartItems.innerHTML = "";
    let result = currentArr.reduce(function (acc, obj) { return acc + +obj.price; }, 0);
    for (let i = 0; i < currentArr.length; i++) {
        let hr = `<hr class="hr">`;
        if (i + 1 === currentArr.length) {
            hr = ``;
        }
        cartItems.innerHTML += `
        <div class="Cart-Items">
                    <div class="image-box">
                        <img src="${currentArr[i].image}" style="height: 120px"  />
                    </div>
                    <div class="about">
                        <h1 class="title ellipsis" data-text="${currentArr[i].name}">${currentArr[i].name}</h1>
                        <h3 class="subtitle">${currentArr[i].store}</h3>
                        
                    </div>
                    <div class="counter">
                        <!-- <div class="btn"></div> -->
                        <!-- <div class="count"></div> -->
                        <!-- <div class="btn"></div> -->
                    </div>
                    <div class="prices">
                        <div class="amount">${settings.prefix}${(+currentArr[i].price / settings.divide).toFixed(settings.tofixed)}${settings.postfix}</div>
                        <div class="save"><u>${settings.currentLanguage.cart.saveForLater}</u></div>
                        <div class="remove"><u onclick="removeItem(${i})">${settings.currentLanguage.cart.remove}</u></div>
                    </div>
        </div>
        ${hr}
        `;
    }
    if (currentArr.length === 0) {
        cartItems.innerHTML = `
        <div class="nothing-container">

                    <div class="nothing">
                        <h3 class="nothing-text">${settings.currentLanguage.cart.nothing}</h3>
                    </div>
                </div>
                `;
    }
    totalPrice.innerHTML = settings.prefix + (result / settings.divide).toFixed(settings.tofixed) + settings.postfix;
    totalItems.innerHTML = String(currentArr.length);
    settings.totalPrice = result;
    settings.totalItems = currentArr.length;
}
function removeItem(id) {
    let currentArrJSON = localStorage.getItem("cart");
    let currentArr = JSON.parse(currentArrJSON);
    currentArr.splice(id, 1);
    cart.innerHTML = `(${currentArr.length})`;
    let currentArrParse = JSON.stringify(currentArr);
    localStorage.setItem('cart', currentArrParse);
    generateCart();
}
function removeAll() {
    let currentArr = [];
    cart.innerHTML = ``;
    let currentArrParse = JSON.stringify(currentArr);
    localStorage.setItem('cart', currentArrParse);
    generateCart();
}
generateCart();
euroCheck.addEventListener('click', () => {
    if (euroCheck.checked) {
        settings.euro = true;
        localStorage.setItem('euro', 'true');
    }
    else {
        settings.euro = false;
        localStorage.setItem('euro', 'false');
    }
    checkDivide();
    generateCart();
});
function preCheckout() {
    localStorage.setItem("Settings", JSON.stringify(settings));
    window.location.replace("/pages/checkout.html");
}
