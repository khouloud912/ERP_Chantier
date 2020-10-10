import React, { useState,useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {getAllArticles, addArticleOutput} from '../../../store/actions/article/AllArticleActions'
import Select from "react-select";
import {connect} from 'react-redux';

import axios from 'axios';


const AddArticleOutput  = (props) => {
    const [ArticleOutputs, setArticleOutputs] = useState({ articleId: '', quantity: '',  totally_price:''});  
    const apiUrl = "http://localhost:3001/ArticleOutput/addArticleOutput";  
    const[articles,setArticle]=useState([]);

    useEffect(() => {
        getAllArticles();
        console.log(props.ArticleProps)
        setArticle(props.ArticleProps.AllArticles.map( option => ({ value: option.id, label: option.Name })))
        let options =   props.ArticleProps.AllArticles.map( option => ({ value: option.id, label: option.Name }))
        console.log(options) 
    }, [])
    
    const onChange = (e) => {  
        setArticleOutputs({ ...ArticleOutputs, [e.target.name]: e.target.value });
          } 
    
    const InsertArticleOutputs = (e) => {  
                e.preventDefault();  
                console.log(e)
                const data = {articleId:ArticleOutputs.articleId,  quantity: ArticleOutputs.quantity ,totally_price:ArticleOutputs.totally_price,  };  
                console.log(data)
                props.addArticleOutput(data)
               
              }; 
    return ( 
      
      <div className="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"24%" }}>
        <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={InsertArticleOutputs}>
                <p className="h4 text-center mb-4">Add ArticleOutputs</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Article Name
                </label> 
                <Select
                  name="articleId"
                  value={ArticleOutputs.articleId}
                  options={articles}
                  onChange={e =>{
                    console.log(e)
                   setArticleOutputs({articleId: e.value})}}
                 />
              
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                  quantity
                </label>
                <input type="text" name="quantity" className="form-control" value={ArticleOutputs.quantity} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                 total Price
                </label>
                <input type="text" name="totally_price" className="form-control" value={ArticleOutputs.totally_price} onChange={onChange} />
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
    ArticleProps:state.ArticleState
    })

 export default connect(mapStateToProps, {getAllArticles ,addArticleOutput})(AddArticleOutput);
