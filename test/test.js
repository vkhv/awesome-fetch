const AwesomeFetch = require('./index.js').default;
// console.log(AwesomeFetch)
const fetch = new AwesomeFetch();
// console.log(fetch.get('/ya.ry'))

// test('should do plain get query', () => {
//   fetch.get('http://ya.ru', 'Error happend')
// 	.then(result => console.log(result))
// })

const puppeteer = require('puppeteer');

(async () => {

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	page.on('console', msg => console.log(msg))
	await page.addScriptTag({
		content: `console.log(${fetch.get})`
	})
	await page.evaluate(async () => {
		// await fetch.get('http://ya.ru', 'error')
	}) 

	await browser.close();
})();
