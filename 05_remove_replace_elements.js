// REPLACE ELEMENT - parentElement.replaceChild(newChildElement, oldChildElement);

// create element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// add a new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');
// parent
const cardAction = document.querySelector('.card-action');

// REPLACE
cardAction.replaceChild(newHeading, oldHeading);

//--------------------------------------------------------
// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// REMOVE list item
lis[0].remove();

// REMOVE child element
list.removeChild(lis[2]);