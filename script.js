const inputs = document.querySelectorAll('.filters input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
	const filter = event.target;
 	filter.nextElementSibling.innerHTML = filter.value;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);	
}
    inputs.forEach(input => input.addEventListener('input', handleUpdate));

/*function button  Reset*/
const btnReset = document.querySelector('.btn-reset');

btnReset.addEventListener('click', function(e) {
	inputs.forEach((input) => {
	const suffix = input.dataset.sizing;
		if(input.name == 'saturate'){
			input.value = 100;
			input.nextElementSibling.innerHTML = input.value;
			document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
		} else {
			input.value = 0;
			input.nextElementSibling.innerHTML = input.value;
			document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
		}
	});
});