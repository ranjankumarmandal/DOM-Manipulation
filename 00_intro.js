// document object is inside window object, and is used for DOM Manipulation in JavaScript
// window is global object in client side javascript, we can write this keyword or not, but this will still work

let val;

val = window.document;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// not recommended - we can select any html element without using selectors, but its not that much effective to use. It is for demo purpose only.
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);  // convert this to array
scriptsArr.forEach((script, index, array) => {
    console.log(script.getAttribute('src'));
});


console.log(val);