import { showNextSlide, showPreviousSlide } from './libs/funcs.js';

function toggleStyle() {
    if (toggleButton.checked) {
        slideContainer.classList.remove('invisible')
        gridContainer.classList.add('invisible')
    } else {
        slideContainer.classList.add('invisible')
        gridContainer.classList.remove('invisible')
        const img = document.querySelectorAll(".grid-items img")
        img.forEach(image => {
            image.style.opacity = 0;
        })

    }
}

var slideSelected = 0;
const toggleButton = document.getElementById("toggle-mode-view-button")
const gridContainer = document.getElementById("grid-container-imgs")
const slideContainer = document.getElementById("container-slide-main")

toggleButton.addEventListener("change", toggleStyle)
toggleStyle() 

const checkboxes = document.querySelectorAll('input[name="image-selection"]');

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        slideSelected = index;
        checkboxes.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
        
    });
});

const buttonRight = document.getElementById("right")
const buttonLeft = document.getElementById("left")

buttonRight.addEventListener("click", () => slideSelected = showNextSlide(checkboxes, slideSelected))
buttonLeft.addEventListener("click", () => slideSelected = showPreviousSlide(checkboxes, slideSelected))

const img = document.querySelectorAll(".grid-items img")
img.forEach(image => {
    image.style.opacity = 0;
})
const gridDiv = document.querySelectorAll(".grid-items")[0]
gridDiv.addEventListener("animationend", () => {
    const img = document.querySelectorAll(".grid-items img")
    img.forEach(image => {
        image.style.opacity = 0.8;
    })
})

