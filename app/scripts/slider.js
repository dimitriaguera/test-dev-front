const sliderInit = function(simpleslider, TimelineLite){

  const container = document.getElementById('slider-container');
  const overlays = document.getElementsByClassName('background-overlay');
  const captions = document.getElementsByClassName('slider-caption');
  const captions_elements = [];
  const marqueurs_elements = [];
  const tl = new TimelineLite();

  const Slider = simpleslider.getSlider({
    container: container,
    autoPlay: false,
    duration: 1,
    delay: 10,
    prop: 'left',
    unit: '%',
    init: -100,
    show: 0,
    end: 100,
    onChange: handlerOnChange,
    onChangeEnd: handleOnChangeEnd,
  });


  initElements();
  initAnimation(0);

  function handlerOnChange(index) {
    switchOverlayColor(index);
    existAnimation( index );
  }

  function handleOnChangeEnd(index) {
    enterAnimation( index );
  }

  function initElements(){
    captions_elements.push(captions[0].getElementsByClassName('slider-caption-element'));
    captions_elements.push(captions[1].getElementsByClassName('slider-caption-element'));
    captions_elements.push(captions[2].getElementsByClassName('slider-caption-element'));
    marqueurs_elements.push(captions[0].getElementsByClassName('slider-caption-marqueur'));
    marqueurs_elements.push(captions[1].getElementsByClassName('slider-caption-marqueur'));
    marqueurs_elements.push(captions[2].getElementsByClassName('slider-caption-marqueur'));
  }

  function initAnimation( index ) {
    tl.set(captions[index], {display: 'flex'})
      .staggerFrom(captions_elements[index], 0.7, {opacity:0, y: 200}, 0.3)
      .staggerFrom(marqueurs_elements[index], 0.7, {opacity:0, y: 20, scale: 2.5, ease:Elastic.easeOut}, 0.2);
  }

  function enterAnimation( index ) {
    tl.set(captions[index], {display: 'flex'})
      .staggerFrom(captions_elements[index], 0.7, {opacity:0, y: 200, delay: 0.5}, 0.3)
      .staggerFrom(marqueurs_elements[index], 0.7, {opacity:0, y: 20, scale: 2.5, ease:Elastic.easeOut}, 0.2);
  }

  function existAnimation( index ) {
    tl.to(marqueurs_elements[index], 0.5, {opacity:0, y: -200})
      .to(captions_elements[index], 0.5, {opacity:0, y: -200}, 0)
      .set(captions[index], {display: 'none'})
      .set(marqueurs_elements[index], {opacity:1, y:0})
      .set(captions_elements[index], {opacity:1, y:0});
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

