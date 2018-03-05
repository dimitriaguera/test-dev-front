/* global require */

document.addEventListener('DOMContentLoaded', function() {

  require('scripts/menu');

  const s = require('scripts/slider').init(require('simple-slider'), require('gsap').TimelineLite);
  const m = require('scripts/marqueur');

  m.init(s);
});
