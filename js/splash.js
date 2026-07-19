// Splash Screen countdown + skip control

let secondsLeft = 4;
const countdownEl = document.getElementById('countdown');

const countdownTimer = setInterval(function () {
    secondsLeft -= 1;
    if (secondsLeft <= 0) {
        countdownEl.textContent = '0';
        clearInterval(countdownTimer);
        return;
    }
    countdownEl.textContent = secondsLeft;
}, 1000);

// Skip Intro:
document.getElementById('skipBtn').addEventListener('click', function () {
    clearInterval(countdownTimer);
    const metaRefresh = document.querySelector('meta[http-equiv="refresh"]');
    if (metaRefresh) {
        metaRefresh.remove();
    }
    // The href on this link already sends the user to home.html
});
