const fs = require("fs");

function generateProducts(n) {
  const products = [];
  for (let i = 1; i <= n; i++) {
    const product = {
      id: i,
      name: `Produto ${i}`,
      slug: `produto-${i}`,
      description: `Descrição do produto ${i}`,
      price: i * 10.0,
    };
    products.push(product);
  }
  return products;
}

const numProducts = 2000;
const products = generateProducts(numProducts);

fs.writeFileSync("products.json", JSON.stringify(products, null, 4));

console.log(
  `${numProducts} produtos foram gerados e salvos em "products.json"!`
);
