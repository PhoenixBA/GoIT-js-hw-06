/**Напиши скрипт, который для каждого элемента 
 * массива ingredients:

Создаст отдельный элемент <li>. 
Обзательно используй метод 
document.createElement().
Добавит название ингредиента как его 
текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну 
операцию в список ul.ingredients.
 */



const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];


const elementUl = document.querySelector('ul');
const markup = ingredients.map(elem => {
  const elementLi = document.createElement('li');
  elementLi.textContent = elem;
  elementLi.classList.add('item');
  return elementLi;
});
elementUl.append(...markup);

