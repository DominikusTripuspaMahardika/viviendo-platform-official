// Data Produk
const produkData = [
    // { nama: "Mastery 200 + Regular", deskripsi: "Anda akan menerima data eksklusif yang mencakup tiga file utama, dimulai dengan PP.dat sebuah file konfigurasi penting yang telah dimodifikasi secara optimal untuk meningkatkan pengalaman bermain dalam Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.19, sociabuzz: "../data/pp.dat", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 300 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.25, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 400 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.31, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 500 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.38, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 600 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.44, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 700 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.5, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 800 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.56, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 900 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.62, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 999 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.69, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 1000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.75, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 2000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.81, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 3000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.88, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 4000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 0.94, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 5000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.0, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 6000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.06, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 7000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.12, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 8000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.19, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 9000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.25, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 9999 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.31, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 10000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.38, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 20000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.44, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 30000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.5, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 40000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.56, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 50000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.62, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 60000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.69, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 70000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.75, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 80000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.81, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 90000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.88, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 99999 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 1.94, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 100000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.0, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 200000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.06, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 300000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.12, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 400000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.19, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 500000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.25, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 600000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.31, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 700000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.38, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 800000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.44, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 900000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.5, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 999999 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.56, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 1000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.62, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 2000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.69, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 3000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.75, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 4000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.81, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 5000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.88, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 6000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 2.94, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 7000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.0, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 8000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.06, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 9000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.12, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 9999999 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.19, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 10000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.25, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 20000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.31, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 30000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.38, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 40000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.44, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 50000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.5, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 60000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.56, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 70000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.62, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 80000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.69, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 90000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.75, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 99999999 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.81, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428", terlaris: true },
    { nama: "Mastery 100000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.88, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 110000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 3.94, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 120000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 4.0, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 123456789 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 4.06, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 130000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 4.12, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 137853785 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 4.19, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 140000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 4.25, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Mastery 150000000 + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif yang terdiri dari tiga file utama: PP.dat, PlantLevels.rton, dan PlantMastery.rton, yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 4.31, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428" },
    { nama: "Data Premium Lengkap + LifeTime", deskripsi: "Anda akan memperoleh paket data eksklusif lengkap yang terdiri dari file PP.dat, PlantLevels.rton, dan PlantMastery.rton mastery 300 hingga 150000000 yang masing-masing berisi konfigurasi premium untuk pengalaman maksimal dalam permainan Plants vs Zombies™ 2.", thumbnail: "../images/produk/produk.jpg", harga: 5.78, sociabuzz: "https://sociabuzz.com/viviendo_channel/tribe", whatsapp: "https://wa.me/6285706800428", terlaris: true }
];
const perPage = 8;
let currentPage = 1;
// Ambil halaman terakhir dari localStorage jika tersedia
const halamanSebelumnya = localStorage.getItem('halamanProdukTerakhir');
if (halamanSebelumnya && !isNaN(halamanSebelumnya)) {
    currentPage = parseInt(halamanSebelumnya);
}
function renderProduk() {
    const list = document.getElementById('produk-list');
    list.innerHTML = "";
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const sliced = produkData.slice(start, end);
    sliced.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'daftar-produk-premium-card';
        card.innerHTML = `
            <div class="daftar-produk-premium-thumbnail">
                <img src="${item.thumbnail || 'https://via.placeholder.com/300x180?text=No+Image'}" alt="Thumbnail Produk">
                ${item.terlaris ? '<span class="label-terlaris">Terlaris</span>' : ''}
            </div>
            <div class="daftar-produk-premium-info">
                <h3 class="daftar-produk-premium-nama">${item.nama}</h3>
                <p class="daftar-produk-premium-deskripsi">${item.deskripsi}</p>
                <div class="daftar-produk-premium-aksi">
                    <a href="#" class="beli"
                        data-nama="${item.nama}"
                        data-harga="${item.harga}"
                        data-link="${item.sociabuzz}">
                        <i class="fas fa-cart-shopping"></i> Verifikasi Pembelian
                    </a>
                    <a href="${item.whatsapp}" target="_blank" class="kirim">
                        <i class="fab fa-whatsapp"></i> Verifikasi Pembayaran
                    </a>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
    // Update indikator halaman
    document.getElementById('pageIndicator').textContent = currentPage;
    // Simpan halaman saat ini ke localStorage
    localStorage.setItem('halamanProdukTerakhir', currentPage);
    // Re-bind event listener tombol beli
    document.querySelectorAll('.beli').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const nama = btn.dataset.nama;
            const harga = parseFloat(btn.dataset.harga);
            // Modal khusus untuk produk gratis Mastery 200
            if (nama.includes("Mastery 200") && harga === 0) {
                document.getElementById('gratisModal').classList.remove('hidden');
                showToastUnduh();
                return;
            }
            const diskonPersen = 30;
            const diskon = harga * (diskonPersen / 100);
            const total = harga - diskon;
            const link = btn.dataset.link;
            document.getElementById('produkNama').textContent = nama;
            document.getElementById('produkHarga').textContent = `$ ${harga.toFixed(2)}`;
            document.getElementById('produkTotal').textContent = `$ ${total.toFixed(2)}`;
            document.getElementById('lanjutkanBtn').onclick = () => window.open(link, '_blank');
            document.getElementById('verifikasiModal').classList.remove('hidden');
        });
    });
}
// Navigasi halaman sebelumnya
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProduk();
    }
});
// Navigasi halaman selanjutnya
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage * perPage < produkData.length) {
        currentPage++;
        renderProduk();
    }
});
// Tombol batal pada modal verifikasi
if (document.getElementById('batalBtn')) {
    document.getElementById('batalBtn').addEventListener('click', () => {
        document.getElementById('verifikasiModal').classList.add('hidden');
    });
}
// FAQ Interaktif Accordion
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".faqinteraktifaccordion-item");
    items.forEach((item) => {
        const question = item.querySelector(".faqinteraktifaccordion-question");
        question.addEventListener("click", () => {
            item.classList.toggle("active");
            items.forEach((el) => {
                if (el !== item) el.classList.remove("active");
            });
        });
    });
});
// Optional: Scroll smooth saat buka accordion
document.querySelectorAll('.faqinteraktifaccordion-question').forEach(button => {
    button.addEventListener('click', () => {
        setTimeout(() => {
            button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
    });
});
// Render awal
renderProduk();

function tampilkanStatistikSemuaProduk() {
    const canvas = document.getElementById('statistikpanelproduk-chart');
    if (!canvas) return;
    const storageKey = 'statistikpanelproduk';
    const now = Date.now();
    const threeHours = 3 * 60 * 60 * 1000;
    const maxJumlah = 999;
    let savedData = JSON.parse(localStorage.getItem(storageKey));
    let labels = produkData.map((p, i) => {
        const match = p.nama.match(/Mastery\s+(\d+)/i);
        return match ? `Mastery ${match[1]}` : `Data Premium Lengkap`;
    });
    if (!savedData || !savedData.jumlah || savedData.jumlah.length !== produkData.length) {
        // Inisialisasi awal
        savedData = {
            jumlah: produkData.map(() => Math.floor(Math.random() * 200) + 1),
            lastUpdate: now
        };
        localStorage.setItem(storageKey, JSON.stringify(savedData));
    } else if (now - savedData.lastUpdate >= threeHours) {
        // Tambahkan jumlah secara acak (1-100) setiap 3 jam
        savedData.jumlah = savedData.jumlah.map(val => Math.min(val + Math.floor(Math.random() * 100) + 1, maxJumlah));
        savedData.lastUpdate = now;
        localStorage.setItem(storageKey, JSON.stringify(savedData));
    }
    const ctx = canvas.getContext('2d');
    if (window.statistikChart) {
        window.statistikChart.destroy();
    }
    window.statistikChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Jumlah Dibeli (tersimpan)',
                data: savedData.jumlah,
                backgroundColor: 'rgba(59, 130, 246, 0.65)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 1,
                borderRadius: 4,
                barPercentage: 0.6,
                categoryPercentage: 0.8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            interaction: {
                mode: 'index',
                intersect: false,
                axis: 'x'
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: '#111827',
                    titleColor: '#ffffff',
                    bodyColor: '#d1d5db',
                    borderColor: '#60a5fa',
                    borderWidth: 1,
                    cornerRadius: 6,
                    titleFont: {
                        size: 13,
                        weight: 'bold',
                        family: 'Segoe UI'
                    },
                    bodyFont: {
                        size: 12,
                        family: 'Segoe UI'
                    },
                    callbacks: {
                        title: function (items) {
                            const label = items[0].label;
                            return `${label}`;
                        },
                        label: function (item) {
                            return `Telah dibeli sebanyak ${item.raw} kali`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 11,
                            family: 'Segoe UI'
                        },
                        color: '#1e293b',
                        autoSkip: false,
                        maxRotation: 60,
                        minRotation: 45
                    },
                    grid: {
                        color: 'rgba(229, 231, 235, 0.3)',
                        drawOnChartArea: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 1000,
                    ticks: {
                        stepSize: 100,
                        font: {
                            size: 11,
                            family: 'Segoe UI'
                        },
                        color: '#1e293b'
                    },
                    grid: {
                        color: 'rgba(229, 231, 235, 0.3)'
                    }
                }
            }
        }
    });
}
window.addEventListener('DOMContentLoaded', () => {
    renderProduk();
    tampilkanStatistikSemuaProduk();
    // Optional: resize sync
    window.addEventListener('resize', () => {
        if (window.statistikChart) {
            window.statistikChart.resize();
        }
    });
});

function showToastUnduh() {
    const toast = document.getElementById('toastUnduh');
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000); // tampil selama 4 detik
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", () => {
            const path = button.closest(".daftradatagratis-path").dataset.path;
            navigator.clipboard.writeText(path).then(() => {
                // Umpan balik tombol
                button.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                }, 1500);
                // Tampilkan toast
                showCopyToast();
            });
        });
    });
});

// Fungsi toast
function showCopyToast() {
    const toast = document.getElementById("copyToast");
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2500);
}

// Smooth scroll ke bagian target saat tombol filter/tag ditekan
document.querySelectorAll('.koleksi-filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-target'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // offset untuk header tetap
                behavior: 'smooth'
            });
        }
    });
});

// function formatHitunganWaktu(secs) {
//     const h = String(Math.floor(secs / 3600)).padStart(2, "0");
//     const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
//     const s = String(secs % 60).padStart(2, "0");
//     return `${h}:${m}:${s}`;
// }
// function mulaiSiklusBonus() {
//     const timerEl = document.getElementById("hitunganmundur-bonus-waktu");
//     const messageEl = document.getElementById("hitunganmundur-bonus-pesan");
//     const container = document.querySelector(".hitunganmundur-bonus-container");
//     if (!timerEl || !messageEl) return;
//     const now = Date.now();
//     const keyBonusEnd = "hitunganmundur-bonus-akhir";
//     const keyDelayEnd = "hitunganmundur-delay-akhir";
//     const keyStatus = "hitunganmundur-status"; // 'active' atau 'delay'
//     const bonusEnd = parseInt(localStorage.getItem(keyBonusEnd));
//     const delayEnd = parseInt(localStorage.getItem(keyDelayEnd));
//     const status = localStorage.getItem(keyStatus);
//     function setBonusBaru() {
//         const durasi = (Math.floor(Math.random() * 31) + 15) * 60 * 1000;
//         const waktuAkhir = Date.now() + durasi;
//         localStorage.setItem(keyBonusEnd, waktuAkhir);
//         localStorage.setItem(keyStatus, "active");
//         localStorage.removeItem(keyDelayEnd);
//         jalankanHitungan(waktuAkhir, "active");
//     }
//     function setDelayBaru() {
//         const durasi = (Math.floor(Math.random() * 10) + 1) * 60 * 1000;
//         const waktuAkhir = Date.now() + durasi;
//         localStorage.setItem(keyDelayEnd, waktuAkhir);
//         localStorage.setItem(keyStatus, "delay");
//         localStorage.removeItem(keyBonusEnd);
//         jalankanHitungan(waktuAkhir, "delay");
//     }
//     function jalankanHitungan(waktuTarget, mode) {
//         function update() {
//             const sisa = Math.floor((waktuTarget - Date.now()) / 1000);
//             if (sisa > 0) {
//                 timerEl.textContent = formatHitunganWaktu(sisa);
//                 if (mode === "active") {
//                     messageEl.textContent = "Bonus spesial ini akan berakhir dalam:";
//                     container.classList.remove("hitunganmundur-bonus-delay");
//                 } else {
//                     messageEl.textContent = "Bonus spesial ini sudah berakhir.";
//                     container.classList.add("hitunganmundur-bonus-delay");
//                 }
//                 setTimeout(update, 1000);
//             } else {
//                 if (mode === "active") {
//                     setDelayBaru();
//                 } else {
//                     setBonusBaru();
//                 }
//             }
//         }
//         update();
//     }
//     if (status === "active" && bonusEnd && bonusEnd > now) {
//         jalankanHitungan(bonusEnd, "active");
//     } else if (status === "delay" && delayEnd && delayEnd > now) {
//         jalankanHitungan(delayEnd, "delay");
//     } else {
//         setBonusBaru();
//     }
// }
// window.addEventListener("DOMContentLoaded", mulaiSiklusBonus);

// const namaPembeliFiktif = [
//     // Indonesia (10)
//     "Dika dari Surabaya",
//     "Rani dari Bandung",
//     "Alex dari Jakarta",
//     "Lia dari Medan",
//     "Bayu dari Makassar",
//     "Sari dari Bali",
//     "Riko dari Semarang",
//     "Tari dari Yogyakarta",
//     "Zaki dari Aceh",
//     "Dian dari Banjarmasin",
//     // Asia (10)
//     "Hiroshi from Tokyo",
//     "Min-Ji from Seoul",
//     "Thanh from Hanoi",
//     "Wei from Beijing",
//     "Ayu from Kuala Lumpur",
//     "Anya from Mumbai",
//     "Jasper from Singapore",
//     "Nurul from Brunei",
//     "Sokha from Phnom Penh",
//     "Zarina from Tashkent",
//     // Eropa (12)
//     "Liam from London",
//     "Amelia from Manchester",
//     "Julien from Paris",
//     "Sofia from Madrid",
//     "Marco from Milan",
//     "Greta from Berlin",
//     "Eva from Prague",
//     "Peter from Amsterdam",
//     "Anna from Warsaw",
//     "Lucas from Zurich",
//     "Marta from Lisbon",
//     "Nico from Vienna",
//     // Amerika (10)
//     "Emily from New York",
//     "Daniel from Los Angeles",
//     "Sophia from Toronto",
//     "Lucas from Chicago",
//     "Camila from Mexico City",
//     "Mateo from Buenos Aires",
//     "Emma from Boston",
//     "Liam from Miami",
//     "Valentina from Bogotá",
//     "André from São Paulo",
//     // Afrika (10)
//     "Amina from Nairobi",
//     "Kwame from Accra",
//     "Zahra from Cairo",
//     "Samuel from Lagos",
//     "Fatima from Casablanca",
//     "Neo from Johannesburg",
//     "Musa from Algiers",
//     "Laila from Tunis",
//     "Selam from Addis Ababa",
//     "Youssef from Khartoum",
//     // Oceania (10)
//     "Olivia from Sydney",
//     "Noah from Melbourne",
//     "Isla from Auckland",
//     "Jack from Brisbane",
//     "Chloe from Perth",
//     "Harper from Wellington",
//     "Luca from Adelaide",
//     "Ella from Hobart",
//     "Leo from Christchurch",
//     "Grace from Gold Coast"
// ];
// const produkFiktif = [
//     "Mastery 300 + LifeTime",
//     "Mastery 400 + LifeTime",
//     "Mastery 500 + LifeTime",
//     "Mastery 600 + LifeTime",
//     "Mastery 700 + LifeTime",
//     "Mastery 800 + LifeTime",
//     "Mastery 900 + LifeTime",
//     "Mastery 999 + LifeTime",
//     "Mastery 1000 + LifeTime",
//     "Mastery 2000 + LifeTime",
//     "Mastery 3000 + LifeTime",
//     "Mastery 4000 + LifeTime",
//     "Mastery 5000 + LifeTime",
//     "Mastery 6000 + LifeTime",
//     "Mastery 7000 + LifeTime",
//     "Mastery 8000 + LifeTime",
//     "Mastery 9000 + LifeTime",
//     "Mastery 9999 + LifeTime",
//     "Mastery 10000 + LifeTime",
//     "Mastery 20000 + LifeTime",
//     "Mastery 30000 + LifeTime",
//     "Mastery 40000 + LifeTime",
//     "Mastery 50000 + LifeTime",
//     "Mastery 60000 + LifeTime",
//     "Mastery 70000 + LifeTime",
//     "Mastery 80000 + LifeTime",
//     "Mastery 90000 + LifeTime",
//     "Mastery 99999 + LifeTime",
//     "Mastery 100000 + LifeTime",
//     "Mastery 200000 + LifeTime",
//     "Mastery 300000 + LifeTime",
//     "Mastery 400000 + LifeTime",
//     "Mastery 500000 + LifeTime",
//     "Mastery 600000 + LifeTime",
//     "Mastery 700000 + LifeTime",
//     "Mastery 800000 + LifeTime",
//     "Mastery 900000 + LifeTime",
//     "Mastery 999999 + LifeTime",
//     "Mastery 1000000 + LifeTime",
//     "Mastery 2000000 + LifeTime",
//     "Mastery 3000000 + LifeTime",
//     "Mastery 4000000 + LifeTime",
//     "Mastery 5000000 + LifeTime",
//     "Mastery 6000000 + LifeTime",
//     "Mastery 7000000 + LifeTime",
//     "Mastery 8000000 + LifeTime",
//     "Mastery 9000000 + LifeTime",
//     "Mastery 9999999 + LifeTime",
//     "Mastery 10000000 + LifeTime",
//     "Mastery 20000000 + LifeTime",
//     "Mastery 30000000 + LifeTime",
//     "Mastery 40000000 + LifeTime",
//     "Mastery 50000000 + LifeTime",
//     "Mastery 60000000 + LifeTime",
//     "Mastery 70000000 + LifeTime",
//     "Mastery 80000000 + LifeTime",
//     "Mastery 90000000 + LifeTime",
//     "Mastery 99999999 + LifeTime",
//     "Mastery 100000000 + LifeTime",
//     "Mastery 123456789 + LifeTime",
//     "Mastery 137853785 + LifeTime",
//     "Complete Data Premium + LifeTime"
// ];
// function tampilkanLiveNotif() {
//     const nama = namaPembeliFiktif[Math.floor(Math.random() * namaPembeliFiktif.length)];
//     const produk = produkFiktif[Math.floor(Math.random() * produkFiktif.length)];
//     const text = `🎉 ${nama} baru saja membeli ${produk}!`;
//     const modal = document.getElementById("liveNotifModal");
//     const textElem = document.getElementById("liveNotifText");
//     textElem.textContent = text;
//     modal.classList.remove("hidden");
//     // Sembunyikan setelah 5 detik
//     setTimeout(() => {
//         modal.classList.add("hidden");
//     }, 5000);
// }
// // Munculkan notifikasi setiap 20-40 detik secara acak
// function mulaiNotifikasiLiveOtomatis() {
//     setInterval(() => {
//         tampilkanLiveNotif();
//     }, Math.floor(Math.random() * 20000) + 20000); // antara 20s - 40s
// }
// mulaiNotifikasiLiveOtomatis();

let currentIndex = 0;
const slides = document.querySelectorAll('.evowarsio-slide');
const totalSlides = slides.length;

// Fungsi untuk memindahkan ke slide berikutnya
function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        // Menyambung langsung ke gambar pertama tanpa geser
        currentIndex = 0;
        updateCarouselPosition(); // Memperbarui posisi
        setTimeout(() => {
            // Memulai transisi secara halus setelah update posisi
            carouselInner.style.transition = "none";
            updateCarouselPosition();
            setTimeout(() => {
                // Kembali ke transisi normal
                carouselInner.style.transition = "transform 0.5s ease-in-out";
            }, 100); // Delay kecil untuk efek transisi mulus
        }, 100);
    } else {
        updateCarouselPosition();
    }
}

// Fungsi untuk memindahkan ke slide sebelumnya
function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Kembali ke gambar terakhir
    }
    updateCarouselPosition();
}

// Fungsi untuk memperbarui posisi carousel berdasarkan index gambar
function updateCarouselPosition() {
    const carouselInner = document.querySelector('.evowarsio-carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listener untuk tombol next dan prev
document.querySelector('.evowarsio-next').addEventListener('click', moveToNextSlide);
document.querySelector('.evowarsio-prev').addEventListener('click', moveToPrevSlide);

// Auto-slide setiap 3 detik
setInterval(moveToNextSlide, 5000);

document.addEventListener('DOMContentLoaded', function () {
    const verifyPurchaseBtn = document.querySelector('.evowarsio-verify-purchase');
    const verifyPaymentBtn = document.querySelector('.evowarsio-verify-payment');
    const modal = document.getElementById('evowarsio-modal');
    const closeModalBtn = document.querySelector('.evowarsio-close');
    const continueVerificationBtn = document.querySelector('.evowarsio-continue-verification');
    const originalPriceElement = document.getElementById('evowarsio-original-price');
    const discountPriceElement = document.getElementById('evowarsio-discount-price');

    // Harga asli dalam dolar
    const originalPrice = 25;
    const discount = 0.35;
    const discountedPrice = originalPrice - (originalPrice * discount);

    // Update harga
    originalPriceElement.textContent = `$${originalPrice}`;
    discountPriceElement.textContent = `$${discountedPrice.toFixed(2)}`;

    // Menampilkan modal saat tombol Verifikasi Pembelian ditekan
    verifyPurchaseBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Menutup modal
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Lanjutkan verifikasi (arahkan ke Sociabuzz)
    continueVerificationBtn.addEventListener('click', function () {
        window.location.href = "https://sociabuzz.com/viviendo_channel/tribe";
    });

    // Verifikasi Pembayaran (arahkan ke WhatsApp)
    verifyPaymentBtn.addEventListener('click', function () {
        window.open("https://wa.me/6285706800428", "_blank");
    });

    // Menutup modal saat klik di luar modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});