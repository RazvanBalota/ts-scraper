import scrapePagingPage from "./scrapePaginPage.ts";

export default async function discoverProducts() {
  let productUrls: string[] = [];
  const firstPage = await scrapePagingPage("https://web-scraping.dev/products");
  productUrls = productUrls.concat(firstPage.products);
  for (const pagingPage of firstPage.pages) {
    if (pagingPage.includes("page=1")) {
      continue;
    }
    const pageData = await scrapePagingPage(pagingPage);
    productUrls = productUrls.concat(pageData.products);
  }
  return productUrls;
}
