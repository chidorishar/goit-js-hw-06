const domEls = new (function () {
  this.categoriesList = document.querySelector('#categories');
  this.categoryItems = this.categoriesList.children;
})();

console.log(`Number of categories: ${domEls.categoryItems.length}`);
[...domEls.categoryItems].forEach(el => {
  const categoryItemSubList = el.querySelector('ul');

  console.log(`\nCategory: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${categoryItemSubList.children.length}`);
});
