import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.goto('https://deno.com');
await page.screenshot({ path: 'deno.png' });
await browser.close();
