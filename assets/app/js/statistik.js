// === Statistik Dinamis Harian (Profesional + Berkembang Tiap Hari) ===
document.addEventListener("DOMContentLoaded", () => {
  const statMax = {
    "stat-pengunjung": 500,
    "stat-aktif": 500,
    "stat-gratis": 500,
    "stat-premium": 500,
    "stat-komunitas": 500,
  };

  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  const statsKey = "viviendoStats";
  const stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

  // Inisialisasi jika belum ada
  if (!stats.lastUpdated || stats.lastUpdated !== today) {
    stats.lastUpdated = today;

    for (const id in statMax) {
      const prev = stats[id] || Math.floor(Math.random() * 50); // awal: 0–49
      const increment = Math.floor(Math.random() * 20) + 1; // naik 1–20
      stats[id] = Math.min(prev + increment, statMax[id]);
    }

    localStorage.setItem(statsKey, JSON.stringify(stats));
  }

  // Tampilkan nilai
  for (const id in statMax) {
    const el = document.getElementById(id);
    if (el && stats[id] !== undefined) {
      el.textContent = stats[id].toLocaleString("id-ID");
    }
  }
});