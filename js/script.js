// Contact button

document.addEventListener('DOMContentLoaded', function() {
    var popUp = document.getElementById('contactPopUp');
    var btn = document.getElementById('contactBtn');
    var span = document.getElementById('spanForm');

    btn.onclick = function() {
        popUp.style.display = 'block';
    }

    span.onclick = function() {
        popUp.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popUp) {
            popUp.style.display = 'none';
        }
    }

    document.getElementById('contactForm').onsubmit = function(e) {
        e.preventDefault();
        alert("Form submitted successfully!");
        popUp.style.display = 'none';
    }
});

// JavaScript to add 'loaded' class for fade-in effect
document.addEventListener("DOMContentLoaded", function() {
    var photos = document.querySelectorAll('.photo');
    photos.forEach(function(photo) {
        photo.classList.add('loaded');
    });
});