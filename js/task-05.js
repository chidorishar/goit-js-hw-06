const domEls = {
  nameInput: document.querySelector('#name-input'),
  outputSpan: document.querySelector('#name-output'),
};
const DEFAULT_NAME = 'Anonymous';

function onInputChange() {
  const enteredName = domEls.nameInput.value;

  domEls.outputSpan.textContent = enteredName === '' ? DEFAULT_NAME : enteredName;
}

domEls.nameInput.addEventListener('input', onInputChange);
