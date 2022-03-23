// Show menu 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggleId && navId){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show__menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const menu = document.getElementById('nav-menu');
    menu.classList.remove('show__menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));


// Acitve links on scroll sections
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');

        }
    })
}
window.addEventListener('scroll', scrollActive);



// Change Background header on scroll
function scrollHeader() {
    const header = document.getElementById('header');

    if(this.scrollY >= 200){
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener("scroll", scrollHeader);


// Show scroll top
function showScrolltop() {
    const scrollTop = document.getElementById('scroll-top');

    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scrolltop');
    } else {
        scrollTop.classList.remove('show-scrolltop');
    }
}

window.addEventListener("scroll", showScrolltop);


// Dark and light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentThem = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getIcon = () => themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedTheme === "bx-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentThem);
    localStorage.setItem("selected-icon", getIcon);
})


// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__content, .contact__button,
            .footer__content`,{
    interval: 200
})