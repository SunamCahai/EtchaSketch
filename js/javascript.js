function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}
function createGrid() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    for (let i = 0; i<16; i++) {
        for (let j = 0; j<16; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("square");
            newDiv.addEventListener('mouseenter', changeColor);
            container.appendChild(newDiv);
        }
    }
}
createGrid();
document.addEventListener("DOMContentLoaded", createGrid);
