const initMarqueur = function( Slider ) {

  const marqueurArray = document.getElementsByClassName('marqueur');

  for( var i = 0, l = marqueurArray.length; i < l; i++ ) {
    const mElmt = marqueurArray[i];
    const closeElmt = mElmt.getElementsByClassName('close-menu-marqueur')[0];
    mElmt.addEventListener("click", openClickHandler.bind(mElmt), false);
    closeElmt.addEventListener("click", closeClickHandler.bind(mElmt), false);
  }

  function openClickHandler(e) {
    const classList = this.classList;
    classList.add('is-open');
    Slider.pause();
  }

  function closeClickHandler(e) {
    e.stopPropagation();
    const classList = this.classList;
    classList.remove('is-open');
    Slider.resume();
  }
};

module.exports = {
  init: initMarqueur
};