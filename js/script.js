const slider = document.querySelector('.slider');
const annualMonthly = document.querySelector('.price-monthly-basic');
const annualLine = document.querySelector('.price-annual-basic-line');
const annualYearly = document.querySelector('.price-annual-basic');
const monthlyLine = document.querySelector('.price-monthly-basic-line');

slider.addEventListener('click', function() {
	if(slider.classList.contains('left')) {
		annualMonthly.classList.remove('hide');
		annualYearly.classList.add('hide');
		annualLine.classList.add('hide');
		monthlyLine.classList.remove('hide');
		slider.classList.add('right');
		slider.classList.remove('left');
	} else if(slider.classList.contains('right')) {
		annualMonthly.classList.add('hide');
		annualYearly.classList.remove('hide');
		slider.classList.add('left');
		slider.classList.remove('right');
	}
})