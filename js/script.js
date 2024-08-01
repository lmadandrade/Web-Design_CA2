document.addEventListener('DOMContentLoaded', function() {
    // Contact Pop-Up 
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

    // FadeIn effect for photos
    var photos = document.querySelectorAll('.photo');
    photos.forEach(function(photo) {
        photo.classList.add('loaded');
    });

    // photo overlay 
    var photoContainers = document.querySelectorAll('.photo-container');

    photoContainers.forEach(function(container) {
        var photo = container.querySelector('.photo');
        var overlay = container.querySelector('.overlay');

        photo.addEventListener('click', function() {
            // Hide all overlays
            document.querySelectorAll('.overlay').forEach(function(ov) {
                ov.style.display = 'none';
            });

            // Show the clicked overlay
            overlay.style.display = 'block';
        });

        // Hide the overlay when click
        window.addEventListener('click', function(event) {
            if (!container.contains(event.target)) {
                overlay.style.display = 'none';
            }
        });
    });
});
