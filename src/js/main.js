	var slideIndex = 1;

	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
        var 	i,
				name = document.getElementById('slideText'),
				slides = document.getElementsByClassName("carousel-item");

		console.log(slides.length);

		if( n > slides.length) {
			slideIndex = 1
		}
		if( n < 1 ) {
			slideIndex = slides.length
		}
		for( i = 0; i < slides.length; i++ ) {
			slides[i].style.display = "none"
		}
		slides[slideIndex-1].style.display = "block";

		var data = slides[slideIndex-1].getAttribute('data-text');
		name.innerHTML = data;
	}
