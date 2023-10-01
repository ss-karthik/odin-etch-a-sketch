let container = document.getElementById("container");
let n = 4;
createGrid(n);


let rowcol = document.querySelector('.rowcol');
rowcol.addEventListener("click", function() {
    clearGrid();
    n = prompt("How many rows per side?");
    if (n < 1 || n > 100) {
        alert("ERROR - Enter an integer betweeen 1 to 100");
    }
    createGrid(n);
    
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
            rowContainer.appendChild(cell);
        }
    }
}

function clearGrid() {
    let rowContainer = document.querySelectorAll('.row-container');
    for (let i = 0; i < rowContainer.length; i++) {
        rowContainer[i].remove();
    }
}