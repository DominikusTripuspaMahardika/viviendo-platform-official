(function(){
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
    authGate.classList.add('hidden');
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