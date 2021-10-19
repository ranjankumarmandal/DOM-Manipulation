// EVENT BUBBLING - Event bubbling is a method of event propagation in the HTML DOM
// ie, if we add event to child and related parents also, then when we will click on child element all the events of child and related parents events both will get executed because child lies inside parent only, this is called Event Bubbling.

document.querySelector('.card-title').addEventListener('click', function(e) {
    console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', function(e) {
    console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function(e) {
    console.log('card');
});

document.querySelector('.col').addEventListener('click', function(e) {
    console.log('col');
});

// EVENT DELEGATION - Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the 'e.target' property of the event object

document.body.addEventListener('click', function(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }
})
