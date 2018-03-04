(function initMenu() {

  const menuElmt = document.getElementById('mobile-menu');
  const openElmt = document.getElementById('open-menu');
  const closeElmt = document.getElementById('close-menu');

  openElmt.addEventListener("click", openClickHandler, false);
  closeElmt.addEventListener("click", closeClickHandler, false);

  function openClickHandler(e) {
    const classList = menuElmt.classList;
    classList.add('is-open');
  }

  function closeClickHandler(e) {
    const classList = menuElmt.classList;
    classList.remove('is-open');
  }
})();