function changeColor(e) {
    e.target.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeOpacity(e) {
    let currentOpacity = parseFloat(e.target.style.opacity) || 0;
    if (currentOpacity < 1) {
        e.target.style.opacity = currentOpacity + 0.1;
    }
}

function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i<size*size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.opacity = "0";
        newDiv.addEventListener('mouseenter', changeColor);
        newDiv.addEventListener('mouseenter', changeOpacity);
        container.appendChild(newDiv);
    }

}

const changeGrid = document.querySelectorAll('.btn');
changeGrid.forEach(button => {
    button.addEventListener('click', () => {
        const size = prompt('Enter number between 1-100?');
        if (size > 1 && size < 100) {
            createGrid(size);
        } else {
            alert("wrong number, try again");
        }
    })
});

const cleanGrid  = document.querySelector('.cleanbtn');
cleanGrid.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
        square.style.opacity = '0';
    });
});