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



