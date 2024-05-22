// practice 1

let str = "hello"
let num = 8
let c = str + num
console.log(c);

// practice 2

console.log(typeof c);

// practice 3

const obj = {
    name : 'hello',
    section : 'A',
    isPrincipal : false
}
//  practice 4
// obj = 3      => error
console.log(obj);
obj['friend'] = "sharada"
obj['name'] = "lekhana"

console.log(obj);

// practice 5 ==> create a word meaning dictionary

const dictionary = {
    Zephyr : 'A gentle, mild breeze; often used to describe a light, refreshing wind from the west.',
    Ebullient : 'Overflowing with enthusiasm, excitement, or vivacity; high-spirited.',
    Obfuscate : 'To deliberately make something unclear or difficult to understand; to confuse or bewilder.',
    Quixotic : 'Extremely idealistic, unrealistic, and impractical, often in pursuit of noble but unattainable goals.',
    Serendipity : 'The occurrence of events by chance in a happy or beneficial way; a fortunate discovery made by accident.'
}
console.log(dictionary.Ebullient);