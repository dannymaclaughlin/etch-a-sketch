// variable declarations
const densityButton = document.querySelector('#densityButton');
const clearBoard = document.querySelector('#clearBoard');

// changed x from 256 to 16 so the divs could fit on screen. switch x back to 256 when done
for(x=0; x<256; x++) {
    const contentDivs = document.createElement('div');
    contentDivs.className = 'contentDivs';

    document.getElementById('grid').appendChild(contentDivs);
}

document.querySelectorAll('.contentDivs').forEach(function(element) {
    element.addEventListener('mouseover', () => {
        element.style.background = 'black';
    })
})

// event listeners
densityButton.addEventListener('click', () => {
    prompt('Enter number of squares per side (max: 100)');
});

clearBoard.addEventListener('click', () => {

});