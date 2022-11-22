import React, {useState} from 'react';
import '../css/product.css';
import Aliya from './productitem';
const Product =()=>{

 //commamd age dichhi ki krte hbe   trpr return chaibo 
const[items,setItem]=useState(Aliya);
const filterItem=(categoryItem)=>{
const updateItem=Aliya.filter ((currElem)=>{
    return currElem.category=== categoryItem;
  }
  );
  setItem(updateItem);
};

//main program
    return(
        <>
           <h3 className='mt-4  main-head'>buy product</h3> <hr></hr>
           <div className='container menu-tabs'>
            <div className='menu-tab d-flex justify-content-center'>
                <button className='btn btn-danger'onClick={()=>setItem(Aliya)}>all product</button>
                <button className='btn btn-danger'onClick={()=>filterItem('grocery')} >GROCERY</button>
                <button className='btn btn-danger'onClick={()=>filterItem('home')}>HOME</button>
                <button className='btn btn-danger'onClick={()=>filterItem('furniture')}>FURNITURE</button>
                <button className='btn btn-danger'onClick={()=>filterItem('appliance')}>APPLIANCE</button>
                <button className='btn btn-danger'onClick={()=>filterItem('toy')}>TOY</button>
                <button className='btn btn-danger'onClick={()=>filterItem('fashion')}>FASHION</button>
                <button className='btn btn-danger'onClick={()=>filterItem('electronics')}>ELECTRONICS</button>
                
            </div>
           </div>

           <div className='menu-item  container'>
              <div className='row'>
                  {
                    items.map((elem)=>{
                        const{category,img,name,price}=elem;
                        return(
                            <div  className='col-12 col-md-4 col-xl-4 col-lg-4 mb-5'>
                   <div className='sub-item mt-4'>
                       <div className='prdt1'>
                        <img src={img} alt="..."></img>
                      </div><br></br>
                      <div className='prdt text-center'>
                        <h6> {category}</h6>
                        <h5>{name}</h5>
                        <p>{price}</p>
                       </div>
                    </div>
                    
                 </div>
                        )
                    })
                  }
                
              </div>
           </div>

        </>
    )
}
export default Product;