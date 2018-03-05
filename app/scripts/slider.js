const sliderInit = function(simpleslider, TimelineLite){

  const container = document.getElementById('slider-container');
  const overlays = document.getElementsByClassName('background-overlay');
  const captions = document.getElementsByClassName('slider-caption');
  const logo = document.getElementById('head-content-logo');
  const pagination = document.getElementById('pagination');
  const fleche = document.getElementById('fleche');
  const pages = pagination.getElementsByClassName('pag-element');
  const captions_elements = [];
  const marqueurs_elements = [];

  const logoColor = [
    '#1dbbae', '#d4925b', '#ca2676'
  ];

  const Slider = simpleslider.getSlider({
    container: container,
    duration: 0.5,
    delay: 8,
    prop: 'top',
    unit: '%',
    init: -100,
    show: 0,
    end: 100,
    ease: Easie.circInOut,
    onChange: handlerOnChange,
    onChangeEnd: handleOnChangeEnd
  });

  Slider.pause();
  initElements();
  setTimeout(function(){
    initAnimation(0, function(){
      pagination.classList.remove('running');
      Slider.resume();
    });
  }, 1500);

  function handlerOnChange(index, nextIndex) {
    pagination.classList.add('running');
    switchOverlayColor(index, nextIndex);
    existAnimation( index, nextIndex );
  }

  function handleOnChangeEnd( index, nextIndex ) {
    enterAnimation( index, nextIndex );
    activatePageBtn( index, nextIndex );
  }

  function activatePageBtn(index) {
    if( index !== 0 ) pages[0].classList.remove('active');
    if( index !== 1 ) pages[1].classList.remove('active');
    if( index !== 2 ) pages[2].classList.remove('active');
    pages[index].classList.add('active');
  }

  function initElements(){
    captions_elements.push(captions[0].getElementsByClassName('slider-caption-element'));
    captions_elements.push(captions[1].getElementsByClassName('slider-caption-element'));
    captions_elements.push(captions[2].getElementsByClassName('slider-caption-element'));
    marqueurs_elements.push(captions[0].getElementsByClassName('slider-caption-marqueur'));
    marqueurs_elements.push(captions[1].getElementsByClassName('slider-caption-marqueur'));
    marqueurs_elements.push(captions[2].getElementsByClassName('slider-caption-marqueur'));
  }

  function initAnimation( index, callback ) {
    const tl = new TimelineLite();
    tl.set(captions[index], {display: 'flex'})
      .set(logo, {display: 'block'})
      .set(pagination, {opacity: 0, y: 20, display: 'block'})
      .set(fleche, {display: 'block'})
      .staggerFrom(captions_elements[index], 0.6, {opacity:0, y: 200}, 0.2)
      .from(logo, 0.5, {opacity:0, y: -20}, 1)
      .to(pagination, 0.5, {opacity:1, y:0}, 1)
      .from(fleche, 0.5, {opacity:0, y: -200}, 0)
      .staggerFrom(marqueurs_elements[index], 1.5, {opacity:0, y: 20, scale: 2.5, ease:Elastic.easeOut}, 0.2)
      .call(callback);
  }

  function enterAnimation( index ) {
    const tl = new TimelineLite();
    tl.set(captions[index], {display: 'flex'})
      .staggerFrom(captions_elements[index], 0.6, {opacity:0, y: 100, delay: 0.5}, 0.2)
      .staggerFrom(marqueurs_elements[index], 1, {opacity:0, y: 20, scale: 2.5, ease:Elastic.easeOut}, 0.2)
      .set(pagination, {className:"-=running"})
  }

  function existAnimation( index, nextIndex ) {
    const tl = new TimelineLite();
    tl.to(marqueurs_elements[index], 0.5, {opacity:0, y: 200})
      .to(captions_elements[index], 0.5, {opacity:0, y: 200}, 0)
      .set(captions[index], {display: 'none'})
      .set(marqueurs_elements[index], {opacity:1, y:0})
      .set(captions_elements[index], {opacity:1, y:0})
      .set(logo, {color: logoColor[nextIndex]});
  }

  function switchOverlayColor(index, nextIndex){
    const classListLast = overlays[index].classList;
    const classListNew = overlays[nextIndex].classList;
    classListLast.remove('visible');
    classListNew.add('visible');
  }

  return Slider;
};

module.exports = {
  init: sliderInit
};

