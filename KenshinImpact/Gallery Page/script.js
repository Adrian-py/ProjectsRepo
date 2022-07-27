//navbar
const navbarContainer = document.querySelector(".navbar-container");
window.onscroll = ()=>{
    if(window.scrollY>50){
        navbarContainer.style.background = "rgb(33, 32, 32, 0.8)";
    }else{
        navbarContainer.style.background = "rgb(33, 32, 32)";
    }
};


//gallery
let geoCounter = 0, enemiesCounter = 0, elementalCounter = 0, bossCounter = 0;

const geoImage = document.querySelector("#geography-slider"), enemyImage = document.querySelector("#enemies-slider"), elementalImage=  document.querySelector("#elemental-slider"), bossImage = document.querySelector("#boss-slider");

const geoRegion = document.querySelector("#region-name"), geoText = document.querySelector("#region-desc"), enemiesName = document.querySelector("#enemies-name"), elementalName = document.querySelector("#elemental-name"), bossName = document.querySelector("#boss-name");


function show(){
    geoRegion.style.opacity = 1;
    geoImage.style.opacity = 1;
    geoText.style.opacity = 1;
    geoImage.src = "./images/slider/geography/" + geoLinks[geoCounter];
    geoText.innerHTML = geoName[geoCounter];
    if(geoCounter>9){
        geoRegion.innerHTML = "Li Yue";
    }else if(geoCounter<=9){
        geoRegion.innerHTML = "Monstadt";
    }

    enemyImage.style.opacity = 1;
    enemiesName.style.opacity = 1;
    enemiesName.innerHTML = enemyNames[enemiesCounter];
    enemyImage.src = "./images/slider/enemies/" + enemiesLink[enemiesCounter];

    elementalImage.style.opacity = 1;
    elementalName.style.opacity = 1;
    elementalName.innerHTML = elementalNames[elementalCounter];
    elementalImage.src = "./images/slider/elemental/" + elementalLinks[elementalCounter];

    bossImage.style.opacity = 1;
    bossName.style.opacity = 1;
    bossName.innerHTML = bossNames[bossCounter];
    bossImage.src = "./images/slider/boss/" + bossLinks[bossCounter];
    return;
}

// geo
const geoLeft = document.querySelector("#geographyLeftArrow"), geoRight = document.querySelector("#geographyRightArrow");
const geoLinks = ["1 The City of Wind.png", "2 The Marsh of Celestial Guardians.png", "3 Windswept Wilderness.png", "4 Land of Clear Springs.png", "5 Manor of Daybreak.png", "6 Favonius Cathedral.png", "7 Knights of Favonius - Library.png", "8 Ancient Thousand Winds Temple.png", "9 Forgotten Sword Cemetry.png", "10 Abandoned Capital of Howling Winds.png", "11 Where Merchants Flock and All Ships Dock.png", "12 Feiyun Slope.png", "13 Chihu Rock.png", "14 Yujing Terrace.png", "15 Vigilant Guardian's Vantage Point.png", "16 Marsh of Rustling Reeds.png", "17 Ruins of Guili.png", "18 A Home in the Hills.png", "19 Where Mountains Peak Beyond the Clouds.png", "20 Moonlit Tree.png", "21 Mist-Veiled Stone Forest.png", "22 weeping Garden.png", "23 A Drop in the Ocean.png", "24 Beyond the Chasm.png", "25 Dunyu Ruins.png", "26 Qingxiu's Forsaken Tower.png", "27 Nine Pillars of Peace.png"], geoName = ["The City of Wind", "The Marsh of Celestial Guardians", "Windswept Wilderness", "Land of Clear Springs", "Manor of Daybreak", "Favonius Cathedral", "Knights of Favonius - Library", "Ancient Thousand Winds Temple", "Forgotten Sword Cemetry", "Abandoned Capital of Howling Winds", "Where Merchants Flock and All Ships Dock", "Feiyun Slope", "Chihu Rock", "Yujing Terrace", "Vigilant Guardian's Vantage Point", "Marsh of Rustling Reeds", "Ruins of Guili", "A Home in the Hills", "Where Mountains Peak Beyond the Clouds", "Moonlit Tree", "Mist-Veiled Stone Forest", "weeping Garden", "A Drop in the Ocean", "Beyond the Chasm", "Dunyu Ruins", "Qingxiu's Forsaken Tower", "Nine Pillars of Peace"];

geoLeft.addEventListener("click",()=>{
    geoCounter--;
    if(geoCounter<0){
        geoCounter = 26;
    }   
    geoRegion.style.opacity = 0;
    geoImage.style.opacity = 0;
    geoText.style.opacity = 0;
    setTimeout(show, 250);
});

geoRight.addEventListener("click",()=>{
    geoCounter++;
    if(geoCounter>26){
        geoCounter = 0;
    }
    geoRegion.style.opacity = 0;
    geoImage.style.opacity = 0;
    geoText.style.opacity = 0;
    setTimeout(show, 250);
});

// enemies
const enemiesLeft = document.querySelector("#enemiesLeftArrow"), enemiesRight = document.querySelector("#enemiesRightArrow");

const enemiesLink = ["Fatui Electro Cicin Mage.png", "Pyro Abyss Mage.png", "Pyro Whopperflower.png", "Ruin Hunter.png", "Ruin-Grader.jpg", "Stonehide Lawachurl.png", "Treasure Hoarders - Scout.png", "Unusual Hilichurl.png"], enemyNames = ["Fatui Electro Cicin Mage", "Pyro Abyss Mage", "Pyro Whopperflower", "Ruin Hunter", "Ruin-Grader", "Stonehide Lawachurl", "Treasure Hoarders - Scout", "Unusual Hilichurl"];

enemiesLeft.addEventListener("click", ()=>{
    enemiesCounter--;
    if(enemiesCounter<0){
        enemiesCounter = 7;
    }
    enemyImage.style.opacity = 0;
    enemiesName.style.opacity = 0;
    setTimeout(show, 250);
});

enemiesRight.addEventListener("click", ()=>{
    enemiesCounter++;
    if(enemiesCounter>7){
        enemiesCounter = 0;
    }
    enemyImage.style.opacity = 0;
    enemiesName.style.opacity = 0;
    setTimeout(show, 250);
});

// elemental
const elementalLeft = document.querySelector("#elementalLeftArrow"), elementalRight = document.querySelector("#elementalRightArrow");

const elementalLinks = ["Burning.png", "Crystallize.png", "Electro-Charged.png", "Frozen.png", "Melt.png", "Overloaded.png", "Superconduct.png", "Vaporize.png"], elementalNames = ["Burning", "Crystallize", "Electro-Charged", "Frozen", "Melt", "Overloaded", "Superconduct", "Vaporize"];

elementalLeft.addEventListener("click", ()=>{
    elementalCounter--;
    if(elementalCounter<0){
        elementalCounter = 7;
    }
    elementalImage.style.opacity = 0;
    elementalName.style.opacity = 0;
    setTimeout(show, 250);
});

elementalRight.addEventListener("click", ()=>{
    elementalCounter++;
    if(elementalCounter>7){
        elementalCounter = 0;
    }
    elementalImage.style.opacity = 0;
    elementalName.style.opacity = 0;
    setTimeout(show, 250);
});

// boss
const bossLeft = document.querySelector("#bossLeftArrow"), bossRight = document.querySelector("#bossRightArrow");

const bossLinks = ["Anemo Hypostatis.png", "Azhdaha.png", "Childe.png", "Lupus Boreas, Dominator of Wolves.png", "Oceanid.png", "Primo Geoshivap.png", "Stormterror.png"], bossNames = ["Anemo Hypostatis", "Azhdaha", "Childe", "Lupus Boreas, Dominator of Wolves", "Oceanid", "Primo Geoshivap", "Stormterror"];

bossLeft.addEventListener("click", ()=>{
    bossCounter--;
    if(bossCounter<0){
        bossCounter = 6;
    }
    bossImage.style.opacity = 0;
    bossName.style.opacity = 0;
    setTimeout(show, 250);
});

bossRight.addEventListener("click", ()=>{
    bossCounter++;
    if(bossCounter>6){
        bossCounter = 0;
    }
    bossImage.style.opacity = 0;
    bossName.style.opacity = 0;
    setTimeout(show, 250);
});