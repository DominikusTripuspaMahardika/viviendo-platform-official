const riwayatUnduhanKey = 'riwayatUnduhan';

function getRiwayatUnduhan() {
  return JSON.parse(localStorage.getItem(riwayatUnduhanKey)) || [];
}

function saveRiwayatUnduhan(nama, jenis) {
  const riwayat = getRiwayatUnduhan();
  const existing = riwayat.find(item => item.nama === nama && item.jenis === jenis);

  if (existing) {
    existing.updatedAt = new Date().toISOString();
  } else {
    riwayat.push({ nama, jenis, createdAt: new Date().toISOString(), updatedAt: null });
  }

  localStorage.setItem(riwayatUnduhanKey, JSON.stringify(riwayat));
  renderRiwayatUnduhan();
}

function renderRiwayatUnduhan() {
  const riwayat = getRiwayatUnduhan();
  const modList = document.getElementById('riwayatModList');
  const levelList = document.getElementById('riwayatLevelList');
  const dataList = document.getElementById('riwayatDataList');
  const count = document.getElementById('riwayatCount');
  const summary = document.getElementById('riwayatSummary');
  const last = document.getElementById('riwayatLast');
  const chartContainer = document.querySelector('.riwayat-unduhan-chart-container');

  modList.innerHTML = '';
  levelList.innerHTML = '';
  dataList.innerHTML = '';

  if (riwayat.length === 0) {
    count.textContent = 'Tidak ada riwayat unduhan.';
    summary.textContent = '';
    last.textContent = '';
    chartContainer.style.display = 'none';

    const emptyItem = document.createElement('li');
    emptyItem.textContent = 'Tidak ada riwayat yang tersimpan.';
    emptyItem.style.color = '#64748b';
    emptyItem.style.fontStyle = 'italic';
    modList.appendChild(emptyItem);
    levelList.appendChild(emptyItem.cloneNode(true));
    dataList.appendChild(emptyItem.cloneNode(true));
    return;
  }

  chartContainer.style.display = 'flex';

  const mods = riwayat.filter(item => item.jenis === 'Modifikasi');
  const levels = riwayat.filter(item => item.jenis === 'Level');
  const datas = riwayat.filter(item => item.jenis === 'Data');

  mods.forEach(item => modList.appendChild(createRiwayatItem(item, 'fa-puzzle-piece')));
  levels.forEach(item => levelList.appendChild(createRiwayatItem(item, 'fa-layer-group')));
  datas.forEach(item => dataList.appendChild(createRiwayatItem(item, 'fa-database')));

  count.textContent = `Total Riwayat: ${riwayat.length}`;
  summary.innerHTML = `📁 Modifikasi: ${mods.length} | 🎮 Level: ${levels.length} | 🗃️ Data: ${datas.length}`;

  const lastItem = [...mods, ...levels, ...datas].sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))[0];
  const waktuLast = new Date(lastItem.updatedAt || lastItem.createdAt).toLocaleString();
  last.innerHTML = `📌 Terakhir diunduh: <strong>${lastItem.nama}</strong> — ${waktuLast}`;

  updateChart(mods.length, levels.length, datas.length);
}

function createRiwayatItem(item, icon) {
  const waktuAwal = new Date(item.createdAt).toLocaleString();
  const waktuUlang = item.updatedAt ? ` | 📅 Diunduh ulang: ${new Date(item.updatedAt).toLocaleString()}` : '';

  const li = document.createElement('li');
  li.innerHTML = `<i class="fas ${icon}"></i> ${item.nama} — 📅 ${waktuAwal}${waktuUlang}`;
  return li;
}

function exportRiwayat(format = 'md') {
  const riwayat = getRiwayatUnduhan();
  let content = '';

  if (format === 'md') {
    content += '# Riwayat Unduhan ViVienDo\n\n';
    riwayat.forEach(item => {
      const awal = new Date(item.createdAt).toLocaleString();
      const ulang = item.updatedAt ? ` _(ulang: ${new Date(item.updatedAt).toLocaleString()})_` : '';
      content += `- **${item.jenis}**: ${item.nama} _(awal: ${awal})_${ulang}\n`;
    });
  } else if (format === 'txt') {
    riwayat.forEach(item => {
      const awal = new Date(item.createdAt).toLocaleString();
      const ulang = item.updatedAt ? ` (ulang: ${new Date(item.updatedAt).toLocaleString()})` : '';
      content += `[${item.jenis}] ${item.nama} — ${awal}${ulang}\n`;
    });
  } else if (format === 'json') {
    content = JSON.stringify(riwayat, null, 2);
  }

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Riwayat-Unduhan-ViVienDo.${format}`;
  a.click();
  URL.revokeObjectURL(url);
}

function hapusRiwayatUnduhan() {
  localStorage.removeItem(riwayatUnduhanKey);
  renderRiwayatUnduhan();
}

let chart;
function updateChart(modCount, levelCount, dataCount) {
  const ctx = document.getElementById('riwayatChart').getContext('2d');
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Modifikasi', 'Level', 'Data'],
      datasets: [{
        data: [modCount, levelCount, dataCount],
        backgroundColor: ['#4caf50', '#3b82f6', '#f59e0b']
      }]
    },
    options: {
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderRiwayatUnduhan();
  document.getElementById('exportMdBtn').addEventListener('click', () => exportRiwayat('md'));
  document.getElementById('exportTxtBtn').addEventListener('click', () => exportRiwayat('txt'));
  document.getElementById('exportJsonBtn').addEventListener('click', () => exportRiwayat('json'));
  document.getElementById('hapusRiwayatBtn').addEventListener('click', hapusRiwayatUnduhan);
});