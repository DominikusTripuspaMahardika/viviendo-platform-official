function handleGoogleLogin(response) {
  try {
    const data = parseJwt(response.credential);

    const username = data.email || data.name || data.sub;
    const token = data.sub; // ID unik dari Google
    const password = `${data.sub}_google`; // Unik, sebagai dummy password

    const users = JSON.parse(localStorage.getItem("viviendoUsers") || "{}");

    // Simpan pengguna baru jika belum ada
    if (!users[username]) {
      users[username] = { token, password };
      localStorage.setItem("viviendoUsers", JSON.stringify(users));
    }

    // Simpan data login ke localStorage
    localStorage.setItem("viviendoAuth", username);
    localStorage.setItem("viviendoAuthTime", Date.now().toString());
    localStorage.setItem("viviendoLastLogin", JSON.stringify({ username, token, password }));

    // Tampilkan toast notifikasi
    showAuthToast(`Selamat datang, ${data.name || data.email || "Pengguna Google"}!`, "#4ade80");

    // Sembunyikan auth gate & tampilkan welcome modal
    document.getElementById("authGate")?.classList.add("hidden");
    showWelcomeModal(data.name || data.email || "Pengguna Google");

  } catch (error) {
    console.error("Gagal memproses login Google:", error);
    showAuthToast("Login Google gagal. Silakan coba lagi.", "#f87171"); // warna merah untuk error
  }
}

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Gagal mem-parse token JWT:", error);
    throw new Error("Token tidak valid");
  }
}

function showWelcomeModal(name) {
  const welcomeUser = document.getElementById("welcomeUser");
  const welcomeModal = document.getElementById("welcomeModal");
  if (welcomeUser && welcomeModal) {
    welcomeUser.textContent = name;
    welcomeModal.classList.remove("hidden");
    setTimeout(() => welcomeModal.classList.add("hidden"), 5000);
  }
}

function showAuthToast(message, background = "#4ade80") {
  const toast = document.getElementById("authToast");
  if (toast) {
    toast.textContent = message;
    toast.style.background = background;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 3000);
  }
}