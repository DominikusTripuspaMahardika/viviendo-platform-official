(function () {
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const tokenInput = document.getElementById('token');
    const passwordInput = document.getElementById('password');
    const toast = document.getElementById('authToast');
    const authGate = document.getElementById('authGate');
    const authTitle = document.getElementById('authTitle');
    const authSwitchText = document.getElementById('authSwitchText');
    const authSubmitBtn = document.getElementById('authSubmitBtn');

    let mode = 'login'; // default
    let loginAttempts = 0;
    let lastAttemptTime = 0;

    function showToast(msg, success = true) {
        toast.textContent = msg;
        toast.style.background = success ? '#4ade80' : '#f87171';
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
    }

    function isAlphaNumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
    }

    function validateToken(token) {
        return /^[a-zA-Z0-9]{20,}$/.test(token);
    }

    function validatePassword(pwd) {
        return /^[a-zA-Z0-9]{12,}$/.test(pwd);
    }

    function containsForbiddenWords(username) {
        const forbidden = ['admin', 'root', 'user', 'test'];
        const lower = username.toLowerCase();
        return forbidden.some(w => lower.includes(w));
    }

    function isRepetitive(str) {
        const len = str.length;
        for (let i = 1; i <= len / 2; i++) {
            const part = str.slice(0, i);
            const repeated = part.repeat(Math.ceil(len / i)).slice(0, len);
            if (repeated === str) return true;
        }
        const chunks = str.match(/.{1,2}/g);
        if (chunks && new Set(chunks).size < Math.ceil(len / 2)) {
            return true;
        }
        return false;
    }

    function isTooSimilar(str1, str2) {
        return str1.toLowerCase().includes(str2.toLowerCase()) || str2.toLowerCase().includes(str1.toLowerCase());
    }

    function hasLetterAndNumber(str) {
        return /[a-zA-Z]/.test(str) && /\d/.test(str);
    }

    function getUsers() {
        return JSON.parse(localStorage.getItem('viviendoUsers') || '{}');
    }

    function saveUser(username, token, password) {
        const users = getUsers();
        if (users[username]) return { success: false, message: 'Username sudah digunakan.' };
        for (const user in users) {
            if (users[user].token === token) {
                return { success: false, message: 'Token/Key sudah digunakan.' };
            }
            if (users[user].password === password) {
                return { success: false, message: 'Password sudah digunakan.' };
            }
        }
        users[username] = { token, password };
        localStorage.setItem('viviendoUsers', JSON.stringify(users));
        return { success: true };
    }

    function checkLogin(username, token, password) {
        const users = getUsers();
        return users[username] && users[username].token === token && users[username].password === password;
    }

    function loginSuccess(username) {
        localStorage.setItem('viviendoAuth', username);
        localStorage.setItem('viviendoAuthTime', Date.now().toString());
        localStorage.setItem('viviendoLastLogin', JSON.stringify({ username, token, password }));
        authGate.classList.add('hidden');

        const welcomeUser = document.getElementById('welcomeUser');
        const welcomeModal = document.getElementById('welcomeModal');
        if (welcomeUser && welcomeModal) {
            welcomeUser.textContent = username;
            welcomeModal.classList.remove('hidden');
            setTimeout(() => welcomeModal.classList.add('hidden'), 5000);
        }
    }

    function updateAuthUI() {
        if (mode === 'login') {
            authTitle.textContent = 'Masuk ke Akun';
            authSubmitBtn.textContent = 'Masuk';
            authSwitchText.innerHTML = `Belum punya akun? <a href="#" id="switchLink">Daftar di sini</a>`;
            tokenInput.setAttribute('type', 'password');
        } else {
            authTitle.textContent = 'Daftar Akun Baru';
            authSubmitBtn.textContent = 'Daftar';
            authSwitchText.innerHTML = `Sudah memiliki akun? <a href="#" id="switchLink">Masuk di sini</a>`;
            tokenInput.setAttribute('type', 'text');
        }

        document.getElementById('switchLink').addEventListener('click', (e) => {
            e.preventDefault();
            mode = (mode === 'login') ? 'register' : 'login';
            updateAuthUI();
        });
    }

    if (!localStorage.getItem('viviendoAuth')) {
        updateAuthUI();
    } else {
        authGate.classList.add('hidden');
    }

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const token = tokenInput.value.trim();
        const password = passwordInput.value.trim();
        // Prefill input jika data login terakhir tersedia
        const lastLogin = JSON.parse(localStorage.getItem('viviendoLastLogin') || '{}');
        if (lastLogin.username) usernameInput.value = lastLogin.username;
        if (lastLogin.token) tokenInput.value = lastLogin.token;
        if (lastLogin.password) passwordInput.value = lastLogin.password;

        if (username.length < 8) return showToast('Username minimal 8 karakter.', false);
        if (containsForbiddenWords(username)) return showToast('Username tidak boleh mengandung kata seperti "admin", "root", "user", atau "test".', false);
        if (isRepetitive(username)) return showToast('Username terlalu mirip atau berulang.', false);
        if (isRepetitive(token)) return showToast('Token/Key terlalu mirip atau berulang.', false);
        if (isRepetitive(password)) return showToast('Password terlalu mirip atau berulang.', false);
        if (!isAlphaNumeric(username)) return showToast('Username hanya boleh huruf dan angka.', false);
        if (!isAlphaNumeric(token)) return showToast('Token/Key hanya boleh huruf dan angka.', false);
        if (!isAlphaNumeric(password)) return showToast('Password hanya boleh huruf dan angka.', false);
        if (!validateToken(token)) return showToast('Token/Key minimal 20 karakter.', false);
        if (!validatePassword(password)) return showToast('Password minimal 12 karakter.', false);
        if (isTooSimilar(username, token)) return showToast('Token tidak boleh mirip dengan Username.', false);
        if (isTooSimilar(username, password)) return showToast('Password tidak boleh mirip dengan Username.', false);
        if (!hasLetterAndNumber(token)) return showToast('Token harus mengandung huruf dan angka.', false);
        if (!hasLetterAndNumber(password)) return showToast('Password harus mengandung huruf dan angka.', false);

        if (mode === 'register') {
            const result = saveUser(username, token, password);
            if (result.success) {
                showToast('Registrasi berhasil!');
                mode = 'login';
                updateAuthUI();
            } else {
                showToast(result.message, false);
            }
        } else {
            const now = Date.now();
            const delay = Math.min(30000 * Math.floor(loginAttempts / 3), 5 * 60 * 1000);
            if (now - lastAttemptTime < delay) {
                const sisa = Math.ceil((delay - (now - lastAttemptTime)) / 1000);
                return showToast(`Terlalu banyak percobaan. Coba lagi dalam ${sisa} detik.`, false);
            }

            const success = checkLogin(username, token, password);
            if (success) {
                showToast('Login berhasil!');
                loginSuccess(username);
                loginAttempts = 0;
            } else {
                showToast('Username, Token, atau Password salah.', false);
                lastAttemptTime = now;
                loginAttempts++;
            }
        }
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("viviendoAuth");
            localStorage.removeItem("viviendoAuthTime");
            location.reload();
        });
    }

    const closeBtn = document.getElementById("closeWelcomeModal");
    const welcomeModal = document.getElementById("welcomeModal");
    if (closeBtn && welcomeModal) {
        closeBtn.addEventListener("click", () => {
            welcomeModal.classList.add("hidden");
        });
    }

    const AUTH_KEY = "viviendoAuth";
    const TIME_KEY = "viviendoAuthTime";
    const LIMIT = 168 * 60 * 60 * 1000;

    const refreshActivity = () => {
        if (localStorage.getItem(AUTH_KEY)) {
            localStorage.setItem(TIME_KEY, Date.now().toString());
        }
    };

    const checkInactivity = () => {
        const last = parseInt(localStorage.getItem(TIME_KEY));
        if (Date.now() - last > LIMIT) {
            localStorage.removeItem(AUTH_KEY);
            localStorage.removeItem(TIME_KEY);
            location.reload();
        }
    };

    if (localStorage.getItem(AUTH_KEY)) {
        checkInactivity();
        document.addEventListener("click", refreshActivity);
        document.addEventListener("scroll", refreshActivity);
        document.addEventListener("keydown", refreshActivity);
        document.addEventListener("mousemove", refreshActivity);
        document.addEventListener("touchstart", refreshActivity);
    }
});