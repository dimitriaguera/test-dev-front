document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  require('scripts/menu');
  require('scripts/marqueur');
  require('scripts/slider').init(require('simple-slider'));
  console.log('Initialized app');
});
