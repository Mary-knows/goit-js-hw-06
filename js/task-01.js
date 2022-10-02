const categoriesEL = document.querySelector('#categories');
const categoriesItemsEL = categoriesEL.querySelectorAll('.item');

console.log('Number of categories:', categoriesItemsEL.length);


for (const ItemEL of categoriesItemsEL) {
    const nameCategoryEL = ItemEL.childNodes[1].textContent;
    const elementsCategoryEL = ItemEL.childNodes[3].children.length;
    console.log('Category:', nameCategoryEL)
    console.log('Elements:',elementsCategoryEL)
}

