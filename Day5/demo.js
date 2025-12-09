console.log("hai1");

function display(name){
    console.log("hai2");
    setTimeout(()=>{
        console.log("inside display",name);
    },2000);
}


console.log("hai3");

function add(show){
    console.log("inside add");
    istrue=false;
    if(istrue){
        show("nivi");//display
    }
    else{
        console.log("not display");
    }
}
add(display);



// let myPromise=new Promise((resolve,reject)=>{
//     let isdone=true;
//     if(isdone){
//         resolve();
//     }
//     else{
//         reject();
//     }
// });

// function sucess(){
//     console.log("inside sucess");
// }
// function failure(){
//     console.log("inside failure");
// }

console.log("with my promise cannot resuable");
let myPromise=new Promise((resolve,reject)=>{
    let isdone=true;
    if(isdone){
        resolve(1000);
    }
    else{
        reject();
    }
});
myPromise.then((data)=>{console.log("done success",data)}).catch(()=>{console.log("not done")});





console.log("with reusable function");

function diaplay1(){
    return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject()
  })

}
diaplay1().then((data)=>{console.log("inside sucess",data)})
.catch (()=>{console.log("inside failure")});



console.log("without then and catch");

function diaplay2(){
    return new Promise((resolve,reject)=>{
    let isTrue=false;
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("bye")
  })
}

 async function show2(){
   try{
    var res = await diaplay2();
   console.log(res);
   }
   catch(Exception){
    console.log("the error is",Exception);
   }
}
show2();