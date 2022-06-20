const storiesParagraf= document.querySelectorAll(".stories__container__p");
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__btn-close');
const menuItems= document.querySelectorAll(".menu__item");
//const arrowPrew = document.querySelector('.arrow-slider-controls__prew');
//const arrowNext = document.querySelector('.arrow-slider-controls__next');

//slider-mobile
let sliderMobile ={
  sliderItem1:document.querySelector('.slider-item1'),
  sliderItem2:document.querySelector('.slider-item2'),
  sliderItem3:document.querySelector('.slider-item3'),
  controlItem1:document.querySelector('.slider-controls__item1'),
  controlItem2:document.querySelector('.slider-controls__item2'),
  controlItem3:document.querySelector('.slider-controls__item3'),
  arrowPrew: document.querySelector('.arrow-slider-controls__prew'),
  arrowNext: document.querySelector('.arrow-slider-controls__next'),
  slideCounter:0,
}
let sliderDescriptions=["Spain", "USA", "Japan"];


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

  ///Mobile slider
  sliderMobile.arrowNext.addEventListener('click',()=>{
    if(sliderMobile.slideCounter===0){
      sliderMobile.slideCounter+=1;
      sliderMobile.sliderItem1.classList.remove('slider__item_visible');
      sliderMobile.sliderItem2.classList.add('slider__item_visible');
      sliderMobile.controlItem1.classList.remove('slider-controls__item_active');
      sliderMobile.controlItem2.classList.add('slider-controls__item_active');
    } else 
    if(sliderMobile.slideCounter===1){
      sliderMobile.slideCounter+=1;
      sliderMobile.sliderItem2.classList.remove('slider__item_visible');
      sliderMobile.sliderItem3.classList.add('slider__item_visible');
      sliderMobile.controlItem2.classList.remove('slider-controls__item_active');
      sliderMobile.controlItem3.classList.add('slider-controls__item_active');
    } else {
      sliderMobile.slideCounter=0;
      sliderMobile.sliderItem3.classList.remove('slider__item_visible');
      sliderMobile.sliderItem1.classList.add('slider__item_visible');
      sliderMobile.controlItem3.classList.remove('slider-controls__item_active');
      sliderMobile.controlItem1.classList.add('slider-controls__item_active');
    }
  })
  sliderMobile.arrowPrew.addEventListener('click',()=>{
    if(sliderMobile.slideCounter===0){
      sliderMobile.slideCounter=2;
      sliderMobile.sliderItem1.classList.remove('slider__item_visible');
      sliderMobile.sliderItem3.classList.add('slider__item_visible');
      sliderMobile.controlItem1.classList.remove('slider-controls__item_active');
      sliderMobile.controlItem3.classList.add('slider-controls__item_active');
    } else 
    if(sliderMobile.slideCounter===1){
      sliderMobile.slideCounter-=1;
      sliderMobile.sliderItem2.classList.remove('slider__item_visible');
      sliderMobile.sliderItem1.classList.add('slider__item_visible');
      sliderMobile.controlItem2.classList.remove('slider-controls__item_active');
      sliderMobile.controlItem1.classList.add('slider-controls__item_active');
    } else {
      sliderMobile.slideCounter-=1;
      sliderMobile.sliderItem3.classList.remove('slider__item_visible');
      sliderMobile.sliderItem2.classList.add('slider__item_visible');
      sliderMobile.controlItem3.classList.remove('slider-controls__item_active');
      sliderMobile.controlItem2.classList.add('slider-controls__item_active');
    }
  })





