const domEls = {
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  amountInput: document.querySelector('#controls>input'),
  boxesDiv: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let divCollectionMarkup = '';

  for (let i = 0; i < amount; i++) {
    const divWidthHeight = 30 + i * 10;
    const randomHexColor = getRandomHexColor();

    divCollectionMarkup += `<div style = 
      'background-color: ${randomHexColor}; 
      width: ${divWidthHeight}px;
      height: ${divWidthHeight}px;'>
    </div>`;
  }

  domEls.boxesDiv.insertAdjacentHTML('beforeend', divCollectionMarkup);
}

function destroyBoxes() {
  domEls.boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onControlButtonsClick(event) {
  event.currentTarget === domEls.createBtn
    ? createBoxes(Number(domEls.amountInput.value))
    : destroyBoxes();
}

domEls.createBtn.addEventListener('click', onControlButtonsClick);
domEls.destroyBtn.addEventListener('click', onControlButtonsClick);
