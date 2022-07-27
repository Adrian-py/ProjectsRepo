//navbar
const navbarContainer = document.querySelector(".navbar-container");
window.onscroll = ()=>{
    if(window.scrollY>50){
        navbarContainer.style.background = "rgb(33, 32, 32, 0.8)";
    }else{
        navbarContainer.style.background = "rgb(33, 32, 32)";
    }
};