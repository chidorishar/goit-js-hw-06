const inputEl = document.querySelector('#validation-input');

function onInputFocusLost() {
  const properSymbCount = Number(inputEl.dataset.length);
  const currSymbCount = inputEl.value.length;

  inputEl.classList.value = '';
  if (!currSymbCount) {
    return;
  }
  inputEl.classList.add(currSymbCount != properSymbCount ? 'invalid' : 'valid');
}

inputEl.addEventListener('blur', onInputFocusLost);
