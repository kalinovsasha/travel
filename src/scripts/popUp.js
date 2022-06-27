const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
const loginBtn = document.querySelector(".header__login_btn");
const popUp = document.querySelector(".pop-up");


loginBtn.addEventListener("click", ()=> {
    popUp.classList.remove('pop-up_hide');
})

wrapper.addEventListener("click", (e)=> {
    if(e.target!==loginBtn){
        popUp.classList.add('pop-up_hide');
    } 
})
