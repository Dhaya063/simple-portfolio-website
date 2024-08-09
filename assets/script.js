// Dark Mode
const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
});

// Scroll Button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// document.querySelectorAll('.visit-button').forEach(button => {
//     button.addEventListener('mouseover', () => {
//         button.style.width = '120px'; // Expand width
//     });
//     button.addEventListener('mouseout', () => {
//         button.style.width = '80px'; // Reset width
//     });
// });


// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.nav-right');
// let homepage = document.querySelector('.homepage');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('fa-x'); 
//     navbar.classList.toggle('active');

//     // Adjust section position when the navigation bar is active
//     if (navbar.classList.contains('active')) {
//         homepage.style.transform = 'translateY(60px)';
//     } else {
//         homepage.style.transform = 'translateY(0)';
//     }
// };



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-right');
let homepage = document.querySelector('.homepage');
let footer = document.querySelector('.footer');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x'); 
    navbar.classList.toggle('active');

    // Adjust section position when the navigation bar is active
    if (navbar.classList.contains('active')) {
        homepage.style.transform = 'translateY(' + navbar.offsetHeight + 'px)';
        footer.style.transform = 'translateY(' + navbar.offsetHeight + 'px)';

    } else {
        homepage.style.transform = 'translateY(0)';
        footer.style.transform = 'translateY(0)';

    }
};
