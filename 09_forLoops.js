// program to add first n natural numbers
let sum = 0;
for(let i = 0;i<34;i++){
    sum+=i+1;
}
console.log("sum of first n naturam numbers is "+sum);

// program to calculate factorial of a number

let num = 6;
let fact = 1;
for(let i = 1;i<=num;i++){
    fact *= i;
}
console.log(fact);

let obj = {
    lekhana: 98,
    diksha: 95,
    priya: 92,
    sharada : 89,
    manoj: 100
}
for(let a in obj){
    console.log('marks of '+a+' is '+obj[a]);
}

// for..of loop works only on itirable objects like Arrays, Strings, Maps, Sets etc.,
for(let b of 'lekhana'){
    console.log(b);
}