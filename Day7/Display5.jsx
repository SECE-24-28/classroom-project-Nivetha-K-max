import {useState} from 'react';
// const Display5=()=>{
//     const[name,setName]=useState("sai");
//     const [gender,setGender]=useState("male");
//     const[contact,setContact]=useState(9999999999);
//     return(
//         <>
//         <h1>Display5component</h1>
//         <h1>Name:{name}</h1>
//         <h1>Gender:{gender}</h1>
//         <h1>Contact:{contact}</h1>
//         </>
        
//     )
// }


// const Display5=()=>{
//     const[student,setStudent]=useState({name:"sai",gender:"male",contact:9999999999});
//     function updateName(){
//         setStudent({name:"ram"})

//     }
//     return(
//     <>
//     <h1>Display5component</h1>
//     <h1>Name:{student.name}</h1>
//     <h1>Gender:{student.gender}</h1>
//     <h1>Contact:{student.contact}</h1>
//     <button onClick={updateName}>Update Name</button>
//     </>
//     )
// }

// const Display5=()=>{
//     const[student,setStudent]=useState({name:"sai",gender:"male",contact:9999999999});
//     function updateName(){
//         setStudent((prevState)=>({
//             ...prevState,
//             name:"ram",
//             contact:8888888888
//         }))
//     }
//     return(
//     <>
//     <h1>Display5component</h1>
//     <h1>Name:{student.name}</h1>
//     <h1>Gender:{student.gender}</h1>
//     <h1>Contact:{student.contact}</h1>
//     <button onClick={updateName}>Update Name</button>
//     </>
//     )
// }


// export default Display5;



// import { useState } from "react"

// const U=()=>{

//     const[data,setData]=useState(["one","two"])
//       const[count,setCount]=useState(10)
 
//     function addItem(){
//         var item=count
//         setData((pre)=>{
//             return([...pre,item])
//         })
// setCount((t)=>{
// return(t+1)
// })

//     }
//     return(
//     <>
//     <h1>im from Disp5</h1>
//     <button onClick={addItem}>add</button>
//      <ul>
//         {
//             data.map((d)=>{
//                     return (<li>{d}</li>)
//             })
//         }
//      </ul>
     
//     </>
// )

// }

// export default Display5


const Display5=()=>{

    const[data,setData]=useState(["one","two"])
      const[count,setCount]=useState(10)
 
    function addItem(){
        var item=count
        setData((pre)=>{
            return([...pre,item])
        })
setCount((t)=>{
return(t+1)
})

    }
    return(
    <>
    <h1>im from Disp5</h1>
    <button onClick={addItem}>add</button>
     <ul>
        {
            data.map((d)=>{
                    return (<li>{d}</li>)
            })
        }
     </ul>
     
    </>
)

}

export default Display5