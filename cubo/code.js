let isDragging = false;
let lastX = 0;
let lastY = 0;
let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;

const cubo = document.getElementById('cubo');
let animate = false;
function rodarCubo() {
    cubo.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
}

const site = document.getElementById('site');

site.addEventListener('keydown', (e) => {
    const tecla = e.key;
    if (tecla  === 'ArrowUp') {
        rotationX -= 10   
    }
    if (tecla === 'ArrowDown') {
        rotationX += 10
    }
    if (tecla === 'ArrowRight') {
        rotationY -= 10
    }
    if (tecla === 'ArrowLeft') {
        rotationY += 10
    }
    if(e.shiftKey && tecla === 'ArrowRight') {
        rotationZ += 10
    }
    if(e.shiftKey && tecla === 'ArrowLeft') {
        rotationZ -= 10
    }
    if (tecla === " ") {
        if (!animate) {
            animate = true
            cubo.classList.add('animar'); 
        } else {
            animate = false
            cubo.classList.remove('animar');
        }
    }
    rodarCubo()
})