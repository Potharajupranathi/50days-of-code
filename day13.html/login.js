docdument.getElementById("ip").addEventListener("input",function(event){
    document.getElementById("para").innerText=event.target.value;
})


document.getElementById("para").addEventListener("dblclick",function(){
    this.style.color="blue";
})