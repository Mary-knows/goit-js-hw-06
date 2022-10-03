const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulRef = document.querySelector('#ingredients')

const liRef = ingredients.map(ingredient => {
  const ingredientsRef = document.createElement('li')
  ingredientsRef.classList.add('item');
  ingredientsRef.textContent = ingredient;

  return ingredientsRef
})

ulRef.append(...liRef)