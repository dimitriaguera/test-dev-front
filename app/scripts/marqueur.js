const initMarqueur = function( Slider ) {

  const marqueurArray = document.getElementsByClassName('marqueur');
  const listenersToRemove = [];

  for( var i = 0, l = marqueurArray.length; i < l; i++ ) {
    const mElmt = marqueurArray[i];
    //const closeElmt = mElmt.getElementsByClassName('close-menu-marqueur')[0];
    mElmt.addEventListener("click", openClickHandler.bind(mElmt), false);
    //closeElmt.addEventListener("click", closeClickHandler.bind(mElmt), false);
  }

  function openClickHandler(e) {
    this.removeEventListener("click", openClickHandler, false);
    this.addEventListener("click", closeClickHandler.bind(this), false);
    this.classList.add('is-open');
    Slider.pause();
  }

  function closeClickHandler(e) {
    e.stopPropagation();
    this.removeEventListener("click", closeClickHandler, false);
    this.addEventListener("click", openClickHandler.bind(this), false);
    this.classList.remove('is-open');
    Slider.resume();
  }
};

module.exports = {
  init: initMarqueur
};