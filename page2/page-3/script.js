let icon=[
    {
        label:"icon",
        src:"../assets/SHAPE_transparent_logo copy.png"
    }
]
let left=document.getElementById("navLeft");
let list=document.getElementById("navList");
icon.map((ele)=>{
    let image =document.createElement("img");
    image.src=ele.src;
    image.setAttribute("id","icon")
    left.append(image);
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
    li.setAttribute("class","navItems");
    li.innerText=ele.label;
})
let circle = document.getElementById("circle");
window.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    circle.style.top = y + "px";
    circle.style.left = x + "px";
});