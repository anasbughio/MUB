

let pathToIncludes = '';


if (window.location.pathname.includes('../../views/Pages/')) {
  pathToIncludes = '../../views/includes/';
} else {
  // For files in the root or other locations, keep the default path
  pathToIncludes = '../../views/includes/';
}

// Load navbar
fetch(`${pathToIncludes}navbar.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Select the menu icon and add the event listener after the navbar is loaded
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon) {
      menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
      });
    }
  });

// Load footer
fetch(`${pathToIncludes}footer.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
