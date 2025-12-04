
// console.log("without arguments without return type")
// const add=()=>{
//     console.log("hello")
// }


// console.log("with arguments with return type1")
// const add2=(a,b)=>{
//     return a+b
// }
// let res=add2(1,2)
// console.log(res)
// console.log("with arguments with return type2")
// const add3=(a,b)=> a+b
// let res3=add3(3,4)
// console.log(res3)

// console.log("without arguments with return type")

// const add4=()=>{
//     console.log("hello")
//     return 10
// }
// let ans=add4()
// console.log("see u",ans)

// console.log("without arguments without return type")
// const add5=()=>{
//     console.log("hello")
// }
// add5()


// 1 — works
let s = "hello"
let result = ""
for (let char of s) {
    result += char.toUpperCase()
}
console.log(result)  


let s1 = "world"
const b = [...s1].map(c => c.toUpperCase())
console.log(b)          
console.log(b.join("")) 


let s2 = "hello world"
const b1 = str => str.toUpperCase()
console.log(b1(s2)) // HELLO WORLD
