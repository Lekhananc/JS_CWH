// problem 1
let age = 15

if(age>10 && age<20){
    console.log('your age lies between 10 and 20');
}
else{
    console.log('your age does not lie between 10 and 20');
}
// problem 2

let x = 10+60;

switch(x){
    case 10: console.log("result => 10");
    break;
    case 20: console.log("result => 20");
    break;
    case 30: console.log("result => 30");
    break;
    case 40: console.log("result => 40");
    break;
    case 50: console.log("result => 50");
    break;
    default: console.log('the number is not special');
}

// problem 3

let num = 5;
if(num%2==0 && num%3==0){
    console.log('the number is divisible by 2 and 3');
}
else{
    console.log('your number is not divisible by 2 and 3');
}
// problem 4

let num1 = 15;
if(num1%2==0 || num1%3==0){
    console.log('the number is divisible by 2 or 3');
}
else{
    console.log('your number is not divisible by 2 or 3');
}

// problem 5

let age1 = 19;
console.log('you ',age1>18?'can drive':'cannot drive')