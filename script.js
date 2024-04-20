// AUTO PLAY VIDEO

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    video.play();
})



// ABILITA MENU MOBILE

const menuButton = document.querySelector('.nav-toggle');
const mobileUl = document.querySelector('.nav-ul');

menuButton.addEventListener('click', function () {
    mobileUl.classList.toggle('ul-visible');
    const row = document.querySelectorAll('.row');
    row.forEach(row => {
        row.classList.toggle('icon-close');
    });
    document.body.classList.toggle('no-scroll')
})


// LINK INTERNO --> CHIUSURA MENU

document.querySelectorAll('ul a').forEach(link => {
    link.addEventListener('click', function() {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            const nomeId = href.substring(1);
            const idPulito = document.getElementById(nomeId);

            if (idPulito) {
                mobileUl.classList.remove('ul-visible');

                document.body.classList.remove('no-scroll');
            }
        }
    });
});

// HERO WORDS CHANGING

const words = ["WEB DESIGN", "LOCAL SEO", "seo","SEM", "WEB MARKETING"];
const title = document.querySelector('.change-word');

let index = 0;

function changeTitle() {
    title.classList.add('rotating-out');
    setTimeout(() => {
        title.textContent = words[index];
        title.classList.remove('rotating-out');
        title.classList.add('rotating-in');
        setTimeout(() => {
            title.classList.remove('rotating-in');
        }, 3000);
        index = (index + 1) % words.length;
    }, 500);
}

setInterval(changeTitle, 3000);



// TESTISìMONIAL SECTION

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
