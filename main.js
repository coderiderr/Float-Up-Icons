const box = document.querySelector(".box");
const btn = document.querySelector(".btn"); 
togglebtn = () => {
    if(box.classList.contains("showMsg")){
        box.classList.remove("showMsg");
        box.classList.add("showLinks");
    }else{
        box.classList.remove("showLinks");
        box.classList.add("showMsg");
    }
};
btn.addEventListener("click",togglebtn);




