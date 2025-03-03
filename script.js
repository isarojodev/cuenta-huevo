// Seleccionar elementos
const timerDisplay = document.getElementById('timer');
const btn5min = document.getElementById('btn-5min');
const btn8min = document.getElementById('btn-8min');
const btn10min = document.getElementById('btn-10min');

let countdown;

// Función para iniciar el temporizador
function startTimer(minutes) {
    const now = Date.now();
    const then = now + minutes * 60 * 1000;

    clearInterval(countdown);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            timerDisplay.textContent = '¡Listo!';
            return;
        }

        const minutesLeft = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        timerDisplay.textContent = `${minutesLeft}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

// Eventos para los botones
btn5min.addEventListener('click', () => startTimer(5));
btn8min.addEventListener('click', () => startTimer(8));
btn10min.addEventListener('click', () => startTimer(10));