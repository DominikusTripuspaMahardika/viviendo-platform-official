let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('pwaDontShowAgain') && !localStorage.getItem('pwaInstalled')) {
        showInstallBanner();
    }
});

function showInstallBanner() {
    const banner = document.getElementById('installBanner');
    if (banner) banner.classList.add('show');
}

function hideInstallBanner() {
    const banner = document.getElementById('installBanner');
    if (banner) banner.classList.remove('show');
}

function triggerPWAInstall() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('PWA Installed');
                localStorage.setItem('pwaInstalled', 'true');
                hideInstallBanner();
            } else {
                console.log('PWA Installation Dismissed');
            }
            deferredPrompt = null;
        });
    }
}

function dontShowAgain() {
    localStorage.setItem('pwaDontShowAgain', 'true');
    hideInstallBanner();
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('pwaInstalled') || localStorage.getItem('pwaDontShowAgain')) {
        hideInstallBanner();
    }
});