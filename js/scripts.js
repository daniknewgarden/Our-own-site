 //scroll
 const anchors = document.querySelectorAll('a.scroll-to')

 for (let anchor of anchors) {
 	anchor.addEventListener('click', function (e) {
 		e.preventDefault()

 		const blockID = anchor.getAttribute('href')

 		document.querySelector(blockID).scrollIntoView({
 			behavior: 'smooth',
 			block: 'start'
 		})
 	})
 }

 //swiper settings
let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
	  loop: true,

    // If we need pagination
    pagination: {
    	el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
	  }
			  
})
		  