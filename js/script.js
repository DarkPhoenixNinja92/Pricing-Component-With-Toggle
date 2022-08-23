const slider = document.querySelector('.slider');
const priceMonthly = document.querySelectorAll('.price-monthly');
const priceAnnual = document.querySelectorAll('.price-annual');
const monthlyLine = document.querySelectorAll('.price-monthly-line');
const annualLine = document.querySelectorAll('.price-annual-line');

slider.addEventListener('click', function() {
	if(slider.classList.contains('left')) {
		priceMonthly.forEach(monthlyPrice => {
			monthlyPrice.classList.remove('hide');
		});
		priceAnnual.forEach(annualPrice => {
			annualPrice.classList.add('hide');
		});
		annualLine.forEach(lineAnnual => {
			lineAnnual.classList.add('hide');
		});
		monthlyLine.forEach(lineMonthly => {
			lineMonthly.classList.remove('hide');
		});
		slider.classList.add('right');
		slider.classList.remove('left');
	} else if(slider.classList.contains('right')) {
		priceMonthly.forEach(monthlyPrice => {
			monthlyPrice.classList.add('hide');
		});
		priceAnnual.forEach(annualPrice => {
			annualPrice.classList.remove('hide');
		});
		annualLine.forEach(lineAnnual => {
			lineAnnual.classList.remove('hide');
		});
		monthlyLine.forEach(lineMonthly => {
			lineMonthly.classList.add('hide');
		});
		slider.classList.add('left');
		slider.classList.remove('right');
	}
});