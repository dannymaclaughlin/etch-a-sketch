// variable declarations
const densityButton = document.querySelector('#densityButton');
const clearBoard = document.querySelector('#clearBoard');
let boardDensity;

// creates initial grid upon page load
function initGrid() {
    for(x=0; x<256; x++) {
        const contentDivs = document.createElement('div');
        contentDivs.className = 'contentDivs';
        document.getElementById('grid').appendChild(contentDivs);
        
        colorPixel();
    }  
}

// generates new grid based off of value given in prompt
function generateNewGrid() {
    let boardDensity = prompt('Enter number of squares per side (max: 25)');
    removeGrid(grid);
    grid.setAttribute('style', `grid-template-columns:repeat(${boardDensity}, 2fr); grid-template-rows:repeat(${boardDensity}, 2fr)`);

    for(i = 0; i < boardDensity*boardDensity; i++) {
        const horizontalDivs = document.createElement('div');
        horizontalDivs.className = 'horizontalDivs';
        document.getElementById('grid').appendChild(horizontalDivs);
        colorPixel();
    }
}

// function to remove grid
function removeGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// turns contentDiv's black upon mouseover
function colorPixel() {
    document.querySelectorAll('.contentDivs').forEach(function(element) {
        element.addEventListener('mouseover', () => {
        element.style.background = 'black';
        })
    })
    document.querySelectorAll('.horizontalDivs').forEach(function(element) {
        element.addEventListener('mouseover', () => {
        element.style.background = 'black';
        })
    })
}

// event listeners
densityButton.addEventListener('click', () => {
    generateNewGrid();
});

clearBoard.addEventListener('click', () => {

});

initGrid();