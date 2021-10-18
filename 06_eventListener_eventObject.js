// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//     console.log('Hello World');
//     e.preventDefault();
// });



document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e) {
    // console.log('Clicked');
    // e.preventDefault;

    let val;

    val = e;

    // Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList; // all classnames as a collection
    
    // event type
    val = e.type;

    // time stamp
    val = e.timeStamp;

    // co-ordinates of the event relative to window
    val = e.clientY;
    val = e.clientX;

    // co-ordinates of the even relative to element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}