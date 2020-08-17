const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')

console.log('Bem vindo ao Bot conversor!');


async function robo() {    
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar'
    const moedaFinal = readlineSync.question('Informe a moeda desejada: ') || 'real'
    const qualquerUrl = `https://www.google.com/search?ei=63MyX8XzKIy_5OUPgvuVoA8&q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQRhCCAjICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoFCAAQsQM6CggAELEDEIMBEEM6CAgAELEDEIMBOgcIABCxAxBDOgQIABBDOg8IABCxAxCDARBDEEYQggJQpewFWL-ABmC4ggZoAHAAeACAAcwBiAHgDJIBBTkuNS4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwiFlbvK-ZLrAhWMH7kGHYJ9BfQQ4dUDCAw&uact=5`
    await page.goto(qualquerUrl);
    // await page.screenshot({path: 'example.png'});

    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
    })

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
      await browser.close();
}

robo()