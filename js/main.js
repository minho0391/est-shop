//상품 조회
async function fetchProducts() {
  try {
    const res = await fetch("./data/products.json");
    const data = await res.json();
    console.log(data.products);
    console.log(data.products.slice(0, 12));
    const products = data.products.slice(0, 12);
    /*
    빈 fragment를 생성
    products의 마다 할일
    빈 요소에 12개의 article을 생성하고,
    product-grid에 fragment의 내용을 html 태그로 생성
*/
    const productGrid = document.querySelector(".product-grid");
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
      const article = document.createElement("article");

      article.classList.add("product-card");

      article.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="product-info">
          <h3>${product.title}</h3>
          <p>${product.brand}</p>
          <div class="product-bottom">
            <strong>${product.price}$</strong>
            <button
              type="button"
              class="cart-add"
              aria-label="${product.title} 장바구니 담기">
            </button>
          </div>
        </div>
      `;

      fragment.append(article);
    });

    productGrid.append(fragment);
  } catch {
  } finally {
  }
}
fetchProducts();
