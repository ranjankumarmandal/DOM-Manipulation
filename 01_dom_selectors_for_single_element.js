// document.getElementById()
/*
console.log(document.getElementById('task-title'));

// get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none'; // dis-appear something

// change content
taskTitle.textContent = 'Task Lists';
taskTitle.innerText = 'My Tasks'; // insert text
taskTitle.innerHTML = `<span style='color:red'>
                         Task Lists
                       </span>`;                    // insert html

*/


// document.querySelector() - this is newer and much powerfull, we can select an element by anything or by any cssSelector, than document.geElementById()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'green';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

document.querySelector('li:nth-child(4)').textContent = 'Hello World';