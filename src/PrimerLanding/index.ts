require('./index.scss');
require('./img/ejemplo.png');


let ArrowToUP = document.querySelector(".scroller") as HTMLDivElement;
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

ArrowToUP.addEventListener("click",()=>document.documentElement.scrollTop=0);
