import React, { useState } from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';




const App=()=>{ 
  const [Fullname,setFullname]= useState({
    fname:'',
    pass:'',
    email:'',
    phone:'',
  }) ;
 
  
  
  const InputEvent=(e)=>{ 
  console.log(e.target.value); 
  const {value,name}=e.target;
  

  setFullname((preValue)=>{
    return{
      ...preValue,
      [name]:value,
    }

   
         
  })
  };
  
  const onSubmit=(e)=>{ 
    e.preventDefault();
  
  }
 
  
 return (<>
  <div> 
  <form onSubmit={onSubmit} >
    <h1 style={{color:'blue'}} >Hello {Fullname.fname} {Fullname.pass}  {Fullname.email}  {Fullname.phone} </h1> <br></br> 
    
    <input type='text' placeholder='Enter Your Name' onChange={InputEvent} value={Fullname.fname} name='fname' /> <br></br> <br></br>
    <input type='text' placeholder='Enter Your password' onChange={InputEvent} value={Fullname.pass} name='pass' /> <br></br> <br></br>
    <input type='text' placeholder='Enter Your email' onChange={InputEvent} value={Fullname.email} name='email' /> <br></br> <br></br>
    <input type='text' placeholder='Enter Your phone no.' onChange={InputEvent} value={Fullname.phone} name='phone' /> <br></br> <br></br>
    
    <button  type='submit'>Click Me</button> 
    </form>
  </div>
</>
 );
} 

export default App;