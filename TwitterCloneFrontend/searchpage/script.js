const tweetsOption = document.querySelector("#tweets-option"), latestOption = document.querySelector("#latest-option"), peopleOption = document.querySelector("#people-option"), photosOption = document.querySelector("#photos-option"), videosOption = document.querySelector("#videos-option");

// check window size
let dir = "translateY";
if(window.innerWidth <= 425){
    dir = "translateX";
}else{
    dir = "translateY";
}

//check if window is resized
window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 425){
        dir = "translateX";
    }else{
        dir = "translateY";
    }
    tweetsOption.click();
});
console.log(dir);

function toggleDim(){
    tweetsOption.style.color = "rgba(0,0,0,0.5)";
    latestOption.style.color = "rgba(0,0,0,0.5)";
    peopleOption.style.color = "rgba(0,0,0,0.5)";
    photosOption.style.color = "rgba(0,0,0,0.5)";
    videosOption.style.color = "rgba(0,0,0,0.5)";
}
toggleDim();
tweetsOption.style.color = "rgba(0,0,0,1)";

const selector = document.querySelector("#selector");
tweetsOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(0%)`;
    toggleDim();
    tweetsOption.style.color = "rgba(0,0,0,1)";
});

latestOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(100%)`;
    toggleDim();
    latestOption.style.color = "rgba(0,0,0,1)";
});

peopleOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(200%)`;
    toggleDim();
    peopleOption.style.color = "rgba(0,0,0,1)";
});

photosOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(300%)`;
    toggleDim();
    photosOption.style.color = "rgba(0,0,0,1)";
});

videosOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(400%)`;
    toggleDim();
    videosOption.style.color = "rgba(0,0,0,1)";
});