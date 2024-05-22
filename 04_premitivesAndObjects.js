/*
there are 7 typrs of premitive datatypes in javascript
N => number
N => null
S =>String
S => symbol
B => boolean
B => bigint
U => undefined

non premitive datatype => object
*/

let a = null
let b = 345
let c = 'lekhana'
let d = true
let e = BigInt(345) + 65n
let f = undefined
let g = Symbol('i am a symbol')

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

// objects in javascript are not premitive type
// they appear as key value pairs

const item = {
    "lekhana" : 34,
    "raj" : 'hello',
    "rohan" : false,
    "harry" : undefined
}

console.log(item["lekhana"]);
console.log(item["raj"]);
console.log(item["rohan"]);
console.log(item["harry"]);