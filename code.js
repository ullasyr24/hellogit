console.log("hello");

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

// 1. Add Edit button to existing 'li' elements
const listItems = document.querySelectorAll('.fruits li');
for (let i = 0; i < listItems.length; i++) {
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.appendChild(document.createTextNode('Edit'));
  listItems[i].appendChild(editBtn);
}

// 2. Add Fruit Functionality
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fruitToAdd = document.getElementById('fruit-to-add');

  // Create new li element
  const newLi = document.createElement('li');
  newLi.className = 'fruit';
  newLi.appendChild(document.createTextNode(fruitToAdd.value));

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.appendChild(document.createTextNode('x'));
  newLi.appendChild(deleteBtn);

  // Create edit button
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.appendChild(document.createTextNode('Edit'));
  newLi.appendChild(editBtn);

  // Append new li to the fruits list
  fruits.appendChild(newLi);

  // Clear input field
  fruitToAdd.value = '';
});

// 3. Delete Fruit Functionality
fruits.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const liToDelete = event.target.parentElement;
    fruits.removeChild(liToDelete);
  }
});
