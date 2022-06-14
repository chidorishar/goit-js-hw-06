const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const parentNode = document.querySelector('#ingredients');
const nodesToAppend = ingredients.map(value => {
  const nodeToAppend = document.createElement('li');

  nodeToAppend.textContent = value;
  return nodeToAppend;
});

parentNode.append(...nodesToAppend);
