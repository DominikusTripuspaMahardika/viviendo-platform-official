// Inisialisasi Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'id',
    includedLanguages: 'id,en,fr,de,es,ja,zh-CN,zh-TW,ko,th,ar,ru,pt,pt-BR,it,nl,pl,tr,vi,sv,fi,da,no,el,cs,ro,hu,he,hi,bn,ur,fa,ms,uk,sr,sk,hr,bg,lt,lv,et,sl,is,fil,sw,af,am,zu,xh,km,lo,az,sq,ka,mn,ps,kk,uz,tg,ne,si,ta,te,ml,mr,kn,gu,pa,my,su,jw,ceb,haw,sm,gd,cy,ga,yo,ig,ha,rw,so,ny,ht,la,lb,mk,mt,gl,bs,ug,tt,dv,dz,fo,fj,gn,ku,mg,tk,yi,ti,bo,br',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Event klik saat pilih bahasa
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const lang = el.getAttribute('data-lang');
      const currentLang = 'id'; // bahasa default halaman kamu

      // Simpan ke localStorage
      localStorage.setItem("viviendoLang", lang);

      // Gunakan hash URL untuk Google Translate
      const newHash = `#googtrans(${currentLang}|${lang})`;
      if (location.hash !== newHash) {
        location.hash = newHash;
      }
      location.reload(); // reload supaya Google Translate membaca hash
    });
  });

  // Jika ada bahasa tersimpan, pakai hash untuk aktifkan translate
  const savedLang = localStorage.getItem("viviendoLang");
  if (savedLang && savedLang !== 'id') {
    const newHash = `#googtrans(id|${savedLang})`;
    if (location.hash !== newHash) {
      location.hash = newHash;
    }
  }
});
