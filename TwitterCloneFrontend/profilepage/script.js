const tweetsOption = document.querySelector(".tweets-option"), tweetsAndRepliesOption = document.querySelector(".tweets-and-replies-option"), mediaOption = document.querySelector(".media-option"), likesOption = document.querySelector(".likes-option"), regularTweets = document.getElementsByClassName("tweet regular-tweets"), replyTweets = document.getElementsByClassName("tweet reply-tweets"), mediaTweets = document.getElementsByClassName("tweet media-tweets"), likeTweets = document.getElementsByClassName("tweet likes-tweets");

//Check if window is resized
let dir = "translateY";
if(window.innerWidth <= 425){
    dir = "translateX";
}else{
    dir = "translateY";
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 425){
        dir = "translateX";
    }else{
        dir = "translateY";
    }
    tweetsOption.click();
});


function toggleDim(){
    tweetsOption.style.color = "rgba(0,0,0,0.5)";
    tweetsAndRepliesOption.style.color = "rgba(0,0,0,0.5)";
    mediaOption.style.color = "rgba(0,0,0,0.5)";
    likesOption.style.color = "rgba(0,0,0,0.5)";
}

toggleDim();
tweetsOption.style.color = "rgba(0,0,0,1)";


const selector = document.querySelector(".selector");
tweetsOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(0%)`;
    toggleDim();
    tweetsOption.style.color = "rgba(0,0,0,1)";
    for(let i=0; i<regularTweets.length; i++) regularTweets[i].style.display = "flex";
    for(let i=0; i<replyTweets.length; i++) replyTweets[i].style.display = "flex";
    for(let i=0; i<mediaTweets.length; i++) mediaTweets[i].style.display = "flex";
    for(let i=0; i<likeTweets.length; i++) likeTweets[i].style.display = "flex";
});

tweetsAndRepliesOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(100%)`;
    toggleDim();
    tweetsAndRepliesOption.style.color = "rgba(0,0,0,1)";
    for(let i=0; i<regularTweets.length; i++) regularTweets[i].style.display = "flex";
    for(let i=0; i<replyTweets.length; i++) replyTweets[i].style.display = "flex";
    for(let i=0; i<mediaTweets.length; i++) mediaTweets[i].style.display = "none";
    for(let i=0; i<likeTweets.length; i++) likeTweets[i].style.display = "none";
});

mediaOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(200%)`;
    toggleDim();
    mediaOption.style.color = "rgba(0,0,0,1)";
    for(let i=0; i<regularTweets.length; i++) regularTweets[i].style.display = "none";
    for(let i=0; i<replyTweets.length; i++) replyTweets[i].style.display = "none";
    for(let i=0; i<mediaTweets.length; i++) mediaTweets[i].style.display = "flex";
    for(let i=0; i<likeTweets.length; i++) likeTweets[i].style.display = "none";
});

likesOption.addEventListener("click", ()=>{
    selector.style.transform = `${dir}(300%)`;
    toggleDim();
    likesOption.style.color = "rgba(0,0,0,1)";
    console.log(regularTweets);
    for(let i=0; i<regularTweets.length; i++) regularTweets[i].style.display = "none";
    for(let i=0; i<replyTweets.length; i++) replyTweets[i].style.display = "none";
    for(let i=0; i<mediaTweets.length; i++) mediaTweets[i].style.display = "none";
    for(let i=0; i<likeTweets.length; i++) likeTweets[i].style.display = "flex";
});