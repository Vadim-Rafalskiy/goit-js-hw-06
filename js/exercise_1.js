const categoriesListRef = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesListRef.childElementCount}`);

const categoryItemsRef = document.querySelectorAll('.item');

const categoriItemElements = [...categoryItemsRef].map(element => {
  return {
    title: element.firstElementChild.textContent,
    elementCount: element.lastElementChild.childElementCount,
  };
});

const categoriesInfo = function ({ title, elementCount }) {
  console.log(' ');
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementCount}`);
};

categoriItemElements.map(arg => categoriesInfo(arg));
