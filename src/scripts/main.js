const storiesParagraf= document.querySelectorAll(".stories__container__p");
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__btn-close');
const menuItems= document.querySelectorAll(".menu__item");

//Burger Menu
burgerMenu.addEventListener('click',()=>{
  menu.classList.remove('menu_disable')
});
menuClose.addEventListener('click',()=>{
  menu.classList.add('menu_disable')
});
menuItems.forEach((item)=>{
  item.addEventListener('click',()=>{
    menu.classList.add('menu_disable')
  });
})

///Change Lorem text (Pixel perfect)
window.addEventListener('resize', function(event){
  if(document.documentElement.clientWidth<=390){
    storiesParagraf.forEach((storiesParagraf)=>{
      storiesParagraf.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a..`
     })
  }
  if(document.documentElement.clientWidth>391){
    storiesParagraf.forEach((storiesParagraf)=>{
      storiesParagraf.innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...`
     })
  }
});

  





