// Handle Registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === email)) {
            alert('User already exists!');
            return;
        }

        // Save new user
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        window.location.href = 'index.html';
    });
}

// Handle Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Check credentials
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('currentUser', email);
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid email or password!');
        }
    });
}