import { default as puppeteer } from 'npm:puppeteer';

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.goto('https://deno.com');
await page.screenshot({ path: 'deno.png' });
await browser.close();
