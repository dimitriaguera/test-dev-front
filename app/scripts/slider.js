const sliderInit = function(simpleslider){

  const container = document.getElementById('slider-container');
  const overlays = document.getElementsByClassName('background-overlay');
  const captions = document.getElementsByClassName('slider-caption');

  const Slider = simpleslider.getSlider({
    container: container,
    autoPlay: true,
    duration: 1,
    delay: 5,
    prop: 'left',
    unit: '%',
    init: -100,
    show: 0,
    end: 100,
    onChange: handlerOnChange,
  });


  function handlerOnChange(index) {
    switchOverlayColor(index)
  }


  function switchOverlayColor(index){
    const classListLast = overlays[index].classList;
    const classListNew = overlays[index === 2 ? 0 : index + 1].classList;
    classListLast.remove('visible');
    classListNew.add('visible');
  }
};

module.exports = {
  init: sliderInit
};

