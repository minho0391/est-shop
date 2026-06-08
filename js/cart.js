import { readCart, updateCartCount } from "./utils/common.js";

updateCartCount();

const cartItems = readCart();

const cartList = document.querySelector(".cart-list");

let cartHTML = "";

cartItems.forEach(item => {
  cartHTML += `
    <article class="cart-item">
      <span class="item-check">
        <span class="check-box" aria-hidden="true"></span>
      </span>

      <div class="cart-thumb">
        <img src="${item.thumb}" alt="${item.title}" />
      </div>

      <div class="cart-item-info">
        <h2>${item.title}</h2>
        <p>${item.brand}</p>
      </div>

      <div class="quantity-box" aria-label="수량">
        <button type="button">-</button>
        <span>${item.qty}</span>
        <button type="button">+</button>
      </div>

      <button
        type="button"
        class="remove-item"
        aria-label="${item.title} 삭제"
      ></button>
    </article>
  `;
});

cartList.innerHTML += cartHTML;
