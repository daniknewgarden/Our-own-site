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

 //header scroll color

 const block = document.getElementById('block');

const scheme = {
    blue: 'green',
  green: 'red',
  red: 'blue'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if(entry.intersectionRatio < 0.4) { return; }
    block.className = scheme[entry.target.className];
  });
}, {
    threshold: [0.4, 0.8]
});

Array.from(document.getElementsByTagName('section')).forEach(section => observer.observe(section))

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


		  