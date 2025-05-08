// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }
});

// Handle Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
}