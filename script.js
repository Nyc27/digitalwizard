const navToggle = document.querySelectorAll(".nav-toggle");

navToggle.forEach(button =>{
    button.addEventListener('click', function (){
        const mobileNav = document.querySelector(".mobile-nav");
        mobileNav.classList.toggle('nav-show');
        
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('overlay-show')
    
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const testimonialSelector = document.querySelectorAll('.dot');
    const testimonials = document.querySelectorAll('.testimonial');

    testimonialSelector[0].style.background = "white"

    testimonialSelector.forEach(button => {
        button.addEventListener('click', function() {
            const testimonialToShow = this.getAttribute('data-testimonial');
            const testimonialToDisplay = document.querySelector(`.${testimonialToShow}`);

            testimonialSelector.forEach(btn => {
                btn.style.background = 'none'
            })

            this.style.background = 'white';

            testimonials.forEach(testimonial => {
                if (!testimonialToDisplay.classList.contains('testimonial-show')) {
                    testimonial.style.top = '1000px';
                    testimonial.style.opacity = '0';
                    testimonial.classList.remove('testimonial-show');
                }
            });

            testimonialToDisplay.style.top = '50%';
            testimonialToDisplay.style.opacity = '1';
            testimonialToDisplay.classList.add('testimonial-show');
        });
    });
});

const testimonialMobile = document.querySelectorAll('.testimonial-mobile')

testimonialMobile.forEach(card => {
    card.addEventListener('click', function (){
        
        const portfText = this.querySelector('.text-portf');

        card.classList.toggle('show-more');
        portfText.classList.toggle('show-more')
    })
})
