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

    function burger(){
        const   hamburgerBtn = document.querySelector('.hamburger'),
                hamburgerItem = document.querySelectorAll('.hamburger-menu__link'),
                hamburgerMenu = document.querySelector('.hamburger-menu');


        hamburgerBtn.addEventListener('click', () => {
            console.log('aaaas');
            hamburgerBtn.classList.toggle('hamburger--active');
            hamburgerMenu.classList.toggle('hamburger-menu--active');
            if(hamburgerBtn.classList.contains('hamburger--active')){
                document.body.classList.add('body-hidden');
            } else {
                document.body.classList.remove('body-hidden');
            }
        });

        hamburgerMenu.addEventListener('click', (event) => {
            var target = event.target;

            for(var i = 0; i < hamburgerItem.length; i++){
                if(target == hamburgerItem[i]){
                    hamburgerBtn.classList.remove('hamburger--active');
                    hamburgerMenu.classList.remove('hamburger-menu--active');
                    document.body.classList.remove('body-hidden');
                    scroll(hamburgerItem[i]);
                }
            }

        });
    }
    burger();