let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

//---------------- get child nodes - output will be child elements + texts nodes ---------------------
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// output of above 3 will be in numerical, which means the below -
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype 

// get children element nodes only - output will be only child elements
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello World';
// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild; // use this to get 1st node, which is text offcourse not an element
val = list.firstElementChild; // use this to get first actual element inside list

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount; // actual element count not the all nodes :)

// -------------------- get parent nodes --------------------------------------------------
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// -------------------- get next sibling -------------------------
val = listItem.nextSibling;
val = listItem.nextElementSibling; // use this to get actual next element sibling, above will get any random next sibling node may be text node also. So use this. 
val = listItem.nextElementSibling.nextElementSibling; // use this for next next actual element sibling

// -------------------- get previous sibling -------------------------
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);