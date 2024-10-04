import discoverProducts from "./lib/discoverProducts.ts";
import scrapeProduct from "./lib/scrapeProduct.ts";

const productUrls = await discoverProducts();
const allProductData = await Promise.all(productUrls.map(url => scrapeProduct(url)));

console.log(allProductData);
console.log(`Scraped ${allProductData.length} products!`)