# ts-scraper

A lightweight web scraper built using Deno, Axios, and Cheerio to extract and parse data from [web-scraping.dev](https://web-scraping.dev/).

## Description
This project implements a simple web scraper using:

- **Deno**: A secure runtime for JavaScript and TypeScript.
- **Axios**: For making HTTP requests to fetch website content.
- **Cheerio**: For parsing and extracting data from HTML.

The scraper can be used to gather information such as product listings, article titles, or any other structured data available on websites.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Deno](https://deno.com/) - A modern runtime for JavaScript and TypeScript

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/YourUsername/ts-scraper.git
cd ts-scraper
```
### 2. Install Dependencies

Since Deno manages dependencies differently from Node.js, no npm install is needed. You can run the project directly, and Deno will automatically download and cache the necessary modules.

### 3. Running the Scraper

To run the scraper, execute the following command:

```bash
deno run --allow-net --allow-read main.ts
```
- ```--allow-net``` : Grants network access for Axios to make HTTP requests.
- ```--allow-read``` : Allows reading from files if needed for further parsing.


### License

This project is licensed under the MIT License.