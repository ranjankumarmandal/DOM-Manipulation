const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// clear input
taskInput.value = '';

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // get input value
    // console.log(e.target.value);
}

// form.addEventListener('submit', runEvent);

// KEY EVENTS - keydown, keyup, keypress
// keydown
// taskInput.addEventListener('keydown', runEvent);
// keyup
// taskInput.addEventListener('keyup', runEvent);
//keypress
// taskInput.addEventListener('keypress', runEvent);

// INPUT EVENTS - focus, blur, cut, paste
// focus
// taskInput.addEventListener('focus', runEvent);
// blur
// taskInput.addEventListener('blur', runEvent);
// cut
// taskInput.addEventListener('cut', runEvent);
// paste
// taskInput.addEventListener('paste', runEvent);
// input
// taskInput.addEventListener('input', runEvent);
// change - this is used to html element 'select'
// select.addEventListener('change', runEvent);