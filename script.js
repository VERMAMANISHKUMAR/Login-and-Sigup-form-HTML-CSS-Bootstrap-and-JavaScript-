// const loginLink = document.getElementById('login-link');
// const signupLink = document.getElementById('signup-link');

// loginLink.addEventListener('click', () => {
//     window.location.href = 'login.html';
// });

// signupLink.addEventListener('click', () => {
//     window.location.href = 'index.html';
// });
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validate and process signup
            if (name && email && password) {
                console.log('Signup details:', { name, email, password });
                alert('Signup successful!');
                window.location.href = 'index.html'; // Redirect to login page
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
