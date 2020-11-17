// activation du menu en JS
// Provide by Bulma Team => https://bulma.io/documentation/components/navbar/#basic-navbar

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

const sr = ScrollReveal({
    duration: 2000
});
// POUR H1
sr.reveal('h1', {
    origin: 'top',
    distance: '30px',
});
// POUR H2
sr.reveal('h2', {
    origin: 'top',
    distance: '30px',
    delay: 1000
});