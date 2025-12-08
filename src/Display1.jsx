import { useState } from "react"
function Display1(props){
    const {val} = props;
    const [myname, setMyname] = useState("hello demo")
    //var name="demo"
    console.log("inside Display1 component",myname);
    // function changeName(d){
    //     var name=d
    //     console.log("inside changeName function",name);
    // }
    return(
        <>
        <h1> Hello I am Display1 Component {myname} </h1>
        <h1> the value from parent display is: {val}</h1>
        <button onClick={()=>{setMyname("not demo")}}> Click Me </button>
        </>
    )    
}

export default Display1