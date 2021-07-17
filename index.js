// Code your solutions in this file
// for (let age = 30; age < 40; age ++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = [`teddy bear`, `drone`, `doll`];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }

//     return gifts;
// }

// wrapGifts(gifts);

const gifter = [];
let eventName;
let messages = [];

function writeCards(gifter, eventName) {
    for (let i = 0; i < gifter.length; i ++) {
         messages.push(`Thank you, ${gifter[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
     return messages;
}

function countDown(positiveInteger) {
    while(positiveInteger >= 0) {
        console.log(positiveInteger);
        positiveInteger --;
    }
}
