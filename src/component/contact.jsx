import React from 'react';
import '../css/contact.css';
const Contact =()=>{
    return(
        <>
         <div className='container'>
            <div className='row mt-4'>
                <div className='col-12 col-md-8 col-xl-8 col-lg-8 left'>
                <h1>get touch</h1>
                <input type="text" name="name1" placeholder=" first name" ></input><br></br>
                <input type="text" name="name2" placeholder=" lastname" require></input><br></br>
                <input type="text" name="name3" placeholder="organisazion name" require></input><br></br>
                <input type="mail" name="name4" placeholder="@gmail.com" require></input><br></br>
                <input type="number" name="name5" placeholder="123456789" require></input><br></br>
                <input type="file" name="name6" placeholder="file" require></input><br></br>
                <input type="text" name="name7" placeholder="acknowledgement" require></input><br></br>
                <input type="number" name="name8" placeholder="experience" require></input><br></br>
                
                </div>
                <div className='col-12 col-md-4 col-lg-4 col-xl-4 right'>

                </div>
            </div>
         </div>
        </>
    )
}
export default Contact;