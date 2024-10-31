// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

// Toggle menu on button click
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // Open menu actions
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    // Close menu actions with slight delay for smooth animation
    menuBtn.classList.remove("close");
    navItems.forEach((item) => item.classList.remove("show"));
    
    // Delay hiding of menu and its components to allow animations to complete
    setTimeout(() => {
      menu.classList.remove("show");
      menuBranding.classList.remove("show");
      menuNav.classList.remove("show");
    }, 500); // Match delay with CSS transition time
    
    showMenu = false;
  }
}
