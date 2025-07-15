//by id
let j=()=>{
const p=document.getElementsById("heading");
p.style.backgroundcolor="red";
p.style.color="white";
}
//by class
const g=document.getElementsByClassName("text");
for(let i5=0;i5<g.length;i5++){
    g[i5].style.color="yellow";
    g[i5].style.backgroundColor="green";
}
//by body
document.body.style.backgroundColor="lightpink";
//by query selectorAll
const s=document.querySelectorAll(".text");
for(let k=0;k<s.length;k++){
    s[k].style.fontStyle="italic";
}
//guery selector
let x=()=>{
    const b=document.querySelector(".parag");
    b.style.color="red";
}