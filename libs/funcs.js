function showNextSlide(checkboxes, slideSelected) {
    if (slideSelected < checkboxes.length - 1) {
        slideSelected++;
    } else {
        slideSelected = 0
    }
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })
    checkboxes[slideSelected].checked = true;
    return slideSelected
}
function showPreviousSlide(checkboxes, slideSelected) {
    if (slideSelected <= 0) {
        slideSelected = checkboxes.length - 1;
    } else {
        slideSelected--;
    }
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    })
    checkboxes[slideSelected].checked = true;
    return slideSelected
}

export { showNextSlide, showPreviousSlide }