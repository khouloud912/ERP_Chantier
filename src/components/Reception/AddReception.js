import React, { useState,useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {connect} from 'react-redux';
import {getCommandes ,addReception} from '../../store/actions/commande/commandeActions';
import Select from "react-select";
import moment from 'moment';


const Reception = (props) => {
    const [reception, setReception] = useState({  commandeId :'' ,montant_total: '', reglement_method:''  });  
    const[commandes,setCommandes]=useState([]);
    const [method,setMethod]=useState([
        { label: "Electronic payments", value: "Electronic payments" },
        { label: "Credit card", value: "Credit card" },
        { label: " Cheque", value: " Cheque" },
        { label: "Money Transfer", value: "Money Transfer" },
        { label: "recurring cash", value: "recurring cash" },

      ]); 

    useEffect(() => {
        getCommandes();
        console.log(props.CommandeProps.commandes);
       setCommandes(props.CommandeProps.commandes.map( option => ({ value: option.id, label: moment(option.date_commande).format("DD-MM-YYYY") })))
   //     let options = props.ArticleProps.AllArticles.map( option => ({ value: option.id, label: option.Name }))
      //  console.log(options)
    }, [])

    const onChange = (e) => {  
        
        setReception({ ...reception, 

            [e.target.name]: e.target.value , 
        });
          }        
    const InsertArticleInputs = (e) => {  
                e.preventDefault();  
                console.log(e)
                const data = { commandeId:reception.commandeId, montant_total:reception.montant_total, reglement_method: reception.reglement_method };  
                console.log(data)
                props.addReception(data); 
                //props.getOneArticle(ArticleInputs.articleId, ArticleInputs.quantity , 'input' )      
              };  
    return ( 
        <div className="container-fluid page-body-wrapper">
        <div class="row row-offcanvas row-offcanvas-right">
        <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"24%" }}> 
        <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={InsertArticleInputs}>
                <p className="h4 text-center mb-4"> New Commande Reception</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    commande date
                </label>
                <Select
                  name="commandeId"
                  value={reception.commandeId}
                  options={commandes}
                  onChange={e => {
                      console.log(e)
                      console.log(e.value);
                      setReception({commandeId: e.value})}}/>  
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    total Price $
                </label>
                <input type="text" name="montant_total" className="form-control" value={reception.montant_total} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Reglement method
                </label>
                <Select options={method} 
                name="reglement_method"
                value={reception.reglement_method}
                onChange={e =>{
                console.log(e.value)
                setReception({...reception,
                    reglement_method: e.value})
                }}        
               />
                <br/>
                <div className="text-center mt-4">
                <input  type="submit" />
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>       
</div></div></div>
     );
}
const mapStateToProps =state=>({
    CommandeProps: state.CommandeState
    })
export default connect(mapStateToProps, {getCommandes ,addReception})(Reception);