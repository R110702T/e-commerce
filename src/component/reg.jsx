import React from 'react';
import '../css/reg.css';
const Reg =()=>{
    return(
        <div className='mi'>
          
    <h1>USER REGISTER</h1>
         <form>
         
         <label>NAME</label><input type="text" name="name1" placeholder="enter your full name"></input><br></br>
         
         <label>DATE OF BIRTH</label><input type="date" name="name2"></input><br></br>
         
         <label>MOBILE</label><input type="number" name="name3 " placeholder="0123456789"></input><br></br>
         
         <label>EMAIL</label><input type="email" name="name4" placeholder="xyz@gmail.com"></input><br></br>
         <label >PASSWORD</label><input type="password" name="name5"></input><br></br>
         <input type ="submit"></input> 
         <input type="reset" ></input>      
         </form>
             

            
        </div>
    )
}
export default Reg;