import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [name,UpdatedName] = useState()
  const [clikname,fullname]= useState()
  const [pname,pupdatedname]= useState()
  const [clickpname,pfullname]= useState()

  const inputValue = (event) =>{
      // console.log(event.target.value);
      UpdatedName(event.target.value);
  }
  const setInput = () =>{
    fullname(name);
    pfullname(pname);
  }
  const passCall = (event) =>{
    // console.log(event.target.value);
     pupdatedname(event.target.value);
  }
  return(
   <>
   <div>
   <h1> hello {clikname} {clickpname} </h1>
   <input placeholder="enter your name" 
   onChange={inputValue}
   value={name}
    ></input>
    <input placeholder="password" onChange={passCall}
    value={pname}
    />
   <button onClick={setInput}>submit</button>
   </div>
   </>
  )
};

export default App;