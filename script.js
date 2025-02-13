let images = document.querySelector(".images").children;
window.onscroll = function(){
    let scrollValue = scrollY;
   images[0].style.left = scrollValue + "px";
   images[1].style.fontSize = scrollValue/1.5 + "px";
   if(scrollValue > 121){
    images[1].style.fontSize = 121/1.5  + "px";
   }
   if(scrollValue > 448){
    images[1].style.visibility = "hidden";
   }
   else{
    images[1].style.visibility = "visible";
   }
   images[2].style.top = scrollValue * 2.5 + "px"; 
   images[3].style.top = scrollValue * 1.2 + "px";
   images[4].style.top = scrollValue * 0.7 + "px";  
   images[5].style.top = scrollValue + "px"; 
   images[6].style.top = scrollValue + "px";
   images[6].style.left = scrollValue * 2.5 + "px";   
   if(scrollValue > 174){
    document.querySelector(".images").style.backgroundImage = "linear-gradient(#376281,#10001f)";
   }
   else{
    document.querySelector(".images").style.backgroundImage = "linear-gradient(#200016,#10001f)";
   }       
};
function view(){
    document.getElementsByClassName("menu")[0].style.cssText="visibility:visible;";
}
function hide(){
    document.getElementsByClassName("menu")[0].style.cssText="visibility:hidden;";
}

if(window.innerWidth <= 480)
{
    window.onscroll = function(){
    let scrollValue = scrollY;
    images[1].style.fontSize = scrollValue/2.5 + "px";
   if(scrollValue > 121){
    images[1].style.fontSize = 121/1.8  + "px";
   }
   if(scrollValue > 448){
    images[1].style.visibility = "hidden";
   }
   else{
    images[1].style.visibility = "visible";
   }
   images[2].style.top = scrollValue * 2.5 + "px"; 
   images[3].style.top = scrollValue * 1.2 + "px";
   images[4].style.top = scrollValue * 0.7 + "px";  
   images[5].style.top = scrollValue + "px"; 
   images[6].style.top = scrollValue + "px";
   images[6].style.left = scrollValue * 2.5 + "px";   
   if(scrollValue > 174){
    document.querySelector(".images").style.backgroundImage = "linear-gradient(#376281,#10001f)";
   }
   else{
    document.querySelector(".images").style.backgroundImage = "linear-gradient(#200016,#10001f)";
   }       
};
}