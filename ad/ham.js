/*// Dark Mode
var body = document.querySelector("body");
var toggleSwitch = document.getElementById("toggle-switch");
if (toggleSwitch) {
    toggleSwitch.addEventListener('click', function () {
        if (body) {
            body.classList.toggle("dark-mode");
        }
    });
}
// Where User clicks on the menu button - open Menu
function myMenuFunction() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle("responsive");
    }
}
// Where User clicks on the close(X) button - close Menu
function menuClose() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove("responsive");
    }
}
// Close the side navbar where user click on the link
var navLinks = document.querySelectorAll(".link");
function linkAction() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu && navMenu.classList.contains("responsive")) {
        navMenu.classList.remove("responsive");
    }
}
navLinks.forEach(function (n) { return n.addEventListener('click', linkAction); });
// Get the hamburger button
var menuBtn = document.querySelector(".nav_menu_btn");
// Add an event listener to handle clicks on the hamburger button
if (menuBtn) {
    menuBtn.addEventListener('click', myMenuFunction);
}
*/