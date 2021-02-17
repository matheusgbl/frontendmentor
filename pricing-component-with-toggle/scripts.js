const toggle = document.getElementById('toggleswitch');
const price = document.getElementById('price');
const price1 = document.getElementById('price1');
const price2 = document.getElementById('price2');

toggle.addEventListener('change', e => {
	price.classList.toggle('monthly-show');
});

toggle.addEventListener('change', e => {
	price1.classList.toggle('monthly-show');
});

toggle.addEventListener('change', e => {
	price2.classList.toggle('monthly-show');
});