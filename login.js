(function () {
    const authForm = document.getElementById('authForm');
    const usernameInput = document.getElementById('username');
    const tokenInput = document.getElementById('token');
    const passwordInput = document.getElementById('password');
    const toast = document.getElementById('authToast');
    const authGate = document.getElementById('authGate');
    const authTitle = document.getElementById('authTitle');
    const switchToRegister = document.getElementById('switchToRegister');

    let mode = 'login';

    function showToast(msg, success = true) {
        toast.textContent = msg;
        toast.style.background = success ? '#4ade80' : '#f87171';
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3000);
    }

    function validateToken(token) {
        return /^[a-zA-Z0-9]{20,}$/.test(token);
    }

    function validatePassword(pwd) {
        return /^[a-zA-Z0-9]{12,}$/.test(pwd);
    }

    function getUsers() {
        return JSON.parse(localStorage.getItem('viviendoUsers') || '{}');
    }

    function saveUser(username, token, password) {
        const users = getUsers();
        if (users[username]) return false;
        users[username] = { token, password };
        localStorage.setItem('viviendoUsers', JSON.stringify(users));
        return true;
    }

    function checkLogin(username, token, password) {
        const users = getUsers();
        return users[username] && users[username].token === token && users[username].password === password;
    }

    function loginSuccess(username) {
        localStorage.setItem('viviendoAuth', username);
        localStorage.setItem('viviendoAuthTime', Date.now().toString());
        document.getElementById('authGate').classList.add('hidden');

        // Tampilkan modal selamat datang
        const welcomeUser = document.getElementById('welcomeUser');
        const welcomeModal = document.getElementById('welcomeModal');
        if (welcomeUser && welcomeModal) {
            welcomeUser.textContent = username;
            welcomeModal.classList.remove('hidden');

            // Tutup otomatis setelah 5 detik
            setTimeout(() => {
                welcomeModal.classList.add('hidden');
            }, 5000);
        }
    }

    if (localStorage.getItem('viviendoAuth')) {
        authGate.classList.add('hidden');
    }

    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        if (mode === 'login') {
            mode = 'register';
            authTitle.textContent = 'Daftar Akun Baru';
            switchToRegister.textContent = 'Sudah punya akun? Masuk';
        } else {
            mode = 'login';
            authTitle.textContent = 'Masuk ke ViVienDo';
            switchToRegister.textContent = 'Belum punya akun? Daftar di sini';
        }
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const token = tokenInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateToken(token)) {
            return showToast('Token/Key minimal 20 karakter dan hanya huruf/angka.', false);
        }
        if (!validatePassword(password)) {
            return showToast('Password minimal 12 karakter dan hanya huruf/angka.', false);
        }

        if (mode === 'register') {
            const success = saveUser(username, token, password);
            if (success) {
                showToast('Registrasi berhasil!');
                mode = 'login';
                authTitle.textContent = 'Masuk ke ViVienDo';
                switchToRegister.textContent = 'Belum punya akun? Daftar di sini';
            } else {
                showToast('Username sudah digunakan.', false);
            }
        } else {
            const success = checkLogin(username, token, password);
            if (success) {
                showToast('Login berhasil!');
                loginSuccess(username);
            } else {
                showToast('Username, Token, atau Password salah.', false);
            }
        }
    });
})();

// === Logout Button ===
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("viviendoAuth");
            location.reload(); // Refresh halaman setelah logout
        });
    }
});

// === Auto Logout Setelah 12 Jam Tidak Aktif ===
(function () {
    const AUTH_KEY = "viviendoAuth";
    const TIME_KEY = "viviendoAuthTime";
    const LIMIT = 12 * 60 * 60 * 1000; // 12 jam dalam ms

    // Perbarui waktu aktivitas saat ada event penting
    const refreshActivity = () => {
        if (localStorage.getItem(AUTH_KEY)) {
            localStorage.setItem(TIME_KEY, Date.now().toString());
        }
    };

    // Logout jika melebihi waktu
    const checkInactivity = () => {
        const last = parseInt(localStorage.getItem(TIME_KEY));
        if (Date.now() - last > LIMIT) {
            localStorage.removeItem(AUTH_KEY);
            localStorage.removeItem(TIME_KEY);
            location.reload();
        }
    };

    // Pasang pemantauan
    if (localStorage.getItem(AUTH_KEY)) {
        checkInactivity();
        document.addEventListener("click", refreshActivity);
        document.addEventListener("scroll", refreshActivity);
        document.addEventListener("keydown", refreshActivity);
        document.addEventListener("mousemove", refreshActivity);
        document.addEventListener("touchstart", refreshActivity);
    }
})();

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closeWelcomeModal");
  const welcomeModal = document.getElementById("welcomeModal");
  if (closeBtn && welcomeModal) {
    closeBtn.addEventListener("click", () => {
      welcomeModal.classList.add("hidden");
    });
  }
});
