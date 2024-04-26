
document.addEventListener('DOMContentLoaded', function() {
    var showVideo = document.querySelector(".hero-video");
    var showImg = document.querySelector(".hero-image");


    function checkScreenWidth() {
        if (window.innerWidth > 1100) {
  
            showVideo.innerHTML = '<source src="img/bg-digitalwizard.mp4" type="video/mp4">';
            showImg.innerHTML = '';
        } else {

            showVideo.innerHTML = '';
            showImg.innerHTML = '<img src="img/bg-dw.jpeg" alt="">'
        }
    }

    // Esegui la funzione quando la pagina viene caricata
    checkScreenWidth();

    // Aggiungi un listener per l'evento resize per controllare le dimensioni dello schermo
    window.addEventListener('resize', function() {
        checkScreenWidth();
    });
});




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

    testimonialSelector[0].style.background = "#FFB320"

    testimonialSelector.forEach(button => {
        button.addEventListener('click', function() {
            const testimonialToShow = this.getAttribute('data-testimonial');
            const testimonialToDisplay = document.querySelector(`.${testimonialToShow}`);

            testimonialSelector.forEach(btn => {
                btn.style.background = 'none'
            })

            this.style.background = '#FFB320';

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


// FUNZIONE BOTTONE SCOPRI I VANTAGGI 
const showServiceButton = document.querySelectorAll('.show-more-service');
const servizioTitle = document.querySelectorAll('.servizio-title');

if (window.innerWidth > 700){

    showServiceButton.forEach(showService => {
        showService.addEventListener('click', function () {
            const thisServizio = this.closest('.servizio');
            const phServizio = thisServizio.querySelectorAll('.servizio-p');
            const servizioTitle = thisServizio.querySelectorAll('.servizio-title');

            thisServizio.classList.add('service-detail');

            document.querySelectorAll('.servizio').forEach(servizio => {
                if (servizio !== thisServizio) {
                    servizio.classList.remove('service-detail');
                }
            });

            const goBack = document.querySelectorAll('.show-less-service');

            goBack.forEach(goBack => {
                goBack.addEventListener('click', function () {
                    thisServizio.classList.remove('service-detail')
                })
            })

            // Gestione del paragrafo visualizzato
            if (window.innerWidth > 700){
                servizioTitle[0].classList.add('servizio-attivo');
                phServizio[0].classList.add('show-service-p');
            }

            servizioTitle.forEach(singoloServizioTitle => {
                singoloServizioTitle.addEventListener('click', function () {
                    const phToShow = this.getAttribute('data-servizio');
                    const phToDisplay = document.getElementById(phToShow);

                    servizioTitle.forEach(title => {
                        title.classList.remove('servizio-attivo');
                    })

                    this.classList.add('servizio-attivo');

                    phServizio.forEach(p => {
                        p.classList.remove('show-service-p');
                    })

                    phToDisplay.classList.add('show-service-p');
                })
            });
        });
    });
}
const servizio = document.querySelectorAll('.servizio');

if (window.innerWidth < 700) {
    servizio.forEach(servizio =>{

        const servizioTitles = servizio.querySelectorAll('.servizio-title');
        const goBack = servizio.querySelector('.show-less-service');

        servizioTitles.forEach(title => {
            title.addEventListener('click', function () {
                const servizioSelezionato = this.getAttribute('data-servizio');
                const phToDisplay = document.getElementById(servizioSelezionato)
    
                servizioTitles.forEach(otherTitle => {
                    if (otherTitle.getAttribute('data-servizio') !== servizioSelezionato) {
                        otherTitle.classList.add('title-slide-left')
                    }
                });

                goBack.classList.add('go-back-visible');

                phToDisplay.classList.add('show-ph');

                goBack.addEventListener('click', function () {
                    servizioTitles.forEach(otherTitle => {
                        if (otherTitle.getAttribute('data-servizio') !== servizioSelezionato) {
                            otherTitle.classList.remove('title-slide-left');
                            otherTitle.classList.add('title-slide-right');
                        } else {
                            otherTitle.classList.remove('title-slide-left', 'title-slide-right');
                        }
                    });

                    phToDisplay.classList.remove('show-ph');
                    
                    goBack.classList.remove('go-back-visible');
                })

            });

            // Aggiungi un listener per l'evento di animazione che rimuove la classe 'title-slide-right' quando l'animazione è completata
            title.addEventListener('animationend', function() {
                this.classList.remove('title-slide-right');
            });
        });
    })
}



document.addEventListener('DOMContentLoaded', function() {
  // Controlla se l'URL contiene il valore desiderato
  var successPage = '?success=1'; // Cambia 'valore' con quello che desideri
  var url = window.location.href;

  if (url.indexOf(successPage) !== -1) {
    // Nasconde l'elemento se il valore è presente nell'URL
    document.getElementById('sezione-contattaci').style.display = 'none';
  }
});
