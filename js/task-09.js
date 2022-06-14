const domEls = {
  cntrlBtn: document.querySelector('.change-color'),
  feedbackSpan: document.querySelector('.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onControlButtonClick() {
  const randomHexColor = getRandomHexColor();

  document.body.style.backgroundColor = randomHexColor;
  domEls.feedbackSpan.textContent = randomHexColor;
}

domEls.cntrlBtn.addEventListener('click', onControlButtonClick);
