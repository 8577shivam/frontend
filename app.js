const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo')

//display moboile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//active menu when scrolling
const highlightmenu = () => {
    const elem = document.querySelector('highlight')
    const homeelem = document.querySelector('#homepage')
    const aboutelem = document.querySelector('#aboutpage')
    const serviceselem = document.querySelector('#servicespage')
    let scrollposition = window.scrollY

    //adds highlightto menu items
    if (window.innerWidth > 900 && scrollposition < 600) {
        homeelem.classList.add('highlight')
        aboutelem.classList.remove('highlight')
        return
    } else if (window.innerHeight > 900 && scrollposition < 1400) {
        aboutelem.classList.add('highlight')
        homeelem.classList.remove('highlight')
        serviceselem.classList.remove('highlight')
        return
    } else if (window.innerHeight > 900 && scrollposition < 2345) {
        serviceselem.classList.add('highlight')
        aboutelem.classList.remove('highlight')
        return
    }

    if ((elem && window.innerWidth < 900 && scrollposition < 600) || elem) {
        elem.classList.remove('highlight')
    }
}
window.addEventListener('scroll', highlightmenu)
window.addEventListener('click', highlightmenu)


//close mobile menu
const hidemobilemenu = () => {
    const menubars = document.querySelector('.is-active')
    if (window.innerWidth <= 760 && menubars) {
        menu.classList.toggle('is-active')
        menu.classList.remove('active')
    }
}
menuLinks.addEventListener('click', hidemobilemenu)
navLo900addEventListener('click', hidemobilemenu)