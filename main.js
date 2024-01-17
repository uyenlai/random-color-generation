const containerEl = document.querySelector('.container');

for (var i = 0; i < 30; i++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container');
colorContainerEls.forEach(function(colorContainerEl) {
    const colorCode = colorGenerator();
    colorContainerEl.style.backgroundColor = '#' + colorCode;
    colorContainerEl.innerText = '#'+colorCode;
})

function colorGenerator() {
    let result = '';
    const chars = '0123456789abcdef';
    for (let index = 0; index < 6; index++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));        
    }
    return result.toUpperCase();
}
