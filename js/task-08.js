const formEl = document.querySelector('.login-form');

function onFormSubmit(event) {
  const formData = new FormData(event.currentTarget);

  event.preventDefault();

  if ([...formData.values()].some(value => value === '')) {
    alert('All fields must be filled!');
    return;
  }

  formEl.reset();
  console.log(Object.fromEntries(formData));
}

formEl.addEventListener('submit', onFormSubmit);
