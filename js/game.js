let gameModal = null;
let score = 0;
let gameActive = false;

function createGameModal() {
  const modalDiv = document.createElement('div');
  modalDiv.className = 'game-modal';
  modalDiv.style.display = 'none';
  modalDiv.innerHTML = `
    <div class="game-modal-content">
        <h3>Cricket Dash <img src="assets/icons/cricket-ball.png" alt="ball" style="width: 28px; vertical-align: middle;"></h3>
      <p>Score: <span id="gameScore">0</span></p>
      <div>
        <button id="hitBtn" class="game-btn">🏏 Hit!</button>
        <button id="closeGameBtn" class="game-btn">Close</button>
      </div>
      <p id="gameMsg">Click Hit to score runs (1-6). If you get 0, you're out!</p>
    </div>
  `;
  document.body.appendChild(modalDiv);
  return modalDiv;
}

function startGame() {
  if (!gameModal) gameModal = createGameModal();
  gameModal.style.display = 'flex';
  score = 0;
  gameActive = true;
  const scoreSpan = document.getElementById('gameScore');
  const msgP = document.getElementById('gameMsg');
  if (scoreSpan) scoreSpan.innerText = score;
  if (msgP) msgP.innerText = 'Swing away! Runs: 1-6, but 0 means OUT!';
  const hitBtn = document.getElementById('hitBtn');
  const closeBtn = document.getElementById('closeGameBtn');
  if (!hitBtn || !closeBtn) return;

  const newHit = () => {
    if (!gameActive) return;
    const runs = Math.floor(Math.random() * 7);
    if (runs === 0) {
      gameActive = false;
      if (msgP) msgP.innerHTML = `😵 OUT! Final Score: ${score}. Game Over!`;
      hitBtn.disabled = true;
    } else {
      score += runs;
      if (scoreSpan) scoreSpan.innerText = score;
      if (msgP) msgP.innerHTML = `+${runs} runs! Score: ${score}`;
    }
  };
  hitBtn.onclick = newHit;
  closeBtn.onclick = () => {
    gameModal.style.display = 'none';
    hitBtn.disabled = false;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const floatBtn = document.getElementById('gameFloatingBtn');
  if (floatBtn) floatBtn.addEventListener('click', startGame);
});