import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {removeFromCart ,adjustItemQty} from '../../store/actions/AllActions.';
import {addCommande} from '../../store/actions/commande/commandeActions';

const Commande = ({cartProps , removeFromCart , adjustItemQty ,addCommande}) => {
  const [totalPrice,setTotalPrice]=useState(0);
  const [totalItems,setTotalItems]=useState(0);
  const [input,setInput]=useState();
  console.log(cartProps);


  useEffect(() => {
    let items=0;
    let price=0;
     cartProps.cart.forEach(item => {
       setInput(item.quantity);
       items += item.quantity;
       price += item.quantity * item.price ;
     });
     setTotalPrice(price);
     setTotalItems(items)

  }, [cartProps, totalItems,totalPrice,setTotalItems,setTotalPrice]);
  
  const AddMyCommande=()=>{
    addCommande(cartProps.cart);
    cartProps.cart.forEach(item=>{
      removeFromCart(item.id)
    })
 }

  return ( 
    <div className="container-fluid page-body-wrapper">
    <div class="row row-offcanvas row-offcanvas-right">
    <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "5%" , marginLeft:"24%" }}> 
 
  <section>
    <div className="row">
      <div className="col-lg-8">
        <div className="mb-3">
          <div className="pt-4 wish-list">
           <h5 className="mb-4">Cart (<span>{totalItems}</span> items)</h5>
            {cartProps.cart.map((item) =>(
              <div>
            <div className="row mb-4">
              <div className="col-md-5 col-lg-3 col-xl-3">
                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                  <img className="img-fluid w-100" src={`${"http://localhost:3001"}/${item.image}`} alt="Sample" />
                  <a href="#!">
                    <div className="mask">
                      <img className="img-fluid w-100" src={`${"http://localhost:3001"}/${item.image}`} />
                      <div className="mask rgba-black-slight" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-7 col-lg-9 col-xl-9">
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                     <h5>{item.Name}</h5>
                     <p className="mb-3 text-muted text-uppercase small">{item.location}</p>
                     <p className="mb-2 text-muted text-uppercase small">Unity: {item.unity}</p>
                     <p className="mb-3 text-muted text-uppercase small">Minimum Quantity: {item.minimum_quantity}</p>
                    </div>          
                    <div>
                      <div className="def-number-input number-input safari_only mb-0 w-100"> 
                        <input className="quantity" min={0} name="quantity" defaultValue={input} type="number" onChange={(e)=>{
                             console.log(e.target.value);
                             setInput(e.target.value);
                             adjustItemQty(item.id, e.target.value)
                        }} />
                      </div>
                      <small id="passwordHelpBlock" className="form-text text-muted text-center">
                        (Note, {item.quantity} piece)
                      </small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3" onClick={()=>removeFromCart(item.id)}><i className="fas fa-trash-alt mr-1" /> Remove item </a>
                      <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i className="fas fa-heart mr-1" /> Move to wish list </a>
                    </div>
                   <p className="mb-0"><span><strong id="summary">$ {item.price}</strong></span></p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            </div>
            ))}   
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="mb-3">
          <div className="pt-4">
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
               <span><strong>$ {totalPrice}</strong></span>
              </li>
            </ul>
            <button type="button" className="btn btn-primary btn-block" onClick={AddMyCommande}>Add My Commande</button>
          </div>
        </div>
        <div className="mb-3">
          <div className="pt-4">
         
            <div className="collapse" id="collapseExample">
              <div className="mt-3">
                <div className="md-form md-outline mb-0">
                  <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div></div></div>
   );
}
 
const mapDispatchToProps=dispatch=>{
  return{
  removeFromCart:(id)=>dispatch(removeFromCart(id)),
  adjustItemQty:(id, value)=>dispatch(adjustItemQty(id, value)),
  addCommande:(commande)=>dispatch(addCommande(commande))
  }
}
const mapStateToProps =state=>({
  cartProps : state.cartState,
  CommandeProps: state.CommandeState
  })

export default connect (mapStateToProps,mapDispatchToProps)(Commande);









