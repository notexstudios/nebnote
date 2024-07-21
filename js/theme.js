const button = document.querySelector('#themeToggler');
const image = document.querySelector('#themeImage');
const menu = document.querySelector('#hamImage');
const logo = document.querySelector('#logoImage');
let defaultValue = 1
button.addEventListener('click', (e) => {
    e.preventDefault()
    if(defaultValue){
        image.src = "/icons/sun.png"
        menu.src = "/icons/menudark.png"
        logo.src = "/icons/logodark.png"
        defaultValue = 0
    }
    else{
        image.src = "/icons/moon.png"
        menu.src = "/icons/menulight.png"
        logo.src = "/icons/logolight.png"
        defaultValue = 1
    }
    document.querySelector('header').classList.toggle('bg-backround_dark');
    document.querySelector('header').classList.toggle('bg-backround_light');
    document.querySelector('main').classList.toggle('bg-backround_dark');
    document.querySelector('main').classList.toggle('bg-backround_light');
    document.querySelector('body').classList.toggle('bg-backround_dark');
    document.querySelector('body').classList.toggle('bg-backround_light');
    document.querySelector('body').classList.toggle('text-backround_light');
    document.querySelector('#sideNav').classList.toggle('bg-backround_dark');
    document.querySelector('#sideNav').classList.toggle('bg-backround_light');
    document.querySelector('#sideNav').classList.toggle('text-backround_light');

    let divs = document.querySelectorAll('#sideNavTopLeft div')
    divs.forEach( (div) => {
        if (div.querySelector('div')) {
        div.querySelector('div').classList.toggle('border-backround_dark');
        div.querySelector('div').classList.toggle('border-backround_light');
        }
    })

    document.querySelector('#searchResultBoxSide').classList.toggle('bg-gray-200')
    document.querySelector('#searchResultBoxSide').classList.toggle('bg-backround_dark')
    document.querySelector('#searchResultBoxTop').classList.toggle('bg-gray-200')
    document.querySelector('#searchResultBoxTop').classList.toggle('bg-backround_dark')

} )

