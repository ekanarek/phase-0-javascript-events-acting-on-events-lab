function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 2}px`;
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 2}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 320) {
        dodger.style.left = `${left + 2}px`;
    }
}

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 320) {
        dodger.style.bottom = `${bottom + 2}px`;
    } 
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    } else if (e.key === "ArrowDown") {
        moveDodgerDown();
    } else if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
})