// problem 1
let marks = {
    lekhana : 89,
    manoj: 90,
    sharada: 99,
    diksha: 78,
    priya: 95
}

// Object.keys() is a javaScript function that returns array of given object keys
// Object.keys(marks).length => length of the array of objects
for(let i = 0;i<Object.keys(marks).length;i++){
    // marks[Object.keys(marks)[i] => accessing the array elements
    console.log("the marks of "+ Object.keys(marks)[i]+' = '+marks[Object.keys(marks)[i]]);
}

// problem 2
for(let i in marks){
    console.log("the marks of "+ i+' = '+marks[i]);
}

// problem 4

const mean = (a, b, c, d) => {
    return (a+b+c+d)/4;
}

console.log(mean(1,2,3,4));
console.log(mean(4,5,6,7));