const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const planButtons = document.querySelectorAll('.plan');

/* Botón NO travieso */
function moveButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener('touchstart', moveButton);
noBtn.addEventListener('mouseover', moveButton);

/* Al decir que SÍ */
yesBtn.addEventListener('click', () => {
    changeScene('scene-plan');
});

/* Selección de plan */
planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        changeScene('scene-final');
    });
});

/* Función reutilizable */
function changeScene(id) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}
