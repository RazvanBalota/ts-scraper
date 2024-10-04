import axios from "axios";
import * as cheerio from "cheerio";

export default async function scrapePagingPage(
  url: string
): Promise<{ products: string[]; pages: string[] }> {
  const response = await axios.get(url);
  const selector = cheerio.load(response.data);
  const productUrls = selector(".product h3>a")
    .map((_i, el) => {
      return selector(el).attr("href");
    })
    .get();
  const pageUrls = selector(".paging a")
    .map((_i, el) => {
      return selector(el).attr("href");
    })
    .get();
  return {
    products: productUrls,
    pages: [...new Set(pageUrls)],
  };
}
