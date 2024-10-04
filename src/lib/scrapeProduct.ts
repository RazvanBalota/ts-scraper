import axios from "axios";
import * as cheerio from "cheerio";

export default async function scrapeProduct(url: string) {
  console.log(`Scraping product url ${url}`);
  const response = await axios.get(url);
  const selector = cheerio.load(response.data);
  const product = {
    url: response.config.url,
    name: selector("h3").text(),
    price: selector(".product-price").text(),
    fullPrice: selector(".price>small").text(),
    description: selector(".product-description").text(),
    images: [] as string[],
    features: {} as Record<string, string>,
  };
  selector(".features .feature").map((_, el) => {
    const label = selector(".feature-label", el).text();
    const value = selector(".feature-value", el).text();
    product.features[label] = value;
  });
  selector(".product-img>img").map((_, el) => {
    const imgSrc = selector(el).attr("href");
    if (imgSrc) {
      product.images.push(imgSrc);
    }
  });
  return product;
}
