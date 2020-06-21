var scroller=document.getElementsByClassName("scroller")[0];


document.addEventListener("scroll",btnto_top);

function btnto_top(){
    var deslizamiento;
    deslizamiento = document.documentElement.scrollTop;
    if(deslizamiento > 480){
        scroller.style.visibility="visible";
        scroller.style.opacity="1";
        scroller.style.cursor="pointer";
    }else{
        scroller.style.opacity="0";
        scroller.style.visibility="hidden";
        scroller.style.cursor="initial";
    }
}

scroller.addEventListener("click",backto_top);

function backto_top(){document.documentElement.scrollTop="0";}