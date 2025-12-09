import { useState } from 'react';


// const Display2 = () => {
//   const [name, setName] = useState("");

//   console.log("Name in Display2:", name);

//   return (
//     <>
//       <h1>This is Display2 component {name}</h1>

//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <button onClick ={() => {setName("")}}>Clear</button>
//     </>
//   );
// };


// const Display2 = () => {
//   const [name, setName] = useState("");

//   console.log("Name in Display2:", name);

//   return (
//     <>
//       <h1>This is Display2 component {name}</h1>

//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick ={() => {setName("")}}>Clear</button>
//     </>
//   );
// };

import { useRef } from 'react';

// const Display2 = () => {
//   const [name, setName] = useState("");
//   const inputdata = useRef();

//   console.log("the data is ", inputdata.current?.value);

//   return (
//     <>
//       <h1>This is Display2 component</h1>
//       <input type="text" ref={inputdata} />
//       <button onClick={() => { setName(inputdata.current.value); }}>Submit</button>
//       <h2>The name is: {name}</h2>
//     </>
//   );
// };



const Display2 = () => {
  const [name, setName] = useState("");
  const inputdata = useRef();
  const view=()=>{
    console.log("the data is ", inputdata.current.value);
    setName(inputdata.current.value);
  }


  return (
    <>
      <h1>This is Display2 component</h1>
      <input type="text" ref={inputdata} />
      <button onClick={view}>Submit</button>
      <h2>The name is: {name}</h2>
    </>
  );
};
export default Display2;
