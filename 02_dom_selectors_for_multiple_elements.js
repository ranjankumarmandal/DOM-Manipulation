// NodeList and array are same in DOM Manipulation, we can use all array methods with NodeList items, that we get after using document.querySelectorAll()
// But HTML Collection is not same with array here. We can't use array methods directly. We need to change this from HTML Collection to array with Array.from()
// Hence try to use document.querySelectorAll() for multiple elements

// document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item'); // select all elements globally
console.log(items);
console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello World';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // select all elements but inside a particular elment
console.log(listItems);


// document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello World';

lis = Array.from(lis);   // convert html collections into array
lis.reverse();
lis.forEach((li, index, array) => {
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});
console.log(lis);

//-------------------------------------------------------------------------

// document.querySelectorAll() - this is powerfull. We can use array methods directly because we get elements here in NodeList, which are similar to array, hence we don't need to convert the HTML Collection into array after getting them, as we were not able to get in aboves
const myItems = document.querySelectorAll('ul.collection li.collection-item');
myItems.forEach((item, index, array) => {
    item.textContent = `${index}: Hello Updated`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach((li, index, array) => {
    li.style.background = '#ccc';
})

const liEven = document.querySelectorAll('li:nth-child(even)');
liEven.forEach((li, index, array) => {
    li.style.background = '#f4f4f4';
})



console.log(myItems);
