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
        showScene(0);
    }, 1800);
});

nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentScene++;
        showScene(currentScene);

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

/* ============================
   GOOGLE FORMS (registro)
============================ */

function enviarEleccion(plan) {
    const formURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSewgZwfWt_1gbfmjun3kwI9sUhDxO-gc4KPRFoQDUvCYQI52g/formResponse";

    const data = new FormData();
    data.append("entry.1207696700", plan);

    fetch(formURL, {
        method: "POST",
        body: data,
        mode: "no-cors"
    });
}

/* ============================
   ELECCIÓN DEL PLAN
============================ */

function elegirPlan(plan) {
    enviarEleccion(plan);

    // Avanza a la escena final (ajusta el índice si es necesario)
    currentScene++;
    showScene(currentScene);
}
