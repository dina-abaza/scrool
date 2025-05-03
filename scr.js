let scrollcontainer=document.querySelector(".gallery");
let backbtn=document.getElementById("backbtn");
let nextbtn=document.getElementById("nextbtn");


scrollcontainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft+=evt.deltay;
    scrollcontainer.style.scrollBehavior="auto";
    
});

nextbtn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft+=800;
});

backbtn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft-=800;
});