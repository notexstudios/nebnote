
let prevHeight = 0;

// back to top function
document.querySelector('#backToTop').addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' });
} )

document.addEventListener("scroll", (e) => {
    e.preventDefault()
    const header = document.querySelector('header')
    let backToTop = document.querySelector('#backToTop')
    let sideNav = document.querySelector('#sideNav')    
    const element = document.querySelector("body");
    const rect = element.getBoundingClientRect();
    let height = -(rect.y)
    if( prevHeight - height > 0 || height < 350){
        prevHeight = height
        header.classList.remove('-translate-y-24')
        sideNav.classList.add('translate-y-24')
        sideNav.querySelector('#sideNavBottom').classList.remove('translate-y-[15dvh]')
        if (height < 350) {
            backToTop.classList.add('hidden')
        }
        
    }
    else{
        prevHeight = height
        header.classList.add('-translate-y-24')
        sideNav.querySelector('#sideNavBottom').classList.add('translate-y-[15dvh]')
        sideNav.classList.remove('translate-y-24')
        backToTop.classList.remove('hidden')
    }

    function backTopStopper(e) {
        let width = window.innerWidth
        if(width < 640 && (!document.querySelector('#sideNav').classList.contains('translate-x-full'))){
        backToTop.classList.add('hidden')
        }
        
    }

    backTopStopper()


})

// side navigation panel ham functions

function hamFunction () {
    const hamButton = document.querySelector('#hamButton')
    const sidePanel = document.querySelector('#sideNav')
    const main = document.querySelector('main')
    sidePanel.classList.toggle('sm:w-[216px]')
    sidePanel.classList.toggle('sm:w-24')
    main.classList.toggle('sm:pr-[232px]')
    main.classList.toggle('sm:pr-28')

    topPanel = sidePanel.querySelector('#sideNavTop')
    panelRight = topPanel.querySelector('#sideNavTopRight')
    panelRight.classList.toggle('translate-x-10')


    bottomPanel = sidePanel.querySelector('#sideNavBottom')
    panelRight = bottomPanel.querySelector('#sideNavBottomRight')
    panelRight.classList.toggle('translate-x-10')

    let width = window.innerWidth
    if(width<640){
        sidePanel.classList.toggle('translate-x-full')
    }

}



function smallLarge() {
    let width = window.innerWidth
    if(width > 640){
        hamButton.addEventListener('mouseover' , (e) => {
            e.preventDefault()
            hamFunction()
        })
        
        hamButton.addEventListener('mouseout' , (e) => {
            e.preventDefault()
            hamFunction()
        })
        
        document.querySelector('#sideNav').addEventListener('mouseover' , (e) => {
            e.preventDefault()
            hamFunction()
        })
        
        document.querySelector('#sideNav').addEventListener('mouseout' , (e) => {
            e.preventDefault()
            hamFunction()
        })
    }
    else{
        hamButton.addEventListener('click' , (e) => {
            e.preventDefault()
            hamFunction()
        })
    }

}

smallLarge()
hamFunction()

// document.addEventListener('contextmenu', event => {
//     event.preventDefault()
//     let num = Math.ceil(Math.random()*10000000) 
//     alert(`User Reported || Report ID: ${num} `)
// }
// );
//   document.addEventListener('keydown', event => {
//     if (event.key === 'F12' || event.shiftKey && event.key === 'c' || event.shiftKey && event.key === 'C' ||  event.shiftKey && event.key === 'J' ||(event.ctrlKey && event.shiftKey && event.key === 'j'  || event.shiftKey && event.key === 'I' || event.ctrlKey && event.shiftKey && event.key === 'i' || event.ctrlKey && event.key === 'u' || event.ctrlKey && event.key === 'U' )) {
//       event.preventDefault();
//       let num = Math.ceil(Math.random()*10000000) 
//       alert(`User Reported || Report ID: ${num} `)
//     }
//   });

jQuery(document).ready(function($) {
    $(function () {
    var url = window.location.pathname; 
    console.log(url);
    var activePage = url.substring(url.lastIndexOf('/') + 1); 
        $('.nav-menu-item .nav-menu-link').each(function () { 
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1);
            console.log(linkPage);     
            if (activePage == linkPage) { 
                $(this).closest("li").addClass("text-text_special"); 
                console.log(this);
            }
        });
    })
    });