// changed x from 256 to 16 so the divs could fit on screen. switch x back to 256 when done
for(x=0; x<64; x++) {
    const contentDivs = document.createElement('div');
    contentDivs.id = 'contentDivs';

    document.getElementById('mainContainer').appendChild(contentDivs);
}

document.querySelectorAll('#contentDivs').forEach(function(element) {
    element.addEventListener('mouseenter', () => {
        element.style.background = 'black';
    })
})