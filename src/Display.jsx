import { allData } from './App.jsx';
import Display1 from './Display1.jsx'
import { useContext } from 'react';
function Display(){
    //const  {name,age,arr,obj,receive} = props;
    const {name}=useContext(allData);
     const {age}=useContext(allData);
     const {arr}=useContext(allData);
     const {person}=useContext(allData);
    const {receive}=useContext(allData);
    const myData="im a child"
   // const {name,age,arr,obj,receive}=useContext(allData);

    return(
        <>
        <h1>Hello {name} {age} </h1>
        <h2>{arr}</h2>
        <h2>Array Datas</h2>
        <ul>
            {/* {
                arr.map((d)=>(
                    <li>{d}</li>
                ))
            } */}
            {
                arr.map((d,index)=>(
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
        <h2>{person.name} {person.age}</h2>
        <h2> im in Display component</h2>
        <button onClick={()=>{receive(myData)}}>Sent to parent</button>
        
        <h1>------------------------------------</h1>
        <Display1 />
         </>
    )
}

export default Display