let form = document.getElementById('signup-form');
let username = document.getElementById('username');
let email = document.getElementById('mail');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
let usernameError = document.getElementById('usernameErrors');
let mailError = document.getElementById('mailErrors');
let passwordError = document.getElementById('passwordErrors');
let confirmPasswordError = document.getElementById('confirmPasswordErrors');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    mailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Username validation
    if (username.value.length < 3) {
        usernameError.textContent = "Enter at least 3 characters";
        usernameError.style.color = "red";
        valid = false;
    }

    // Email validation
    if (!email.validity.valid) {
        mailError.textContent = "Enter a valid email";
        mailError.style.color = "red";
        valid = false;
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        passwordError.style.color = "red";
        valid = false;
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.style.color = "red";
        valid = false;
    }

    if (valid) {
        // Store data in localStorage if all validations pass
        let userData = {
            username: username.value,
            email: email.value,
            password: password.value
        };

        // Save to localStorage
        localStorage.setItem("signupData", JSON.stringify(userData));
        alert("Signup successful! Redirecting to login page...");

        // Reset the form
        form.reset();

        // Redirect to login page
        window.location.href = "login.html";
    }
});
