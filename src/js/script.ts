
const btn = document.getElementById('button') as HTMLInputElement;

document.getElementById('form')?.addEventListener('submit', function(event: Event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_psbiz3k';
   const templateID = 'template_sg84iws';

   (window as any).emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    })
    .catch((err: any) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});





// Dark Mode
const body= document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
        if (body) {
            body.classList.toggle("dark-mode");
        }
    });
}

// Where User clicks on the menu button - open Menu
function myMenuFunction(): void {
    const navMenu: HTMLElement | null = document.getElementById('navMenu');

    if (navMenu) {
        navMenu.classList.toggle("responsive");
    }
}

// Where User clicks on the close(X) button - close Menu
function menuClose(): void {
    const navMenu: HTMLElement | null = document.getElementById('navMenu');

    if (navMenu) {
        navMenu.classList.remove("responsive");
    }
}

// Close the side navbar where user click on the link
const navLinks: NodeListOf<Element> = document.querySelectorAll(".link");
function linkAction(): void {
    const navMenu: HTMLElement | null = document.getElementById("navMenu");
    if (navMenu && navMenu.classList.contains("responsive")) {
        navMenu.classList.remove("responsive");
    }
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

// Get the hamburger button
const menuBtn: HTMLElement | null = document.querySelector(".nav_menu_btn");

// Add an event listener to handle clicks on the hamburger button
if (menuBtn) {
    menuBtn.addEventListener('click', myMenuFunction);
}

