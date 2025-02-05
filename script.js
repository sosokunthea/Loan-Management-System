// Example: Form validation for login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Please fill in all fields.');
    }
});