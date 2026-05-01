const g    = id => document.getElementById(id).value.trim();
const err  = msg => { const e = document.getElementById('error'); e.textContent = msg; e.style.display = 'block'; };
const load = k => JSON.parse(localStorage.getItem(k)) || [];
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const checkAuth = (role) => {
    const s = JSON.parse(localStorage.getItem('session'));
    if (!s || !s.loggedIn || (role && s.role !== role)) location.href = 'login.html';
    return s;
};
