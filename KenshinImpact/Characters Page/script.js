//navbar
const navbarContainer = document.querySelector(".navbar-container");
window.onscroll = ()=>{
    if(window.scrollY>50){
        navbarContainer.style.background = "rgb(33, 32, 32, 0.8)";
    }else{
        navbarContainer.style.background = "rgb(33, 32, 32)";
    }
};

//popup
const popupContainer = document.querySelector(".popup"),popupImage = document.querySelector("#character-image"), popupName = document.querySelector("#name"), popupDesc = document.querySelector("#desc");
const closeButton = document.querySelector("#close");

closeButton.addEventListener("click", ()=>{
    popupContainer.style.display = "none";
    popupContainer.style.opacity = 0;
})

// sidebar
const pyroLogo = document.querySelector("#pyro-logo"), hydroLogo = document.querySelector("#hydro-logo"), geoLogo = document.querySelector("#geo-logo"), dendroLogo = document.querySelector("#dendro-logo"), electroLogo = document.querySelector("#electro-logo"), cryoLogo = document.querySelector("#cryo-logo"), anemoLogo = document.querySelector("#anemo-logo");

// character container and title
const charContainer = document.querySelector(".characters"), charTitle = document.querySelector("#character-element-title");

// footer
const footer = document.querySelector(".footer-container");

// On window load show pyro
window.onload = ()=>{
    pyroLogo.click();
};

// character names
const pyro = ["amber", "bennett", "diluc", "hutao", "klee", "xiangling", "xinyan", "yanfei"], hydro=["barbara", "mona", "tartaglia", "xingqiu"], geo = ["albedo", "ningguang", "noelle", "traveler", "zhongli"], electro = ["beidou", "fishcl", "keqing", "lisa", "razor"], cryo = ["chongyun", "diona", "eula", "ganyu", "kaeya", "qiqi", "rosaria"], anemo = ["jean", "sucrose", "venti", "xiao"];

// event listeners
pyroLogo.addEventListener("click", ()=>{
    let len = pyro.length;
    charContainer.innerHTML = "";
    footer.style.top = 40+Math.ceil(len/2)*43+9 + "vh";
    charTitle.innerHTML = "Pyro";

    pyroLogo.style.filter = "brightness(150%)";
    hydroLogo.style.filter = "brightness(100%)";
    geoLogo.style.filter = "brightness(100%)";
    electroLogo.style.filter = "brightness(100%)";
    dendroLogo.style.filter = "brightness(100%)";
    anemoLogo.style.filter = "brightness(100%)";
    cryoLogo.style.filter = "brightness(100%)";

    for(let i=0; i<len; i++){
        let insert = document.createElement("div");
        insert.className = pyro[i];
        insert.style.background = "rgba(255, 132, 132)";
        let charImg = document.createElement("img");
        charImg.src = "./characters/pyro/" + pyro[i] + ".png";
        insert.appendChild(charImg);
        charContainer.appendChild(insert);
    }

    const amber = document.querySelector(".amber"), bennett = document.querySelector(".bennett"), xiangling = document.querySelector(".xiangling"), diluc = document.querySelector(".diluc"), hutao = document.querySelector(".hutao"), klee = document.querySelector(".klee"), xinyan = document.querySelector(".xinyan"), yanfei = document.querySelector(".yanfei");

    amber.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/amber.png";
        popupName.innerHTML = "Amber";
        popupDesc.innerHTML = "Her personality is cheerful and friendly; she is always ready to help any citizen that needs helps whether it is a simple or complicated task. She is also known as an Outrider and the three-time champion of Mondstadt’s Gliding Championship";
    })

    bennett.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/bennett.png";
        popupName.innerHTML = "Bennett";
        popupDesc.innerHTML = "An orphan that was discovered by and elderly adventurer as a baby, he was raised in Monstadt’s Adventurers Guild. He is the one and only member of “Benny’s Adventure Team” reason is because of the misfortune that follows him, everyone left the team after experiencing it.";
    })

    xiangling.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/xiangling.png";
        popupName.innerHTML = "Xiangling";
        popupDesc.innerHTML = "She is the Head Chef at Wanmin Restaurant and a waitress there; she is very passionate about cooking and known for her signature hot and spicy dishes. As a chef she is not afraid of trying different recipes or exotic ingredients that makes her dishes unique.";
    })

    diluc.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/diluc.png";
        popupName.innerHTML = "Diluc";
        popupDesc.innerHTML = "He is the owner of the Dawn Winery and a nobleman one of the wealthiest men in Mondstadt society. He was a Knights of Favonius, but some past incident cause him to part away with them, however, Diluc has sworn to protect Monstadt no matter what.";
    })

    hutao.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/hutao.png";
        popupName.innerHTML = "Hu Tao";
        popupDesc.innerHTML = "She is the 77th Director of the Wangsheng Funeral Parlour, a person who is vital in managing Liyue’s funerary affairs. She is also a talented poet where many of her “masterpieces” have spread around Liyue’s society by word of mouth.";
    })

    klee.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/klee.png";
        popupName.innerHTML = "Klee";
        popupDesc.innerHTML = "The daughter of the intrepid — and destructive — adventurer Alice, she takes after her mother in many ways, much to the consternation of the Knights of Favonius whom has been entrusted to.";
    })

    xinyan.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/xinyan.png";
        popupName.innerHTML = "Xinyan";
        popupDesc.innerHTML = "Rock ‘n’ Roll is a quite unpopular style of music in Liyue, however she rebels against prejudices. She has been performing her music throughout Liyue Harbor and gains a fanbases of her own.";
    })

    yanfei.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/pyro/yanfei.png";
        popupName.innerHTML = "Yanfei";
        popupDesc.innerHTML = "She is the child of an adeptus father and human mother and in the care of Madam Ping. She devotes herself to protect the fairness of contracts in Liyue with her identity as a legal adviser with her unique experience and methods.";
    })
});

hydroLogo.addEventListener("click", ()=>{
    let len = hydro.length;
    charContainer.innerHTML = "";
    footer.style.top = 40+Math.ceil(len/2)*43+9 + "vh";
    charTitle.innerHTML = "Hydro";
    pyroLogo.style.filter = "brightness(100%)";
    hydroLogo.style.filter = "brightness(150%)";
    geoLogo.style.filter = "brightness(100%)";
    electroLogo.style.filter = "brightness(100%)";
    dendroLogo.style.filter = "brightness(100%)";
    anemoLogo.style.filter = "brightness(100%)";
    cryoLogo.style.filter = "brightness(100%)";

    for(let i=0; i<len; i++){
        let insert = document.createElement("div");
        insert.className = hydro[i];
        insert.style.background = "rgb(224, 236, 236)";
        let charImg = document.createElement("img");
        charImg.src = "./characters/hydro/" + hydro[i] + ".png";
        insert.appendChild(charImg);
        charContainer.appendChild(insert);
    }

    const barbara = document.querySelector(".barbara"), mona = document.querySelector(".mona"), tartaglia = document.querySelector(".tartaglia"), xingqiu = document.querySelector(".xingqiu");

    barbara.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/hydro/barbara.png";
        popupName.innerHTML = "Barbara";
        popupDesc.innerHTML = "She is the deaconess of the Church of Favonius and self-proclaimed “idol” after learning about them from the intrepid adventurer Alice. She is also the younger sister of Jean.";
    })

    mona.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/hydro/mona.png";
        popupName.innerHTML = "Mona";
        popupDesc.innerHTML = "A mysterious young astrologer of great skill and equality-great pride, she has taken up residence in Mondstadt to avoid incurring the wrath of her master after unwillingly reading her master’s diary.";
    })

    tartaglia.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/hydro/tartaglia.png";
        popupName.innerHTML = "Tartaglia";
        popupDesc.innerHTML = "He is the most recent member of the Eleven Harbingers of the Fatui. Following danger wherever he goes, he is always eager for a challenge, making him extremely dangerous despite being the youngest member."
    })

    xingqiu.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/hydro/xingqiu.png";
        popupName.innerHTML = "Xingqiu";
        popupDesc.innerHTML = "He is the second son of the Feiyun Commerce Guild, an influential group in Liyue, and is also a self-proclaimed practitioner of the Guhua Clan arts.";
    })
});

geoLogo.addEventListener("click", ()=>{
    let len = geo.length;
    charContainer.innerHTML = "";
    footer.style.top = 40+Math.ceil(len/2)*43+9 + "vh";
    charTitle.innerHTML = "Geo";

    pyroLogo.style.filter = "brightness(100%)";
    hydroLogo.style.filter = "brightness(100%)";
    geoLogo.style.filter = "brightness(150%)";
    electroLogo.style.filter = "brightness(100%)";
    dendroLogo.style.filter = "brightness(100%)";
    anemoLogo.style.filter = "brightness(100%)";
    cryoLogo.style.filter = "brightness(100%)";

    for(let i=0; i<len; i++){
        let insert = document.createElement("div");
        insert.className = geo[i];
        insert.style.background = "rgb(230, 221, 191)";
        let charImg = document.createElement("img");
        charImg.src = "./characters/geo/" + geo[i] + ".png";
        insert.appendChild(charImg);
        charContainer.appendChild(insert);
    }

    const albedo = document.querySelector(".albedo"), ningguang = document.querySelector(".ningguang"), noelle = document.querySelector(".noelle"), traveler = document.querySelector(".traveler"), zhongli = document.querySelector(".zhongli");

    albedo.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/geo/albedo.png";
        popupName.innerHTML = "Albedo";
        popupDesc.innerHTML = "The mysterious Albedo is the Chief Alchemist and Captain of Investigation Team of the Knights of Favonius through a recommendation from the adventurer Alice, with Sucrose as his assistant. He holds an infinite desire to learn about the world of Teyvat, carefully studying every object around him.";
    })

    ningguang.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/geo/ningguang.png";
        popupName.innerHTML = "Ningguang";
        popupDesc.innerHTML = "As the Tianquan of the Liyue Qixing, she holds a position of wealth beyond many others in Teyvat. Her position and abilities have allowed her to build her greatest achievement, the floating Jade Chamber that watches over all Liyue.";
    })

    noelle.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/geo/noelle.png";
        popupName.innerHTML = "Noelle";
        popupDesc.innerHTML = "Even though she is not yet a knight, she has always dreamed of being one in the Knight of Favonius by serving as a dutiful maid, by constantly taking notes on what constitutes knightly speech, knightly conduct, and knightly customs, where she believes that she just needs to keep trying her hardest at everything she does to join the ranks.";
    })

    traveler.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/geo/traveler.png";
        popupName.innerHTML = "Traveler";
        popupDesc.innerHTML = "The traveler is a playable character at the beginning of the game. Based on the storyline, the traveler has a sibling and both of them travel the universe until one day an unknown god ambushed and captures one of them.";
    })

    zhongli.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/geo/zhongli.png";
        popupName.innerHTML = "Zhongli";
        popupDesc.innerHTML = "He is actually to be the current vessel of the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal. After giving up his Gnosis, he retires from his position as an Archon and returns to his former identity as an Adeptus, although still under the guise of being a human. He is currently working as a consultant of the Wangsheng Funeral Parlour.";
    })
});

electroLogo.addEventListener("click", ()=>{
    let len = electro.length;
    charContainer.innerHTML = "";
    footer.style.top = 40+Math.ceil(len/2)*43+9 + "vh";
    charTitle.innerHTML = "Electro";

    pyroLogo.style.filter = "brightness(100%)";
    hydroLogo.style.filter = "brightness(100%)";
    geoLogo.style.filter = "brightness(100%)";
    electroLogo.style.filter = "brightness(150%)";
    dendroLogo.style.filter = "brightness(100%)";
    anemoLogo.style.filter = "brightness(100%)";
    cryoLogo.style.filter = "brightness(100%)";

    for(let i=0; i<len; i++){
        let insert = document.createElement("div");
        insert.className = electro[i];
        insert.style.background = "rgb(247, 246, 192)";
        let charImg = document.createElement("img");
        charImg.src = "./characters/electro/" + electro[i] + ".png";
        insert.appendChild(charImg);
        charContainer.appendChild(insert);
    }

    const beidou = document.querySelector(".beidou"), fishcl = document.querySelector(".fishcl"), keqing = document.querySelector(".keqing"), lisa = document.querySelector(".lisa"), razor = document.querySelector(".razor"); 

    beidou.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/electro/beidou.png";
        popupName.innerHTML = "Beidou";
        popupDesc.innerHTML = "She is the captain of The Crux, a renowned crew in Liyue. Besides her capabilities as a fleet captain and her immense strength, many in Liyue know her for her lack of fear towards the Tianquan of the Liyue Qixing, Ningguang.";
    })
    
    fishcl.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/electro/fishcl.png";
        popupName.innerHTML = "Fishcl";
        popupDesc.innerHTML = "She is an investigator for Monstadt Adventure Guild, accompany by the night raven, Oz. She claims that she came from a world beyond Teyvat. She is also a daring adventurer with seemly outlandish theories that happen to turn out to be true.";
    })
    
    keqing.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/electro/keqing.png";
        popupName.innerHTML = "Keqing";
        popupDesc.innerHTML = "As the Yuheng of the Liyue Qixing, she is someone who sought her own answer rather than allowing chaos to rage in Liyue. She chooses her own path with her own power and ability, instead of letting gods determine her fate.";
    })
    
    lisa.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/electro/lisa.png";
        popupName.innerHTML = "Lisa";
        popupDesc.innerHTML = "She is the librarian of the Knights of Favonius, she is an intellectual witch who likes to sleep, she is smart where she knows what to do to solve the problem.";
    })
    
    razor.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/electro/razor.png";
        popupName.innerHTML = "Razor";
        popupDesc.innerHTML = "Some say he an orphan while other say he is a wolf spirit in human form. He raised by the Wolf of the North, Andrius and his wolf packed in Wolvendom. ";
    })
});

cryoLogo.addEventListener("click", ()=>{
    let len = cryo.length;
    charContainer.innerHTML = "";
    footer.style.top = 40+Math.ceil(len/2)*43+9 + "vh";
    charTitle.innerHTML = "Cryo";

    pyroLogo.style.filter = "brightness(100%)";
    hydroLogo.style.filter = "brightness(100%)";
    geoLogo.style.filter = "brightness(100%)";
    electroLogo.style.filter = "brightness(100%)";
    dendroLogo.style.filter = "brightness(100%)";
    anemoLogo.style.filter = "brightness(100%)";
    cryoLogo.style.filter = "brightness(150%)";

    for(let i=0; i<len; i++){
        let insert = document.createElement("div");
        insert.className = cryo[i];
        insert.style.background = "rgb(220, 241, 240)";
        let charImg = document.createElement("img");
        charImg.src = "./characters/cryo/" + cryo[i] + ".png";
        insert.appendChild(charImg);
        charContainer.appendChild(insert);
    }

    const chongyun = document.querySelector(".chongyun"), diona = document.querySelector(".diona"), eula = document.querySelector(".eula"), ganyu = document.querySelector(".ganyu"), kaeya = document.querySelector(".kaeya"), qiqi = document.querySelector(".qiqi"), rosaria = document.querySelector(".rosaria");

    chongyun.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/cryo/chongyun.png";
        popupName.innerHTML = "Chongyun";
        popupDesc.innerHTML = "He is an excorsist from Liyue and was born with excessive Yang (Positive) energy, which can be both helps and hindrance. It makes him a very effective exorcist, but he also has never seen a spirit.";
    })

    diona.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/cryo/diona.png";
        popupName.innerHTML = "Diona";
        popupDesc.innerHTML = "She is the daughter of Draff, a hunter in Springvale, she works as a bartender at Cat’s Tail, however she dislikes alcohol and wants to ruin the Mondstadt wine industry.";
    })

    eula.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/cryo/eula.png";
        popupName.innerHTML = "Eula";
        popupDesc.innerHTML = "She is a descendant of the infamous and tyrannical Lawrence Clan and niece of Schubert; she is the captain of the Reconnaissance Company with the Knights of Favonius.";
    })

    ganyu.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/cryo/ganyu.png";
        popupName.innerHTML = "Ganyu";
        popupDesc.innerHTML = "She is the secretary of Liyue Qixing. She has a blood of human and adeptus. Graceful and quite by nature, yet gentle is the perfect way to describe her.";
    })

    kaeya.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/cryo/kaeya.png";
        popupName.innerHTML = "Kaeya";
        popupDesc.innerHTML = "He is the Calvary Captain in the Knights of Favonius. Mondstadt society does respect and loves him a lot because you can always count on him to solve any complex problems.";
    })

    qiqi.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/cryo/qiqi.png";
        popupName.innerHTML = "Qiqi";
        popupDesc.innerHTML = "She is resurrected as a zombie by the adepti and ended up in Baizhu’s care and she works at Bubu Pharmacy in Liyue Harbor. She has a weak memory which cause her to forget things easily, that is why she always carry around a notebook where she can write important stuff.";
    })

    rosaria.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/cryo/rosaria.png";
        popupName.innerHTML = "Rosaria";
        popupDesc.innerHTML = "She is a member of the Church of Favonius in Monstadt, even though you would not know that she is a sister of the church base on her attire. She often leaves without letting anyone else knowing where she is going and acts with purpose, but others do not know what exactly she stands for.";
    })
});

anemoLogo.addEventListener("click", ()=>{
    let len = anemo.length;
    charContainer.innerHTML = "";
    footer.style.top = 40+Math.ceil(len/2)*43+9 + "vh";
    charTitle.innerHTML = "Anemo";

    pyroLogo.style.filter = "brightness(100%)";
    hydroLogo.style.filter = "brightness(100%)";
    geoLogo.style.filter = "brightness(100%)";
    electroLogo.style.filter = "brightness(100%)";
    dendroLogo.style.filter = "brightness(100%)";
    anemoLogo.style.filter = "brightness(150%)";
    cryoLogo.style.filter = "brightness(100%)";
    
    for(let i=0; i<len; i++){
        let insert = document.createElement("div");
        insert.className = anemo[i];
        insert.style.background = "rgb(208, 248, 229)";
        let charImg = document.createElement("img");
        charImg.src = "./characters/anemo/" + anemo[i] + ".png";
        insert.appendChild(charImg);
        charContainer.appendChild(insert);
    }
    const jean = document.querySelector(".jean"), sucrose = document.querySelector(".sucrose"), venti = document.querySelector(".venti"), xiao = document.querySelector(".xiao");

    jean.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/anemo/jean.png";
        popupName.innerHTML = "Jean";
        popupDesc.innerHTML = "She is the older sister of Barbara, and a descendant of the prestigious Gunnhildr Clan, Jean is the Acting Grand Master of the Knights of Favonius. She is always busy handling unrest across Mondstadt and of course, tirelessly working to maintain the City of Freedom.";
    })

    sucrose.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/anemo/sucrose.png";
        popupName.innerHTML = "Sucrose";
        popupDesc.innerHTML = "An alchemist specializing in bio-alchemy, she also serves as an assistant for Albedo, the head alchemist of the Knights of Favonius.";
    })

    venti.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/anemo/venti.png";
        popupName.innerHTML = "Venti";
        popupDesc.innerHTML = "He is a free-spirited, wine-loving bard in Monstadt and the current mortal vessel of Barbatos, the Anemo Archon.";
    })

    xiao.addEventListener("click", ()=>{
        popupContainer.style.display = "block";
        popupContainer.style.opacity = 1;
        popupImage.src = "./characters/anemo/xiao.png";
        popupName.innerHTML = "Xiao";
        popupDesc.innerHTML = "He is an adeptus and only remaining member of the Five Yakshas dispatch by Morax to subdue the demonic spirits that plagued Liyue. He is currently residing in Wangshu Inn, where he secludes himself from crowds and human interactions.";
    })
});

dendroLogo.addEventListener("click", ()=>{
    let len = hydro.length;
    charTitle.innerHTML = "Dendro";
    
    pyroLogo.style.filter = "brightness(100%)";
    hydroLogo.style.filter = "brightness(100%)";
    geoLogo.style.filter = "brightness(100%)";
    electroLogo.style.filter = "brightness(100%)";
    dendroLogo.style.filter = "brightness(150%)";
    anemoLogo.style.filter = "brightness(100%)";
    cryoLogo.style.filter = "brightness(100%)";

    charContainer.innerHTML = "";
    let comingSoon = document.createElement("p");
    comingSoon.innerHTML = "Coming Soon..";
    charContainer.appendChild(comingSoon);
    footer.style.top = "90vh";
});