const navToggle = document.querySelectorAll(".nav-toggle");

    navToggle.forEach(button =>{
        button.addEventListener('click', function (){
            const mobileNav = document.querySelector(".mobile-nav");
            mobileNav.classList.toggle('nav-show');
            
            const overlay = document.querySelector('.overlay');
            overlay.classList.toggle('overlay-show')
        
        })
    })
