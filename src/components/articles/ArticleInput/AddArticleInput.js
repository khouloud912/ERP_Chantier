import React, { useState,useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import { Select } from '@material-ui/core';
import {connect} from 'react-redux';
import {getNumbers} from '../../../store/actions/getAction';

const AddArticleInput  = (props) => {
    const [ArticleInputs, setArticleInputs] = useState({  articleId :'',quantity: '', total_price:'' , });  
    const[articles,setArticle]=useState([]);

    useEffect(() => {
        getNumbers()
        axios.get("http://localhost:3001/Article/getAllArticles").then(response => {
            setArticle(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });        
    }, [])
    
    const apiUrl = "http://localhost:3001/ArticleInput/addArticleInput";  
    const onChange = (e) => {  
        setArticleInputs({ ...ArticleInputs, [e.target.name]: e.target.value });
          } 
    const InsertArticleInputs = (e) => {  
                e.preventDefault();  
                console.log(e)
                const data = { total_price:ArticleInputs.total_price, quantity: ArticleInputs.quantity };  
                console.log(data)
                axios.post("http://localhost:3001/ArticleInput/addArticleInput", data)  .then((result) => {  
                    console.log(result.data);            
                  });  
              };  
    return ( 
        <div style={{ marginTop: "4%" , marginLeft:"24%" }}>
        <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={InsertArticleInputs}>
                <p className="h4 text-center mb-4">Add ArticleInput</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Article Name
                </label> 
                <select   
                 onChange={onChange}
                    className="browser-default custom-select">
                    {articles.map((item)=>(
                    <option  value={ArticleInputs.articleId=item.id}>{item.Name}</option>
                    ))}
                </select>
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                  quantity
                </label>
                <input type="text" name="quantity" className="form-control" value={ArticleInputs.quantity} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                 total Price
                </label>
                <input type="text" name="total_price" className="form-control" value={ArticleInputs.total_price} onChange={onChange} />
                <br/>
                <div className="text-center mt-4">
                <input  type="submit" />
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>       
</div>
     );
}

const mapStateToProps =state=>({
    cartProps : state.cartState
    })

 export default connect(mapStateToProps, {getNumbers})(AddArticleInput);
