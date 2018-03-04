document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  require('scripts/menu');
  require('scripts/marqueur');

  require('scripts/slider').init(require('simple-slider'), require('gsap').TimelineLite);
  console.log('Initialized app');
});
