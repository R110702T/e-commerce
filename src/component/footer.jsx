import React from 'react';
import '../css/footer.css';
import { NavLink } from 'react-router-dom';

const Footer =() =>{
    return(
        <>
            <div className ='container-fluid footer'>
               <div className='row mt-5'>
                   <div className='col-12 col-md-3 col-xl-3 col-lg-3 mt-4 az'>
                     <div><b> ABOUT</b></div>
                     <hr className='bg-white'></hr>
                      <p>E-commerce is revolutionizing the way we all shop in India.Trusted by more than 1 Crore Indians
Cash on Delivery 

</p>
                      <div className='img1 mt-4'>
                      <img src="play.webp" alt="..." height="60px" width="240px"></img></div>
                      <div className='img2 mt-4'>
                      <img src="apple.webp" alt="..." height="60px" width="240px"></img></div>
                      
                   </div>
                   <div className='col-12 col-md-3 col-xl-3 col-lg-3 mt-4 aa'>
                     <div ><b>QUICK LINK</b></div>
                     <hr className='bg-white'></hr>
                     <ul>
                        <li>contact us</li>
                        <li>about us</li>
                        <li>career</li>
                        <li>flipkart stories</li>
                        <li>press</li>
                     </ul>
                   </div>

                   <div className='col-12 col-md-3 col-xl-3 col-lg-3 mt-4 ab'>
                     <div><b>SOCIAL</b></div>
                     <hr className='bg-white'></hr>
                     
                     <ul>
                        <li><NavLink to="#" className="rr">facebook <i class="fab fa-facebook-square"></i></NavLink></li>
                        <li><NavLink to="#" className="rr">instagram <i class="fab fa-instagram-square"></i></NavLink></li>
                        <li><NavLink to="#" className="rr">twetter <i class="fab fa-twitter-square"></i></NavLink></li>
                        <li><NavLink to="#" className="rr">youtube <i class="fab fa-youtube"></i></NavLink></li>
                        <li><NavLink to="#" className="rr">whatsapp <i class="fab fa-whatsapp-square"></i></NavLink></li>
                     </ul>
                     
                   </div>

                   <div className='col-12 col-md-3 col-xl-3 col-lg-3 mt-4 ac'>
                     <div><b>CONTACT</b></div>
                     <hr className='bg-white'></hr>
                     <a href="tel:+91- 9641906201"><i class="fas fa-phone"></i> Mob:+91-9641906201</a><br></br>
                     <a href="email:riyamaiti.rimi@gmail.com"><i class="far fa-envelope"></i> Email:riyamaiti.rimi@gmail.com</a>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58963.71620181551!2d88.38055924999999!3d22.5329706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1656738193515!5m2!1sen!2sin" width="300" height="250" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>

               </div>
               
                   
                
               

               <center>&copy; develop by meesho</center>
            </div>
             
        </>
    )
}
export default Footer;