let body = document.querySelector("body");

let lightbutton = document.getElementById("light");
lightbutton.addEventListener('click', onClicklight);

function onClicklight(){
    body.style["background-color"] = "white";
    body.style["color"] = "black";
}

let darkbutton = document.getElementById("dark");
darkbutton.addEventListener('click', onClickdark);

function onClickdark(){
    body.style["background-color"] = "black";
    body.style["color"] = "white";
}

let ak47 = document.getElementById("ak");
ak47.addEventListener('click', ak);

function ak(){
    let newElement = document.createElement("img");
    newElement.src = "images/Trigger.png";

    ak47.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/AR_preview.png";

    ak47.appendChild(newElement1);
}

let sniper = document.getElementById("sniper");
sniper.addEventListener('click', snipe);

function snipe(){
    let newElement = document.createElement("img");
    newElement.src = "images/Hunter.PNG.png";

    sniper.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/Sniper_preview.png";

    sniper.appendChild(newElement1);
}

let smg = document.getElementById("smg");
smg.addEventListener('click', runngun);

function runngun(){
    let newElement = document.createElement("img");
    newElement.src = "images/Run_n_gun.PNG.png";

    smg.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/SMG_preview.png";

    smg.appendChild(newElement1);
}

let lmg = document.getElementById("lmg");
lmg.addEventListener('click', spray);

function spray(){
    let newElement = document.createElement("img");
    newElement.src = "images/Spray_n_pray.png";

    lmg.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/MG_preview.png";

    lmg.appendChild(newElement1);
}

let rev = document.getElementById("rev");
rev.addEventListener('click', revo);

function revo(){
    let newElement = document.createElement("img");
    newElement.src = "images/Detective-0.png";

    rev.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/Rev_preview.png";

    rev.appendChild(newElement1);
}

let semi = document.getElementById("semi");
semi.addEventListener('click', marks);

function marks(){
    let newElement = document.createElement("img");
    newElement.src = "images/MARKS.PNG.png";

    semi.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/Semi_preview.png";

    semi.appendChild(newElement1);
}

let uzi = document.getElementById("uzi");
uzi.addEventListener('click', uzis);

function uzis(){
    let newElement = document.createElement("img");
    newElement.src = "images/Agent-select-screen.png";

    uzi.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/Uzi_preview.png";

    uzi.appendChild(newElement1);
}

let knife = document.getElementById("runner");
knife.addEventListener('click', runner);

function runner(){
    let newElement = document.createElement("img");
    newElement.src = "images/Runnericon.png";

    knife.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/Knife_preview.png";

    knife.appendChild(newElement1);
}

let famas = document.getElementById("famas");
famas.addEventListener('click', commando);

function commando(){
    let newElement = document.createElement("img");
    newElement.src = "images/Commando.png";

    famas.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/Famas_preview.png";

    famas.appendChild(newElement1);
}

let blaster = document.getElementById("blaster");
blaster.addEventListener('click', trooper);

function trooper(){
    let newElement = document.createElement("img");
    newElement.src = "images/Blaster.png";

    blaster.appendChild(newElement);

    let newElement1 = document.createElement("img");
    newElement1.src = "images/Blaster-0.png";

    blaster.appendChild(newElement1);
}