let catatanEditIndex = null;

  document.getElementById('simpanCatatan').addEventListener('click', () => {
    const input = document.getElementById('catatanInput');
    const isiCatatan = input.value.trim();
    if (isiCatatan !== '') {
      let semuaCatatan = JSON.parse(localStorage.getItem('catatanModding')) || [];

      if (catatanEditIndex !== null) {
        semuaCatatan[catatanEditIndex].isi = isiCatatan;
        semuaCatatan[catatanEditIndex].waktu = new Date().toLocaleString();
        catatanEditIndex = null;
      } else {
        semuaCatatan.push({
          isi: isiCatatan,
          waktu: new Date().toLocaleString()
        });
      }

      localStorage.setItem('catatanModding', JSON.stringify(semuaCatatan));
      input.value = '';
      tampilkanCatatan();
    }
  });

  function tampilkanCatatan() {
    const list = document.getElementById('daftarCatatanList');
    const semuaCatatan = JSON.parse(localStorage.getItem('catatanModding')) || [];

    list.innerHTML = '';

    if (semuaCatatan.length === 0) {
        // Tampilkan pesan default jika kosong
        const kosong = document.createElement('li');
        kosong.innerHTML = `<em>Belum ada catatan. Gunakan kolom di atas untuk menambahkan catatan modifikasi Anda.</em>`;
        kosong.style.color = '#64748b'; // Tailwind slate-500
        kosong.style.textAlign = 'center';
        kosong.style.padding = '1rem';
        list.appendChild(kosong);
        return;
    }

    semuaCatatan.slice().reverse().forEach((catatan, indexReverse) => {
        const index = semuaCatatan.length - 1 - indexReverse;

        // Preview 10 karakter pertama
        const previewIsi = catatan.isi.length > 10 ? catatan.isi.substring(0, 10) + '...' : catatan.isi;

        const li = document.createElement('li');
        li.innerHTML = `<strong>${catatan.waktu}</strong><br>${previewIsi}`;

        const actionDiv = document.createElement('div');
        actionDiv.classList.add('catatan-action');

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-edit icon-edit"></i>';
        editBtn.title = 'Edit';
        editBtn.onclick = () => editCatatan(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt icon-delete"></i>';
        deleteBtn.title = 'Hapus';
        deleteBtn.onclick = () => hapusCatatan(index);

        actionDiv.appendChild(editBtn);
        actionDiv.appendChild(deleteBtn);
        li.appendChild(actionDiv);
        list.appendChild(li);
    });
}

  function editCatatan(index) {
    const semuaCatatan = JSON.parse(localStorage.getItem('catatanModding')) || [];
    document.getElementById('catatanInput').value = semuaCatatan[index].isi;
    catatanEditIndex = index;
    window.location.hash = '#tuliscatatan';
  }

  function hapusCatatan(index) {
    let semuaCatatan = JSON.parse(localStorage.getItem('catatanModding')) || [];
    semuaCatatan.splice(index, 1);
    localStorage.setItem('catatanModding', JSON.stringify(semuaCatatan));
    tampilkanCatatan();
  }

  // Export ke file
  document.getElementById('exportCatatan').addEventListener('click', () => {
    const semuaCatatan = JSON.parse(localStorage.getItem('catatanModding')) || [];
    if (semuaCatatan.length === 0) return;

    let teks = 'Catatan Modding ViVienDo\n=======================\n\n';
    semuaCatatan.forEach((catatan, i) => {
      teks += `Catatan ${i + 1} (${catatan.waktu}):\n${catatan.isi}\n\n`;
    });

    const blob = new Blob([teks], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'catatan-modding-viviendo.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  document.addEventListener('DOMContentLoaded', tampilkanCatatan);