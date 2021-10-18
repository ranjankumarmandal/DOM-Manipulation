/* 
Steps -
1. Create Element - document.createElement()
2. Append this to parent Element  - parentElement.appendChild(createdElement)
*/

// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello World'));

// create new link element
const link = document.createElement('a');
// add class
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link into li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
