//Object Destructuring

// const person = {
//     name: 'Sung',
//     age: 34,
//     location: {
//         city: 'Los Angeles',
//         temp: 80
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log (`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguine'
//     }
// };

// const { name: publisherName = 'Self-Publish' } = book.publisher;
// if (publisherName) {
//     console.log(publisherName);    
// }


//Array Destructuring

const address = ['Address 1', 'City', 'State', 'Zip'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, small, medium, large]= item;
console.log(`A medium ${type} costs ${medium}`);