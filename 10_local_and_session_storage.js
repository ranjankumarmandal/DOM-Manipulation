// sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire after closing browser it can be removed from setting options only, data in sessionStorage is cleared when the page session ends or browser is closed.
// Steps to check output: In chrome dev tool -> application -> storage (there, local storage option & for sesstion storage option is there)

// set items in local storage - data in localStorage doesn't expire after closing browser it can be removed from setting options only.
localStorage.setItem('name', 'ranjan');
localStorage.setItem('age', '23');

// set items in session storage - data in sessionStorage is cleared when the page session ends or browser is closed.
sessionStorage.setItem('name', 'brad');

// remove items from local storage
// localStorage.removeItem('name');

// get items from local storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);

// clear local storage
// localStorage.clear();

// ----------------------------- mini activity on localStorage -------------------------------

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // push the inputed value in our tasks array
    tasks.push(task);

    // set item to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // alert to user that data has been saved to their local storage in array form for same key 'tasks'
    alert('Task Saved');
});

// print those all tasks in console
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach((task, index, array) => {
    console.log(task);
});

