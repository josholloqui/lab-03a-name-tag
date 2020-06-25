const myButton = document.getElementById('rad-button');

myButton.addEventListener('click', () => {
    const myInput = document.getElementById('rad-input');
    const userInput = myInput.value;
    const radDiv = document.getElementById('rad-name');
    radDiv.textContent = userInput;

});

const colorGoldenrod = document.getElementById('goldenrod');

colorGoldenrod.addEventListener('click', () => {
    const radFloor = document.getElementById('colorback1');
    radFloor.style.background = 'goldenrod';
    const radHead = document.getElementById('colorback2');
    radHead.style.background = 'goldenrod';
    const borderHead = document.getElementById('colorback2');
    borderHead.style.border = 'thick solid #B0E0E6';
    const borderFoot = document.getElementById('colorBack1');
    borderFoot.style.border = 'thick solid #B0E0E6';
});

const colorSalmon = document.getElementById('salmon');

colorSalmon.addEventListener('click', () => {
    const radFloor = document.getElementById('colorback1');
    radFloor.style.background = 'salmon';
    const radHead = document.getElementById('colorback2');
    radHead.style.background = 'salmon';
    const borderHead = document.getElementById('colorback2');
    borderHead.style.border = 'thick solid #D3D3D3';
    const borderFoot = document.getElementById('colorBack1');
    borderFoot.style.border = 'thick solid #D3D3D3';
});

const colorSpringgreen = document.getElementById('springgreen');

colorSpringgreen.addEventListener('click', () => {
    const radFloor = document.getElementById('colorback1');
    radFloor.style.background = 'springgreen';
    const radHead = document.getElementById('colorback2');
    radHead.style.background = 'springgreen';
    const borderHead = document.getElementById('colorback2');
    borderHead.style.border = 'thick solid #F0E68C';
    const borderFoot = document.getElementById('colorBack1');
    borderFoot.style.border = 'thick solid #F0E68C';
});