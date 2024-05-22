let a = "20";    //prompt converts any input given to a string
console.log(typeof a);
a = Number.parseInt(a)  //Number.parseInt(a) is used to convert a string to a number
console.log(typeof a);
if(a<0){
    console.log('this is an invalid age');
}
else if(a<9){
    console.log('you are a kid');
}
else if(a<18 && a>9){
    console.log('you are a kid and you can drive after 18');
}
else{
    console.log('you can drive');
}

let x = "papaya"

switch(x){
    case 'apple': console.log('you ara an apple');
    break;
    case 'papaya': console.log('you ara a papaya');
    break;
    case 'orange': console.log('you ara an orange');
    break;
    case 'grape': console.log('you ara a grape');
    break;
    case 'watermelon': console.log('you ara a watermelon');
    break;
}

// terinary operator

let age = 12;
console.log('you ',a>18?'can vote':'cannot vote');
console.log('you ', age>18?'can drive':'cannot drive');