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

/*function button  Next picture*/
const imagesMonday = [];
const imagesDay = [];
const imagesEvening = [];
const imagesNight = [];
let currentImg = 0;

	function imageCards (){
		for(let i=1; i<=20; i++){
			str='https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/'+`${addZero(i)}` +'.jpg';				
			imagesMonday.push(str);
		}
		for(let i=1; i<=20; i++){
			str='https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/'+`${addZero(i)}` +'.jpg';		
			imagesDay.push(str);
		}
		for(let i=1; i<=20; i++){
			str='https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/'+`${addZero(i)}` +'.jpg';		
			imagesEvening.push(str);
		}
		for(let i=1; i<=20; i++){
			str='https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/'+`${addZero(i)}` +'.jpg';		
			imagesNight.push(str);
		}
	}
	imageCards();

// Add Zeros
	function addZero(n) {
		return (parseInt(n, 10) < 10 ? '0' : '') + n;
 	}

const imgCards = document.querySelector('img');
const btnNext = document.querySelector('.btn-next');

	btnNext.addEventListener('click', function(event)  {
		let today = new Date(),
		hour = today.getHours();
		
			if (hour<6) {
				currentImg += 1;
				if(currentImg > 19) currentImg = 0;
				imgCards.setAttribute("src",imagesNight[currentImg]);
			}
			if(hour<12 && hour>6) {
				currentImg += 1;
				if(currentImg > 19) currentImg = 0;
				imgCards.setAttribute("src",imagesMonday[currentImg]);
			}
			if(hour<18 && hour>12) {			
				currentImg += 1;
				if(currentImg > 19) currentImg = 0;
				imgCards.setAttribute("src",imagesEvening[currentImg]);
				
			}
			if(hour<24 && hour>18) {
				currentImg += 1;
				if(currentImg > 19) currentImg = 0;
				imgCards.setAttribute("src",imagesDay[currentImg]);
			}
	});

/*function button  Load picture*/
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('.editor');


	fileInput.addEventListener('change', function(e) {
  		const file = fileInput.files[0];
  		const reader = new FileReader();

  		reader.onload = () => {
			let img = document.createElement('img');		
    		img.src = reader.result;
    		img.onload = () => {
    			const imgTag = document.querySelectorAll('img');
    			imgTag.forEach((img) => img.remove());
				img.setAttribute("alt","img");
				img.setAttribute("crossorigin","anonymous");
			  	imageContainer.append(img);
    		}	
  		}  		
  		reader.readAsDataURL(file);
	});


/*function button  Save picture*/
const btnSave = document.querySelector('.btn-save');
 
btnSave.addEventListener('click', function(event) {
   const image = document.querySelector('img');
   let canvas = document.createElement('canvas');
   //console.log('canvas ', canvas);

   const ctx = canvas.getContext('2d');
   //console.log('ctx ', ctx);

   const link = document.createElement('a');
   //console.log("link ", link);

   link.href = canvas.toDataURL("image/png"); 
   //console.log("link.href ", link.href);

	 link.download = 'download.png';
   //console.log("link.download ", link.download);
	 link.click();
   //console.log("link.click() ", link.click());
	 link.delete;
});


/*function fullscreen*/
const fullscreen = document.querySelector('.fullscreen');

fullscreen.addEventListener('click', function (event) {
    // игнорирование событий, которые произошли не на данной кнопке
    if (!event.target.classList.contains('openfullscreen')) return;
    // если элемент уже в полноэкранном режиме, выйти из него
    // В противном случае войти в полный экран
    if (document.fullscreenElement) {
     document.exitFullscreen();
    } else {
     document.documentElement.requestFullscreen();
    }
}, false);