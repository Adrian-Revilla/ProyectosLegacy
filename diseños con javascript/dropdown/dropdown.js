"use strict";
var btns=document.getElementsByTagName("button");
var i;


for(i=0;i<btns.length;i++){
    btns[i].addEventListener("click",desplegar);
}

function desplegar(){

    var div=this.nextElementSibling;
    var icon=this.children[0];
    
    if(div.className==""){
        
        div.style.display="block";
        div.style.height=div.scrollHeight + "px";
       
        div.className="yes";
        icon.className="minus";
        
    }else{
        div.style.height="0" + "px";
        div.style.padding="0px";
        
        div.className="";
        icon.className="plus";
        
    }
}