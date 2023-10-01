let container = document.getElementById("container");
let n = 4;
createGrid(n);

let randomColor = true;
let grayscale = false;
let monocolor = false;

let monocolorButton = document.querySelector('.monocolor');
let rainbowButton = document.querySelector('.rainbow');
let grayscaleButton = document.querySelector('.grayscale');

monocolorButton.addEventListener('click', () => {
    
    randomColor = false;
    grayscale = false;
    monocolor = true;
    clearColors();
})

rainbowButton.addEventListener('click', () => {
    
    randomColor = true;
    grayscale = false;
    monocolor = false;
    clearColors();
})

grayscaleButton.addEventListener('click', () => {
    
    randomColor = false;
    grayscale = true;
    monocolor = false;
    clearColors();
})


let rowcol = document.querySelector('.rowcol');
rowcol.addEventListener("click", function() {
    clearGrid();
    n = Number(prompt("How many rows per side?"));
    if (n < 1 || n > 100) {
        alert("ERROR - Enter an integer betweeen 1 to 100");
    }
    if (Number.isInteger(n)) {
        createGrid(n);
    }
    else {
        alert("ERROR - Enter an integer betweeen 1 to 100");      
    }
})

function createGrid(n) {
    
    let size = 600/n;
    for (let i = 0; i < n; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        rowContainer.style.height = size.toString() + "px";
        container.appendChild(rowContainer);


        for (let j = 0; j < n; j++) {
            let cell = document.createElement('div');
            cell.classList.add("cell");
            cell.style.width = size.toString() + "px";
            cell.style.height = size.toString() + "px";

            cell.addEventListener('mouseover', function() {
                changeColor(cell);
            });

            rowContainer.appendChild(cell);
        }
    }
}

let clearColor = document.querySelector('.clear-color');
clearColor.addEventListener('click', function() {
    clearColors();
})

function clearColors() {
    clearGrid();
    createGrid(n);
}

function clearGrid() {
    let rowContainer = document.querySelectorAll('.row-container');
    for (let i = 0; i < rowContainer.length; i++) {
        rowContainer[i].remove();
    }
}


function changeColor(cell) {
    if (randomColor) {
        cell.style.backgroundColor = randomColorGenerator();
    }
    else if (monocolor) {
        cell.style.backgroundColor = 'gray';
    }
    else if (grayscale) {
        if (cell.style.opacity === '') {
            cell.style.backgroundColor = 'black';
            cell.style.opacity = '0.1';
        }
        else {
            let currentOpacity = parseFloat(cell.style.opacity);
            if (currentOpacity < 1.0) {
                currentOpacity += 0.1;
                cell.style.opacity = currentOpacity.toString();
            }
        }
    }
}

function randomColorGenerator() {
    let colors = ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F', '#90BE6D', '#43AA8B', '#4D908E', '#577590', '#277DA1'];
    let random = Math.floor(Math.random() * 10);
    return colors[random];
}