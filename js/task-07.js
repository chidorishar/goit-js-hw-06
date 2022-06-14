const domEls = {
  rangeInput: document.querySelector('#font-size-control'),
  spanToChange: document.querySelector('#text'),
};

domEls.rangeInput.addEventListener('input', () => {
  domEls.spanToChange.style.fontSize = domEls.rangeInput.value + 'px';
});
