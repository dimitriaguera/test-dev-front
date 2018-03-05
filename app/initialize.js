document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  require('scripts/menu');
  require('scripts/easie');

  const s = require('scripts/slider').init(require('simple-slider'), require('gsap').TimelineLite);
  const m = require('scripts/marqueur');

  m.init(s);

  console.log('Initialized app');
});
