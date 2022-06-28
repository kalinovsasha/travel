//slider
let slider ={
  sliderContainer:document.querySelector('.slider'),
  sliderItem:document.querySelector('.slider-container'),
  sliderItem1:document.querySelector('.slider-item1'),
  sliderItem2:document.querySelector('.slider-item2'),
  sliderItem3:document.querySelector('.slider-item3'),
  sliderItem1v:document.querySelector('.slider-item1v'),
  sliderItem3v:document.querySelector('.slider-item3v'),
  controlItem1:document.querySelector('.slider-controls__item1'),
  controlItem2:document.querySelector('.slider-controls__item2'),
  controlItem3:document.querySelector('.slider-controls__item3'),
  arrowPrew: document.querySelector('.arrow-slider-controls__prew'),
  arrowNext: document.querySelector('.arrow-slider-controls__next'),
  slideCounter:0,
}

document.body.addEventListener('click', (e)=>{
  switch (e.target) {
    case slider.sliderItem1:
      slider.slideCounter=0;
      slider.sliderContainer.style.left='-540px';
      slider.controlItem1.classList.add('slider-controls__item_active');
      slider.controlItem2.classList.remove('slider-controls__item_active');
      slider.controlItem3.classList.remove('slider-controls__item_active');
      break;
      case slider.sliderItem2:
        slider.slideCounter=1;
        slider.sliderContainer.style.left='-1400px';
        slider.controlItem2.classList.add('slider-controls__item_active');
        slider.controlItem1.classList.remove('slider-controls__item_active');
        slider.controlItem3.classList.remove('slider-controls__item_active');
      break;
      case slider.sliderItem3:
        slider.slideCounter=2;
        slider.sliderContainer.style.left='-2263px'
        slider.controlItem3.classList.add('slider-controls__item_active');
        slider.controlItem2.classList.remove('slider-controls__item_active');
        slider.controlItem1.classList.remove('slider-controls__item_active');
      break;
      case slider.sliderItem1v:
        slider.slideCounter=0;
        slider.sliderContainer.style.left='-540px';
        slider.controlItem1.classList.add('slider-controls__item_active');
        slider.controlItem2.classList.remove('slider-controls__item_active');
        slider.controlItem3.classList.remove('slider-controls__item_active');
      break;
      case slider.sliderItem3v:
        slider.slideCounter=2;
        slider.sliderContainer.style.left='-2317px'
        slider.controlItem3.classList.add('slider-controls__item_active');
        slider.controlItem2.classList.remove('slider-controls__item_active');
        slider.controlItem1.classList.remove('slider-controls__item_active');
      break;
  
    default:
      break;
  }
})


///Mobile slider
slider.arrowNext.addEventListener('click',()=>{
  if(slider.slideCounter===0){
    slider.slideCounter+=1;
    slider.sliderItem1.classList.remove('slider__item_visible');
    slider.sliderItem2.classList.add('slider__item_visible');
    slider.controlItem1.classList.remove('slider-controls__item_active');
    slider.controlItem2.classList.add('slider-controls__item_active');
  } else 
  if(slider.slideCounter===1){
    slider.slideCounter+=1;
    slider.sliderItem2.classList.remove('slider__item_visible');
    slider.sliderItem3.classList.add('slider__item_visible');
    slider.controlItem2.classList.remove('slider-controls__item_active');
    slider.controlItem3.classList.add('slider-controls__item_active');
  } else {
    slider.slideCounter=0;
    slider.sliderItem3.classList.remove('slider__item_visible');
    slider.sliderItem1.classList.add('slider__item_visible');
    slider.controlItem3.classList.remove('slider-controls__item_active');
    slider.controlItem1.classList.add('slider-controls__item_active');
  }
})
slider.arrowPrew.addEventListener('click',()=>{
  if(slider.slideCounter===0){
    slider.slideCounter=2;
    slider.sliderItem1.classList.remove('slider__item_visible');
    slider.sliderItem3.classList.add('slider__item_visible');
    slider.controlItem1.classList.remove('slider-controls__item_active');
    slider.controlItem3.classList.add('slider-controls__item_active');
  } else 
  if(slider.slideCounter===1){
    slider.slideCounter-=1;
    slider.sliderItem2.classList.remove('slider__item_visible');
    slider.sliderItem1.classList.add('slider__item_visible');
    slider.controlItem2.classList.remove('slider-controls__item_active');
    slider.controlItem1.classList.add('slider-controls__item_active');
  } else {
    slider.slideCounter-=1;
    slider.sliderItem3.classList.remove('slider__item_visible');
    slider.sliderItem2.classList.add('slider__item_visible');
    slider.controlItem3.classList.remove('slider-controls__item_active');
    slider.controlItem2.classList.add('slider-controls__item_active');
  }
})
window.addEventListener('resize', function(event){
  if(document.documentElement.clientWidth<1120){
    slider.sliderContainer.style.left='0px';
  }
})


