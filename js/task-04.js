const domEls = {
  incrBtn: document.querySelector('[data-action="increment"]'),
  decrBtn: document.querySelector('[data-action="decrement"]'),
  spanWithValue: document.querySelector('#value'),
};

let counterValue = 0;
const COUNTER_STEP = 1;

function onCntrlBtnClick(event) {
  counterValue += event.currentTarget === domEls.incrBtn ? COUNTER_STEP : -COUNTER_STEP;
  domEls.spanWithValue.textContent = counterValue;
}

domEls.incrBtn.addEventListener('click', onCntrlBtnClick);
domEls.decrBtn.addEventListener('click', onCntrlBtnClick);
