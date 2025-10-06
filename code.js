var slideSelected = 0;
const toggleButton = document.getElementById("toggle-mode-view-button")
const gridContainer = document.getElementById("grid-container-imgs")
const slideContainer = document.getElementById("container-slide-main")
function toggleStyle() {
    if (toggleButton.checked) {
        slideContainer.classList.remove('invisible')
        gridContainer.classList.add('invisible')
    } else {
        slideContainer.classList.add('invisible')
        gridContainer.classList.remove('invisible')
        
    }0
}

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

buttonRight.addEventListener("click", showNextSlide)

function showNextSlide() {
    if (slideSelected < checkboxes.length - 1) {
        slideSelected++;
    } else {
        slideSelected = 0
    }
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })
    checkboxes[slideSelected].checked = true;
}
buttonLeft.addEventListener("click", showPreviousSlide)

function showPreviousSlide() {
    if (slideSelected <= 0 ) {
        slideSelected = checkboxes.length - 1;
    } else {
        slideSelected--;
    }
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })
    checkboxes[slideSelected].checked = true;
}