//navbar
const navbarContainer = document.querySelector(".navbar-container");
window.onscroll = ()=>{
    if(window.scrollY>50){
        navbarContainer.style.background = "rgb(33, 32, 32, 0.8)";
    }else{
        navbarContainer.style.background = "rgb(33, 32, 32)";
    }
};

//landing image slider (jquery animation) part
$(document).ready(function(){
    let counter = 0, move = 840;
    $(".slider").animate({
        left: -1*counter*move
    }, 500)
    //if screen is resized 
    $(window).resize(()=>{
        if($(window).width()>800){
            move = 840;
        }else if($(window).width()<=426){
            move = 368;
        }else if($(window).width()<=800){
            move = 627.2;
        }
        console.log("resize " + move + "counter " + counter);
        $(".slider").animate({
            left: -1*counter*move
        }, 500)
    })

    //button clicks
    $("#landingLeftArrow").on("click", ()=>{
        counter--;
        if(counter<=-1){
            counter = 4;
        }
        $(".slider").animate({
            left: -1*counter*move
        }, 500)
    })
 
    $("#landingRightArrow").on("click", ()=>{
        counter++;
        if(counter==5){
            counter = 0;
        }
        $(".slider").animate({
            left: -1*counter*move
        }, 500)
    })
});

// storyline sliding text
const left = document.querySelector("#storylineLeftArrow"), right = document.querySelector("#storylineRightArrow");
const regName = document.querySelector("#region-name"), regDesc = document.querySelector("#region-desc");
const seperator = document.querySelector("#seperator2");

let counter = 0;
const regNames = ["Mondstadt", "Li Yue"], regDescs = ["One of the seven nations in Teyvat. It is the city-state that worships Barbatos, the Anemo Archon.", "One of the seven nations in Teyvat. It is the city-state that worships Morax, the Geo Archon."];
regName.innerHTML = regNames[counter];
regDesc.innerHTML = regDescs[counter];

function change(){
    regName.innerHTML = regNames[counter];
    regDesc.innerHTML = regDescs[counter];
}

function reapear(){
    regName.style.transform = "translateX(0)";
    regName.style.opacity = 1;
    regDesc.style.transform = "translateX(0)";
    regDesc.style.opacity = 1;
    seperator.style.transform = "translateX(0)";
    seperator.style.opacity = 1;
}

left.addEventListener("click", ()=>{
    counter--;
    if(counter<0){
        counter=1;
    }
    regName.style.transform = "translateX(-22%)";
    regName.style.opacity = 0;
    seperator.style.transform = "translateX(-20%)";
    seperator.style.opacity = 0;
    regDesc.style.transform = "translateX(-15%)";
    regDesc.style.opacity = 0;
    setTimeout(change, 250);
    setTimeout(reapear, 250);
});

right.addEventListener("click", ()=>{
    counter++;
    if(counter>1){
        counter=0;
    }
    regName.style.transform = "translateX(22%)";
    regName.style.opacity = 0;
    seperator.style.transform = "translateX(20%)";
    seperator.style.opacity = 0;
    regDesc.style.transform = "translateX(15%)";
    regDesc.style.opacity = 0;
    setTimeout(change, 250);
    setTimeout(reapear, 250);
})