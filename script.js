let playerHealth = 100;
let enemyHealth = 100;
const playerAttack = 10;
const enemyAttack = 5;

const attackButton = document.getElementById('attack-button');
const playerHealthDisplay = document.getElementById('player-health');
const enemyHealthDisplay = document.getElementById('enemy-health');
const messageDisplay = document.getElementById('message');

attackButton.addEventListener('click', () => {
    // O jogador ataca o inimigo
    enemyHealth -= playerAttack;
    enemyHealthDisplay.textContent = `Saúde: ${enemyHealth}`;

    // Verifica se o inimigo foi derrotado
    if (enemyHealth <= 0) {
        messageDisplay.textContent = "Você venceu o inimigo!";
        attackButton.disabled = true; // Desabilita o botão
        return;
    }

    // O inimigo ataca o jogador
    playerHealth -= enemyAttack;
    playerHealthDisplay.textContent = `Saúde: ${playerHealth}`;

    // Verifica se o jogador foi derrotado
    if (playerHealth <= 0) {
        messageDisplay.textContent = "Você foi derrotado...";
        attackButton.disabled = true; // Desabilita o botão
    }
});
