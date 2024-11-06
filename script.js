// script.js

// Example JavaScript to toggle mobile menu (if needed in future)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function openModal(title, description, price) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

function scrollToOffers() {
    document.getElementById('offers').scrollIntoView({ behavior: 'smooth' });
}

function showDetails(title, description, price) {
    document.getElementById('modal-offer-title').innerText = title;
    document.getElementById('modal-offer-description').innerText = description;
    document.getElementById('modal-offer-price').innerText = price;
    document.getElementById('detailsModal').style.display = "block";
}

function closeDetails() {
    document.getElementById('detailsModal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('detailsModal')) {
        closeDetails();
    }
}

function showPostDetails(title, content) {
    document.getElementById('modal-post-title').innerText = title;
    document.getElementById('modal-post-content').innerText = content;
    document.getElementById('postModal').style.display = "block";
}

function closePostDetails() {
    document.getElementById('postModal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('postModal')) {
        closePostDetails();
    }
}
