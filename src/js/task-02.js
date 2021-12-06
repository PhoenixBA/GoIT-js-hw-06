const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

const listEl = document.createElement('li');
console.log(listEl);

const nameIngredients = document.querySelector('#ingredients');
const text = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
nameIngredients.textContent = text;
console.log(nameIngredients)