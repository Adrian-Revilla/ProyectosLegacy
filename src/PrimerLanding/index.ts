require('./index.scss');

require('./img/ejemplo.png');
require('./img/github.png');
require('./img/home.png');

//TODO: MEJORAR FUERTEMENTE EL CSS.
let ArrowToUP = document.querySelector(".scroller") as HTMLDivElement;
let NavMenu = document.querySelector(".menu") as HTMLDivElement;
let MenuContent = document.querySelector('.menu_content') as HTMLUListElement;


let deslizamiento: number;


document.addEventListener("scroll", (e) => {
    
    deslizamiento = document.documentElement.scrollTop;
    if(deslizamiento > 480){
        ArrowToUP.style.visibility="visible";
        ArrowToUP.style.opacity="1";
        ArrowToUP.style.cursor="pointer";
    }else{
        ArrowToUP.style.opacity="0";
        ArrowToUP.style.visibility="hidden";
        ArrowToUP.style.cursor="initial";
    }
});
ArrowToUP.addEventListener("click", () => document.documentElement.scrollTop = 0);

NavMenu.addEventListener('click', (e : Event) => {
    let Anchor = e.target as HTMLAnchorElement;

    if (Anchor.id === 'menu_trigger' && window.innerWidth <= 575 ) {
        

        if (getComputedStyle(MenuContent).height == '0px') {
            MenuContent.style.height = `${MenuContent.scrollHeight.toString()}px`
        } else {
            MenuContent.style.height = '0px'
        }
        
        
    }
    
})


