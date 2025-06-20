function randomHarga(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setHargaPaket() {
    const hargaStandar = randomHarga(5000, 10000);
    const hargaPremium = randomHarga(20000, 30000);
    document.getElementById('paketviviendo-standar-harga').textContent = 'Rp ' + hargaStandar.toLocaleString();
    document.getElementById('paketviviendo-premium-harga').textContent = 'Rp ' + hargaPremium.toLocaleString();
}

document.addEventListener("DOMContentLoaded", setHargaPaket);