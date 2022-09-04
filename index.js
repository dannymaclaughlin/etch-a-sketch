// changed x from 256 to 16 so the divs could fit on screen. switch x back to 256 when done
for(x=0; x<256; x++) {
    const contentDivs = document.createElement('div');
    contentDivs.className = 'contentDivs';

    document.getElementById('contentDivContainer').appendChild(contentDivs);
}

document.querySelectorAll('.contentDivs').forEach(function(element) {
    element.addEventListener('mouseover', () => {
        element.style.background = 'black';
    })
})