import faker from 'faker';

let productString = '';

for (let i = 0; i < 5; i++) {
    productString += `<div style=" margin: 5px; background-color: skyblue; display: inline-block; padding: 10px;">${faker.commerce.productName()}</div>`
}

document.querySelector('#product-list').innerHTML = productString;