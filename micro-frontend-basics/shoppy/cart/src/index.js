import faker from 'faker';

let cartString = `<div style="text-align: right; color: green;">You have ${faker.datatype.number(20)} items in your cart </div>`

document.querySelector('#cart-list').innerHTML = cartString;