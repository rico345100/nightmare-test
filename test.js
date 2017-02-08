var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
.goto('http://localhost:3000')
.type('#id', '.modernator')
.type('#password', '1234567890')
.click('input[type=submit]')
.evaluate(function() {
	return document.getElementById('result').innerText;
})
.end()
.then((result) => {
	console.log('Result: ', result);
})
.catch((err) => {
	console.log('Error:', err);
})
.then(() => {
	console.log('Test over.');
});