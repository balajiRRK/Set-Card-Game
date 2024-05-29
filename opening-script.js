document.getElementById('title-page').addEventListener('click', function() {
    showPage('player-selection');
});

function selectPlayers(numPlayers) {
    generateInstructions(numPlayers);
    showPage('instructions-page');
}

function goBack() {
    showPage('player-selection');
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}

function generateInstructions(numPlayers) {
    const playerInstructions = document.getElementById('player-instructions');
    playerInstructions.innerHTML = '';

    const playerKeys = ['A', 'L', 'H', 'K'];
    for (let i = 0; i < numPlayers; i++) {
        const p = document.createElement('p');
        p.style.fontWeight = 'bold';
        p.style.fontSize = '1.5em';
        p.textContent = `Player ${i + 1} uses the "${playerKeys[i]}" key to select cards.`;
        playerInstructions.appendChild(p);
    }
}
