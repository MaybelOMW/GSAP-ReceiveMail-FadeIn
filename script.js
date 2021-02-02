function startAnimation() {
	var tl = new TimelineMax();
	let flip = document.querySelector('.flip');
	let letter = document.querySelector('.letter');
	let container = document.querySelector('.container');

	// Envelope open
	function open(){
		flip.classList.add('open');
		flip.classList.remove('close');
		setTimeout(function(){
			letter.classList.add('letterOpen');
			letter.classList.remove('letterClose');
			letter.style.zIndex = '7';
		}, 400);
	}

	tl.to(container, 1.5, {display:"block", opacity:1.0, "transform": "translate(300px, 0px) rotate3d(0, 0, 1, 20deg)"}, "fade_in");
	tl.to(setTimeout(open, 1500));

	addEventListeners();
}

window.addEventListener("load", startAnimation);