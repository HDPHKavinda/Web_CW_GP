// SDG Action Impact Simulator

const cards = document.querySelectorAll('.action-card');
const selectedCountEl = document.getElementById('selectedCount');
const impactScoreEl = document.getElementById('impactScore');
const impactLevelEl = document.getElementById('impactLevel');
const impactMessageEl = document.getElementById('impactMessage');
const aisBg = document.getElementById('aisBg');
const resetBtn = document.getElementById('resetBtn');

// Impact level thresholds
const LOW_MAX = 6;      // 1–6 points   = Low impact
const MEDIUM_MAX = 14;  // 7–14 points  = Medium impact
// 15+ points = High impact

function toggleCard(card) {
    const isSelected = card.classList.toggle('selected');
    const title = card.querySelector('h3').textContent;
    // aria-pressed isn't valid here, so aria-label carries the state instead
    card.setAttribute('aria-label', title + (isSelected ? ', selected' : ', not selected'));
    updateSummary();
}

cards.forEach(function (card) {
    card.addEventListener('click', function () {
        toggleCard(card);
    });
    card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCard(card);
        }
    });
});

function updateSummary() {
    const selectedCards = document.querySelectorAll('.action-card.selected');
    let totalScore = 0;
    selectedCards.forEach(function (card) {
        totalScore += Number(card.dataset.points);
    });

    selectedCountEl.textContent = selectedCards.length;
    impactScoreEl.textContent = totalScore;

    let level;
    let message;
    let bgClass;

    if (totalScore === 0) {
        level = '—';
        message = 'Select an action above to get started.';
        bgClass = '';
    } else if (totalScore <= LOW_MAX) {
        level = 'Low impact';
        message = "A solid start. One or two consistent habits already make a difference.";
        bgClass = 'level-low';
    } else if (totalScore <= MEDIUM_MAX) {
        level = 'Medium impact';
        message = "This is a genuinely meaningful set of actions — you're already ahead of most people.";
        bgClass = 'level-medium';
    } else {
        level = 'High impact';
        message = "This is exactly the kind of commitment BrightPath is built around. Consider sharing this with a friend.";
        bgClass = 'level-high';
    }

    impactLevelEl.textContent = level;
    impactMessageEl.textContent = message;

    // Background swap is JS-controlled; the level classes live in the embedded CSS
    aisBg.classList.remove('level-medium', 'level-high');
    if (bgClass === 'level-medium' || bgClass === 'level-high') {
        aisBg.classList.add(bgClass);
    }
}

resetBtn.addEventListener('click', function () {
    cards.forEach(function (card) {
        card.classList.remove('selected');
        const title = card.querySelector('h3').textContent;
        card.setAttribute('aria-label', title + ', not selected');
    });
    updateSummary();
});
