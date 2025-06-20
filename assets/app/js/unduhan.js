document.addEventListener("DOMContentLoaded", () => {
    const countdownDuration = 5;

    const downloadButtons = {
        pvz2itr: {
            buttonId: "downloadBtnPvZ2ITR",
            downloadUrl: "unlock-internasional/index.html"
        },
        pvz2rfl: {
            buttonId: "downloadBtnPvZ2RFL",
            downloadUrl: "unlock-reflourished/index.html"
        }
    };

    function startCountdown(type) {
        const { buttonId, downloadUrl } = downloadButtons[type];
        const button = document.getElementById(buttonId);
        let countdown = countdownDuration;

        button.disabled = true;
        button.textContent = `Mohon Tunggu... ${countdown}`;

        const interval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                button.textContent = `Mohon Tunggu... ${countdown}`;
            } else {
                clearInterval(interval);
                button.textContent = "Mengunduh...";
                window.location.href = downloadUrl;
                setTimeout(() => {
                    button.textContent = "Mulai Mengunduh";
                    button.disabled = false;
                }, 2000);
            }
        }, 1000);
    }

    // Attach event listeners
    document.getElementById(downloadButtons.pvz2itr.buttonId).addEventListener("click", () => startCountdown("pvz2itr"));
    document.getElementById(downloadButtons.pvz2rfl.buttonId).addEventListener("click", () => startCountdown("pvz2rfl"));
});

function startPlayGame() {
    const container = document.getElementById('gameContainer');
    container.innerHTML = `
        <iframe src="/towerbuilding/index.html" 
                width="100%" 
                height="600px" 
                style="border:none; border-radius:10px;">
        </iframe>
    `;
}