let list = [
    {
        id: "001",
        tid:"tid1",
        title: "Tower Hamlets Town Hall",
        aid: "1",
        src: "../assets/TowerHamlletHall.jpg"
    },
    {
        id: "002",
        tid:"tid2",
        title: "The Collar Factory",
        aid: "2",
        src: "../assets/Shape-Studio-Nov-2022-100-scaled-1000x1100.jpg"
    },
    {
        id: "003",
        tid:"tid3",
        title: "The Old Church School",
        aid: "3",
        src: "../assets/TheOldChurchSchool.jpg"
    },
    {
        id: "004",
        tid:"tid4",
        title: "Socitey Cafe BaldWin St",
        aid: "4",
        src: "../assets/SocietyCafe.jpg"
    },
    {
        id: "005",
        tid:"tid5",
        title: "Surface Design Show",
        aid: "5",
        src: "../assets/surfacedesign.jpg"
    },
    {
        id: "006",
        tid:"tid6",
        title: "Siemens Crystal",
        aid: "6",
        src: "../assets/siemens_jotta-1000x1002.jpg"
    },
    {
        id: "007",
        tid:"tid7",
        title: "Kew Gardens",
        aid: "7",
        src: "../assets/KewGardens.jpg"
    },
    {
        id: "008",
        tid:"tid8",
        title: "The Grove Hotel",
        aid: "8",
        src: "../assets/GroveHotel_.jpg"
    },
    {
        id: "009",
        tid:"tid9",
        title: "We The Curious",
        aid: "9",
        src: "../assets/WeTheCurise.jpg"
    },
    {
        id: "010",
        tid:"tid10",
        title: "Climbing Academy",
        aid: "10",
        src: "../assets/climbingAcadamy.jpg"
    },
    {
        id: "011",
        tid:"tid11",
        title: "Frame Work",
        aid: "11",
        src: "../assets/Framewoek.jpg"
    },
    {
        id: "012",
        tid:"tid12",
        title: "Unseen Studio",
        aid: "12",
        src: "../assets/Unseen-Studio-010-1000x1100.jpg"
    },
    {
        id: "013",
        tid:"tid13",
        title: "Society Cafe Harbourside",
        aid: "13",
        src: "../assets/SocietyCafeharburside.jpg"
    }
];
let ol = document.getElementById("scrollList");
let c=0;
list.map((e)=>{
    c++;
    let li = document.createElement("li");
    li.innerHTML=`<div id="${e.id}" class="id">${e.id}</div>
    <div id="${e.tid}" class="title" onmouseover="setImage('${e.src}','${e.id}','${e.aid}','${e.tid}')" onmouseleave="remove('${e.id}','${e.aid}','${e.tid}')"><a>${e.title}</a></div>
    <div id="${e.aid}" class="arrows"><i class="fa-solid fa-arrow-right fa-fade"></i></div>`;
    li.setAttribute("class","listitems")
    ol.append(li);
    if(c==list.length)
    {
        let li = document.createElement("li");
        li.innerHTML=`<footer class="footer1">
        <span class="footerspan">back</span>
        </footer>`
        ol.append(li);
    }
});
// let image1 = document.getElementById("image1");
// function setImage(image) {
//     let right = document.getElementById("right");
//     right.innerHTML = `<img style="height:100%;top:100vh;" id="image2" src="" >`;
//     setTimeout(() => {
//         let img = document.getElementById("image2");
//         img.style.top = 0;
//         img.src = image;
//     }, 500);
//     setTimeout(() => {
//         image1.src=image;
//     }, 1000);
// }
//mouse
let circle = document.getElementById("circle");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    circle.style.top = y + "px";
    circle.style.left = x + "px";
});
//corosul
function setImage(image,lid,aid,tid) {
    let id=document.getElementById(lid);
    id.style.visibility="visible";
    let ad=document.getElementById(aid);
    ad.style.visibility="visible";
    circle.style.transform="scale(2)"
    let tids=document.getElementById(tid);
    tids.style.color="black";
    let right = document.getElementById("right");
    let img = document.createElement("img");
    img.src = image;
    img.id = "image2";
    img.style.height = "100%";
    img.style.width = "100%";
    img.style.position = "absolute";
    img.style.top = "100%";
    img.style.left = "0";
    img.style.transition = "top 1s linear";
    img.style.zIndex = 2;
    right.appendChild(img);
    setTimeout(() => {
        img.style.top = "0";
    }, 1000);
    setTimeout(() => {
        image.src = image;
        // image.style.zIndex = 1;
        img.style.zIndex = 0;
    }, 2000);
}
function remove(lid,aid,tid){
    let id=document.getElementById(lid);
    id.style.visibility="hidden";
    let ad=document.getElementById(aid);
    ad.style.visibility="hidden";
    circle.style.transform="scale(1)"
    let tids=document.getElementById(tid);
    tids.style.color="transparent";
}
//navlist
let navul=document.getElementById("navul");
let navList=[
    {
        lid:"lid1",
        label:"Projects",
        href:""
    },
    {
        lid:"lid2",
        label:"About us",
        href:""
    },
    {
        lid:"lid3",
        label:"Shape Jungle",
        href:""
    },
    {
        lid:"lid4",
        label:"Work with us",
        href:""
    }
]
navList.map((e)=>{
    let li=document.createElement("li");
    li.innerText=e.label;
    li.setAttribute("id",`${e.lid}`);
    li.setAttribute("onmouseenter",`nav('${e.lid}')`);
    li.setAttribute("onmouseleave",`navleave('${e.lid}')`);
    navul.appendChild(li);
});
function nav(lid){
    circle.style.transform="scale(2)";
}
function navleave(){
    circle.style.transform="scale(1)";
}
let lsc = document.getElementById("left");
window.addEventListener("mousemove",(e)=>{
    lsc.scrollTo(0,e.clientY*2.8)
});
// console.log(window.innerWidth);


