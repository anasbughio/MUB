

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the 'nav-active' class when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  if (navLinks.classList.contains('nav-active')) {
    navLinks.classList.remove('nav-active');
    setTimeout(() => {
      navLinks.style.display = 'none'; // Completely hide it after the transition
    }, 500); // Wait for the transition to complete
  } else {
    navLinks.style.display = 'flex'; // Show the menu
    navLinks.classList.add('nav-active');
  }
});
