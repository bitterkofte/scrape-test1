const puppeteer = require('puppeteer-extra');
// const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://bandcamp.com/search?q=meg+myers");

    // const src = await page.$eval("img", element => element.src);
    const xPath = '//*[@id="pgBd"]/div[1]/div[1]/div/ul/li[1]/a/div/img';
    const imgs = await page.$x(xPath);
    const firstIMG = await imgs[0].evaluate(e => e.src);
    console.log('src|alt: ', firstIMG);
    browser.close();
}

run();

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello world!");
// });

// const PORT = process.env. PORT || 3000;
// server.listen(PORT, () => console.log("Server is running on port 3000"));