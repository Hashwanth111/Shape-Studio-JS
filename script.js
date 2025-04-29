let list=document.getElementById("list");
let left = document.getElementById("left");
let icon=[
    {
        label:"icon",
        src:"./assits/SHAPE_transparent_logo.png"
    }
]
icon.map((ele)=>{
    let imge =document.createElement("img");
    imge.src=ele.src;
    imge.setAttribute("class","logo")
    left.append(imge);
})
//appending navlist
let navList=[
    {
        label:"Projects",
        href:""
    },
    {
        label:"About us",
        href:""
    },
    {
        label:"Shape Jungle",
        href:""
    },
    {
        label:"Work with us",
        href:""
    }
]
navList.map((ele)=>{
    let li=document.createElement("li");
    list.append(li);
    li.setAttribute("class","navlis");
    li.innerText=ele.label;
})
//appending videos
let videos = [
    {
        title: "Peace Den",
        src: "./assits/video6.mp4"
    },
    {
        title: "Kew Gardens",
        src: "./assits/video3.mp4"
    },
    {
        title: "Mansion Green",
        src: "./assits/video1.mp4"
    }
]
let main = document.getElementById("main");
videos.map((e) => {
    main.innerHTML+=`
                <div class="carousel-item">
                <video src=${e.src} class="d-block w-100" alt=" "  autoplay muted loop playsinline></video>
                <div class="mains" id="mains">
                    <div class="divspan">
                        <span class="inner-span" id="inner-span">${e.title}</span>
                    </div>
                </div>`
    })
//appening footer logos
let footer_list = [
    {
        title: "instagram",
        src: "./assits/clipart1221050.png"
    },
    {
        title: "twitter",
        src: "./assits/clipart363919.png"
    },
]
let footerul=document.getElementById("footer-list");
footer_list.map((ele)=>{
    let li = document.createElement("li");
    li.innerHTML=`<img src="${ele.src}" alt="" class="footerimg">`
    li.setAttribute("class","footerli")
    footerul.appendChild(li); 
});
//mouseCursor
let mains = document.getElementById("inner-span");
let bid = document.getElementById("box");
let circle = document.getElementById("circle");
let displayBox = true;
//for box div
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    bid.style.top = y + "px";
    bid.style.left = x + "px";
    if (displayBox && rightside && leftside && listoptions && fside) {
        bid.style.borderRight = x > (window.innerWidth / 2) ? "none" : "2px solid yellow";
        bid.style.borderBottom = x > (window.innerWidth / 2) ? "none" : "2px solid yellow";
        bid.style.borderLeft = x < (window.innerWidth / 2) ? "none" : "2px solid yellow";
        bid.style.borderTop = x < (window.innerWidth / 2) ? "none" : "2px solid yellow";
    } else {
        bid.style.border = "none";
    }
});
mains.addEventListener("mouseenter", () => {
    displayBox = false; 
    circle.style.transform = "scale(3)"; 
});
mains.addEventListener("mouseleave", () => {
    displayBox = true;  
    circle.style.transform = "scale(1)"; 
});
//right side nav
let right = document.getElementById("right");
let rightside=true;
right.addEventListener("mouseenter", () => {
    rightside = false; 
    circle.style.transform = "scale(2)"; 
});
right.addEventListener("mouseleave", () => {
    rightside = true;  
    circle.style.transform = "scale(1)"; 
});
//leftside
let leftside=true;
left.addEventListener("mouseenter", () => {
    leftside = false; 
    circle.style.transform = "scale(2)"; 
});
left.addEventListener("mouseleave", () => {
    leftside = true;  
    circle.style.transform = "scale(1)"; 
});
//list options
let listoptions=true;
list.addEventListener("mouseenter",()=>{
    listoptions=false;
    circle.style.transform = "scale(3)"; 
});
list.addEventListener("mouseleave", () => {
    listoptions = true;  
    circle.style.transform = "scale(1)"; 
});
//footer options
let footer=document.getElementById("footer");
let fside=true;
footer.addEventListener("mouseenter",()=>{
    fside=false;
    circle.style.transform = "scale(3)"; 
});
footer.addEventListener("mouseleave", () => {
    fside = true;  
    circle.style.transform = "scale(1)"; 
});
