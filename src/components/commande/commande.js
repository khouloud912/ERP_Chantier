
import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux'

const Commande = ({cartProps}) => {
  console.log(cartProps);

    return ( 
        <div style={{marginLeft:"23%",marginTop:'5%'}}>
        <section>
     <div className="row">
           <div className="card wish-list mb-3">
         <div className="card-body">
           <h5 className="mb-4">Cart Items</h5>
           <div className="row mb-4">
             <div className="col-md-5 col-lg-3 col-xl-3">
               <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                 <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample" />
                 <a href="#!">
                   <div className="mask waves-effect waves-light">
                     <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" />
                     <div className="mask rgba-black-slight waves-effect waves-light" />
                   </div>
                 </a>
               </div>
             </div>
             <div className="col-md-7 col-lg-9 col-xl-9">
               <div>
                 <div className="d-flex justify-content-between">
                   <div>
                   
                     <div>
                     <h5>koigf </h5>
                     <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                     <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                     <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                     </div>
                   
                   </div>
                   <div>
                     <div className="def-number-input number-input safari_only mb-0 w-100">
                       <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus" />
                       <input className="quantity" min={0} name="quantity" defaultValue={1} type="number" />
                       <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus" />
                     </div>
                     <small id="passwordHelpBlock" className="form-text text-muted text-center">
                       (Note, 1 piece)
                     </small>
                   </div>
                 </div>
                 <div className="d-flex justify-content-between align-items-center">
                   <div>
                     <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i className="fas fa-trash-alt mr-1" /> Remove item </a>
                     <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i className="fas fa-heart mr-1" /> Move to wish list </a>
                   </div>
                   <p className="mb-0"><span><strong>$17.99</strong></span></p>
                 </div>
               </div>
             </div>
           </div>
   
           <hr className="mb-4" />
          
         </div>
       </div>
       </div>
   
       
     <div className="col-lg-4">
       {/* Card */}
       <div className="card mb-3">
         <div className="card-body">
           <h5 className="mb-3">The total amount of</h5>
           <ul className="list-group list-group-flush">
             <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
               Temporary amount
               <span>$25.98</span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center px-0">
               Shipping
               <span>Gratis</span>
             </li>
             <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
               <div>
                 <strong>The total amount of</strong>
                 <strong>
                   <p className="mb-0">(including VAT)</p>
                 </strong>
               </div>
               <span><strong>$53.98</strong></span>
             </li>
           </ul>
           <button type="button" className="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>
         </div>
       </div>
     
       <div className="card mb-3">
         <div className="card-body">
           <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
             Add a discount code (optional)
             <span><i className="fas fa-chevron-down pt-1" /></span>
           </a>
           <div className="collapse" id="collapseExample1">
             <div className="mt-3">
               <div className="md-form md-outline mb-0">
                 <input type="text" id="discount-code1" className="form-control font-weight-light" placeholder="Enter discount code" />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   </div>          

     );
}
 const mapStateToProps =state=>({
     cartProps : state.cartState
 })

export default connect (mapStateToProps)(Commande);