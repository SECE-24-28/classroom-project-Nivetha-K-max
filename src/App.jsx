import Display from './Display.jsx'
import { useState,createContext } from 'react';
export const allData=createContext();
import Display1 from './Display1.jsx'
function App() {
  var name="sai";
  var age=22;
  const arr=[1,2,3,4,5];
   const person={name:"sai",age:22};
  const [data, setData] = useState()
  const receive = (d) => {
    console.log("Data received from child:", d);
     setData(d);
  }
  return(
    //<>
    <allData.Provider value={{name,arr,age,person,receive}}>
    <h1>Hello, MERN Project!</h1>
    <h2>Data from child: {data}</h2>
    <h1>-------------------------------------</h1>
    {/* <Display name={name} age={age} arr={arr} obj={person} receive={receive}/> */}
    <Display />
    </allData.Provider>
    //</>
  )
}

export default App
