import React from 'react';
import { NavLink } from 'react-router-dom';
//import Dropdown from 'react-bootstrap-dropdown';

 import '../css/topbar.css';
//  import Reg from './reg';
const Top =()=>{
    return(
        <>
        
            <div className='container-fluid'>
                <div className='row box mt-2'>
                    <div className='col-12 col-md-2 col-xl-2 col-lg-2  mt-2'>
                    
                         <NavLink to="/" ><img src="cap.PNG" alt="..."></img></NavLink> 
                    </div>

                    
                      <div className='col-12 col-md-3 col-xl-3 col-lg-3 mt-3 '><input  type="text" name="name1" placeholder="search your product, kurti" ></input></div>
                       <div className='col-12 col-md-1 col-xl-1 col-lg-1 mt-4 sr'>
                       <i class="fas fa-search" ></i></div>
                    
                    <div className='col-12 col-md-2 col-xl-2 col-lg-2 mt-4'>
                        <NavLink to="/" className='bt'>LOGIN/</NavLink>
                         <NavLink exact to="/reg" className='bt'>REGISTER</NavLink> 
                    </div>

                    <div className='col-12 col-md-4 col-xl-4 col-lg-4 mt-4 main'>
                        <nav>
                           <ul>
                                <li><NavLink exact to="/contact" className="man" >CONTACT</NavLink></li>
                                
                                <li><div>
                                    <a  class="btn btn-secondary dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" >CATEGORY</a>

                                 <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">electronics</a>
                                      <a class="dropdown-item" href="#" >Appliance</a>
                                      <a class="dropdown-item" href="#">furniture</a>
                                      <a class="dropdown-item" href="#">fashion</a>
                                      <a class="dropdown-item" href="#">shoe</a>
                                      <a class="dropdown-item" href="#">jewellery</a>
                                      <a class="dropdown-item" href="#">makeup</a>
                                 </div>
                                </div></li>
                                 
                                <li><NavLink to="/" className="man" >CART<i class="fas fa-shopping-cart"></i></NavLink></li>
                           
                           </ul>
                        </nav>
                        
                    </div>


                </div>

                <div className='row box1 '>
                    
               
                   <NavLink to="/" className="sec"><img src="offer.webp" alt="..." height="80px"></img><br></br>TOP OFFERS</NavLink>
                   <NavLink to="/" className="sec"><img src="gross.webp" alt="..." height="80px"></img><br></br>GROCERY</NavLink>
                    <NavLink to="/" className="sec" ><img src="home.webp" alt="..."height="80px"></img><br></br>HOME</NavLink>
                    <NavLink to="/" className="sec"><img src="fashion.webp" alt=".."height="80px"></img><br></br>FASHION</NavLink>
                    <NavLink to="/" className="sec"><img src="electronics.webp" alt="..." height="80px"></img><br></br>ELECTRONICS</NavLink>
                     <NavLink to="/" className="sec"><img src="appli.webp" alt="..."height="80px"></img><br></br>APPLIANCE</NavLink>
                     <NavLink to="/" className="sec"><img src="mobile.webp" alt="..."height="80px"></img><br></br>MOBILE</NavLink>
                      <NavLink to="/" className="sec"><img src="travel.webp" alt="..."height="80px"></img><br></br>TRAVEL</NavLink>
                      <NavLink to="/" className="sec"><img src="toy.webp" alt="..."height="80px"></img><br></br>BEAUTY, TOY</NavLink>
                    
                </div>
                  



                


            </div>



              



             
           <div className='container'>
              <div className='row  box2 mt-5  '>
                <div className='col-12 col-md-6 col-xl-6 col-lg-6 '>
                    <div className='item1'>
                      <h2>lowest price best quality and shopping</h2><br></br>
                      <h5>FREE DELIVERY| EASY RETURN</h5>
                      <button className='b1'>SHOP NOW</button>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                      <div className='item2'>
                        <img src="sale.webp" alt="...." width="700px" height="335px"></img>
                      </div>
                </div>



               </div>

               <div className='container-fluid'>
                <div className='row box3 mt-4'>
                  <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
                       <div className='subim1'>   <img src="wom.webp" alt="...." height="400px" width="400px"></img></div>
                  </div>
                  
                  <div className='col-12 col-md-6 col-xl-6 col-lg-6 riya '>
                    <div className='row'><div className='to'><h1>FASHION STORE<hr className='bg-white'></hr></h1></div></div>
                     <div className='row'>
                      <div className='col-12 col-md-6 col-lg-6 col-xl-6 '>
                        <div className='subim2'><img src="men.webp" alt="..."></img></div>
                      </div>
                      <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                         <div className='subim3'><img src="kids.webp" alt="...."></img></div>
                      </div>
                     </div>
                  </div>

                </div>
               </div>
              
            </div>
         </>
       )
   }
export default Top;