// const swiper = require("swiper-bundle.min.js")

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })

}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav--link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperpopular = new Swiper(".popular--container", {
    loop: true,
    spaceBetween:24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination:{
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints:{
        768:{
            slidesPerView: 3,
        },
        1024:{
            spaceBetween: 48,
        },
    },
    
});


/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured--content', {
    selectors:{
        target: '.featured--card'
    },
    animation:{
        duration: 300
    }
});

/* Link active featured */ 
// mixerFeatured.on('mixEnd', function(){
//     const linkFeatured = document.querySelectorAll('.featured--item')
//     linkFeatured.forEach(l => {
//         l.classList.remove('active-featured')
//         this.classList.add('active-featured')
//     })
// })


const linkFeatured = document.querySelectorAll('.featured--item')
function activeFeatured(){
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('SCROLLUP')
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
     else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    // console.log(scrollY)
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')
        // sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.add('active-link')//sectionsClass.classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*='+ sectionId + ']').classList.remove('active-link')//sectionsClass.classList.add('active-link')
            // sectionsClass.classList.remove('active-link')
        }
    })
}
/*=============== SCROLL REVEAL ANIMATION ===============*/
// ScrollReveal().reveal('.headline');
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    // reset:true
})

sr.reveal(`.home__title, .popular--container , .features--img , .featured--filters`)
sr.reveal(`.home__subtitle`,{delay: 500})
sr.reveal(`.home__elec`,{delay: 600})
sr.reveal(`.home--img`,{delay: 800})
sr.reveal(`.home--car-data`,{delay: 900, interval:100, origin:'bottom'})
sr.reveal(`.home--button`,{delay: 1000, origin:'bottom'})
sr.reveal(`.about--group , .offer--data`,{origin:'left'})
sr.reveal(`.about--data , .offer--img`,{origin:'right'})
sr.reveal(`.features--map`,{delay: 600 , origin:'bottom'})
sr.reveal(`.features--card`,{interval: 300})
sr.reveal(`.featured--card , .loges--content , .footer--content `,{interval: 100})










