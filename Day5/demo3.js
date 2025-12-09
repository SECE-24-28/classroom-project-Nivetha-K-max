var person = {
    firstName: "John",
    lastName: "Doe",
    gender:"male",
    mobile:1234567890
}

var address={
    doorNo:120,
    street:"MG Road",
    city:"Bangalore",
    state:"Karnataka"
}

var info={...person,...address};
console.log(info);
var copyData={...person};
console.log(copyData);

// console.log(person);
// console.log(person.name);
// const{a,b}=person;
// console.log(a);
// console.log(b);

var a=[1,2,3,4,5];
var b=[6,7,8,9,10];
var res=[...a,...b];
console.log(res);



function add(a,b){
    console.log(a+b);
}
add(1,2);



function add2(...a){
    let sum=0;
    for(let i of a){
        sum+=i;
    }
    return sum;
}
var nums=[10,20,30];
var result=add2(...nums);
console.log(result);


// destructure 
// asynchronus
// await
// Promise
