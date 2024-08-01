document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // You can add your form validation logic here

        // If validation passes, redirect to the index.html page
        window.location.href = '/html/index.html';
    });
});
