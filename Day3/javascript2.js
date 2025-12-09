a=[12,34,45]
result= a.length
console.log(result)

// -----------------------

a1=[12,34,45]
result1= a1.push(160,89)
console.log('the result',result1)
console.log('the arr is',a1)

// -----------------------

a2=[12,34,45]
result2= a2.unshift(100,90)  
console.log('the result',result2)
console.log('the arr is',a2) 

// -----------------------

a3=[12,34,45]
result3= a3.pop()
console.log('the result',result3)
console.log('the arr is',a3)

// -----------------------

a4=[12,34,45]
result4= a4.shift()
console.log('the result',result4)
console.log('the arr is',a4)

// -----------------------

aa5=[12,34,25,676,78]
result5= aa5.splice(1,3)
console.log('the result',result5)
console.log('the arr is',aa5)

// -----------------------

a6=[12,34,25,676,78]
result6= a6.slice(1,2)   // ❗ slice never takes extra arguments → fixed
console.log('the result',result6)
console.log('the arr is',a6)

// -----------------------

a7=[12,34,25,676,78]
result7= a7.indexOf(676)
console.log('the result',result7)
console.log('the arr is',a7)

// -----------------------

a8=[12,34,25,676,78]
result8= a8.includes(100)
console.log('the result',result8)
console.log('the arr is',a8)

// -----------------------

a9=[12,34,25,676,78]
result9= a9.join("-")
console.log('the result',result9)
console.log('the arr is',a9)

// -----------------------

a10=[12,34,25,676,78]
result10= a10.reverse()
console.log('the result',result10)
console.log('the arr is',a10)

// -----------------------

a11=[12,34,25,676,78]
result11= a11.sort()
console.log('the result',result11)
console.log('the arr is',a11)

// -----------------------

a12=[12,34,25,676,78]
result12= a12.concat([100,200])
console.log('the result',result12)
console.log('the arr is',a12)

// -----------------------

a13=[12,34,25,676,78]
result13= a13.fill(0,1,3)
console.log('the result',result13)
console.log('the arr is',a13)

// -----------------------

a14=[12,34,25,676,78]
result14= a14.map((x)=>x*2)
console.log('the result',result14)
console.log('the arr is',a14)

// -----------------------

a15=[12,34,25,676,78]
result15= a15.filter((x)=>x>30)
console.log('the result',result15)
console.log('the arr is',a15)
