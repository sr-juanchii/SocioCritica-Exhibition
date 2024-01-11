
const darkModeToggle = document.getElementById("darkmode-toggle");

darkModeToggle.addEventListener("click", () => {
  document.documentElement.style.setProperty("--black", getComputedStyle(document.documentElement).getPropertyValue("--black") === "#0d0d0d" ? "#d9dede" : "#0d0d0d");
  document.documentElement.style.setProperty("--white", getComputedStyle(document.documentElement).getPropertyValue("--white") === "#d9dede" ? "#0d0d0d" : "#d9dede");
  document.documentElement.style.setProperty("--light-white", getComputedStyle(document.documentElement).getPropertyValue("--light-white") === "#eeeded" ? "#262626" : "#eeeded");
  document.documentElement.style.setProperty("--light-black", getComputedStyle(document.documentElement).getPropertyValue("--light-black") === "#262626" ? "#eeeded" : "#262626");
});

//  Dark mode switch
const darkMode = (toggleId) => {
  const toggle = document.getElementById(toggleId);

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("DarkOn");

  });
};

darkMode("darkmode-toggle");

// Show menu on mobile desing

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('navbar-toggle','navbar-menu')
