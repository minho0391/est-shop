//상품 조회
async function fetchProducts() {
  try {
    const res = await fetch("./data/products.json");
    const data = await res.json();
    console.log(data.products);
    console.log(data.products.slice(0, 12));
  } catch {
  } finally {
  }
}
fetchProducts();
