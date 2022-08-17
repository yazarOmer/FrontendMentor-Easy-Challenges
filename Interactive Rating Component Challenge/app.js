const buttons = document.querySelectorAll('.btn');
const submitButton = document.querySelector('.submit-button');
const selectedTect = document.querySelector('.selected-text');
const firstScene = document.querySelector('.first-scene');
const secondScene = document.querySelector('.second-scene');
let currentValue;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentValue = btn.getAttribute('value');
        resetButtons();
        btn.classList.add('selected');
    })
})

function resetButtons() {
    buttons.forEach(btn => {
        btn.classList.remove('selected');
    })
}

submitButton.addEventListener('click', () => {
    firstScene.classList.remove('scene-active');
    secondScene.classList.add('scene-active');
    console.log(currentValue);
    selectedTect.innerText = `You selected ${currentValue} out of 5`;
})
