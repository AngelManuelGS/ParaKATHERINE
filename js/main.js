const intro = document.getElementById('intro');
const leftCurtain = document.querySelector('.curtain.left');
const rightCurtain = document.querySelector('.curtain.right');
const scenes = document.querySelectorAll('.scene');
const nextButtons = document.querySelectorAll('.next');
const music = document.getElementById('bgMusic');

let currentScene = 0;

function showScene(index) {
    scenes.forEach(scene => scene.classList.remove('active'));
    scenes[index].classList.add('active');
}
intro.addEventListener('click', () => {
    leftCurtain.classList.add('open-left');
    rightCurtain.classList.add('open-right');

    music.play();

    setTimeout(() => {
        intro.style.display = 'none';
        showScene(0); // Escena 1
    }, 1800);
});

nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentScene++;
        showScene(currentScene);

        if (currentScene === 1) {
            music.play();
        }

        if (currentScene === 2) {
            startCountdown();
        }
    });
});

function startCountdown() {
    const countdown = document.getElementById('countdown');
    let number = 3;

    const interval = setInterval(() => {
        number--;
        countdown.textContent = number;

        if (number === 0) {
            clearInterval(interval);
            currentScene++;
            showScene(currentScene);
        }
    }, 1000);
}
