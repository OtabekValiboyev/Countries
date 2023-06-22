const elSiteThemeToggler = document.querySelector('.site-header-theme-toggler');

elSiteThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})