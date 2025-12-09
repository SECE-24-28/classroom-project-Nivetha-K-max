import { StrictMode } from 'react';
import { useState } from 'react';
// const Display6 = () => {
//     function info(){
//         console.log("form submitted");
//     }
//     const [name,setName]=useState("");
//     return(
//         <>
//         <h1> Display6 component(form)</h1>
//         <form onSubmit={info}>
//             <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
//             <input type="submit" value="Clickhere!!!!"></input>
//             <h2>The name is:{name}</h2>
//         </form>
//         </>
//     )
// }



const Display6 = () => {
    function info(e){
        e.preventDefault();
        console.log("form submitted");
    }
    const [name,setName]=useState("");
    return(
        <>
        <h1> Display6 component(form)</h1>
        <form onSubmit={info}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="submit" value="Clickhere!!!!"></input>
            <h2>The name is:{name}</h2>
        </form>
        </>
    )
}

export default Display6;