import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {getCommandes ,getCommandeLignes} from '../../store/actions/commande/commandeActions';
import moment from 'moment';

const CommandeLigne = (props) => {
  const [commande,setCommande]=useState([]);
  const [commandeLigne,setCommandeLigne]=useState([]);
  const AddReception =()=>{
    props.history.push('/AddReception')  ;
  }
  
  useEffect(() => {
    props.getCommandes();
     console.log(props.CommandeProps.commandes);
     setCommande(props.CommandeProps.commandes);
     let details=[];
     let AllCommandeLignes=[];
     props.CommandeProps.commandes.forEach((item) => {
         props.getCommandeLignes(item.id)
         details.push(props.CommandeProps.commandeLignes.details);
     });
     console.log(details)
     details.forEach(item=>{
         item.forEach(x=>{
             console.log(x);
             AllCommandeLignes.push(x)
         })
     })
     console.log(AllCommandeLignes)
     setCommandeLigne(AllCommandeLignes);
    }, [])

    return ( 
      <div className="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"24%" }}> 

  <div class="card" style={{ width:"800px"}}>
    <h3 class="card-header text-center font-weight-bold text-uppercase py-4">All My commandes</h3>
  <div class="card-body">
      <div id="table" class="table-editable">

        <span class="table-add float-right mb-3 mr-2">
        <button type="button" class="btn btn-default btn-rounded" onClick={AddReception}>Add Reception</button></span>
        <table class="table table-bordered table-responsive-md table-striped text-center">
        <div>
          <thead>
            <tr>
              <th class="text-center">Article Name </th>
              <th class="text-center">unit Price</th>
              <th class="text-center">quantity </th>
              <th class="text-center">Commande Date </th>
            </tr>
          </thead>
          <tbody>
          {commandeLigne.map((item) =>(
            <tr>
          <td class="pt-3-half" contenteditable="true">{item.Name}</td>
          <td class="pt-3-half" contenteditable="true">{item.price}</td>
          <td class="pt-3-half" contenteditable="true">{item.quantity}</td>
          <td class="pt-3-half" contenteditable="true">{moment(item.createdAt).format("DD-MM-YYYY")} </td>
            </tr>
          ))}
          </tbody>
          </div>
        </table>
      </div>
    </div> 
  </div>
  </div></div></div>
     );
}
 
const mapStateToProps =state=>({
    CommandeProps: state.CommandeState
    })
  
export default connect (mapStateToProps,{getCommandeLignes,getCommandes})(CommandeLigne);
  