import React, { useState,useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {connect} from 'react-redux';
import {getNumbers} from '../../../store/actions/getAction';
import {getAllArticles,addArticleInput } from '../../../store/actions/article/AllArticleActions'
import Select from "react-select";

const AddArticleInput  = (props) => {
    const [ArticleInputs, setArticleInputs] = useState({  articleId :'',quantity: '', total_price:'' , });  
    const[articles,setArticle]=useState([]);

    useEffect(() => {
        getNumbers()
        getAllArticles()
        setArticle(props.ArticleProps.AllArticles.map( option => ({ value: option.id, label: option.Name })))
        let options =   props.ArticleProps.AllArticles.map( option => ({ value: option.id, label: option.Name }))
        console.log(options)
    }, [])

    const onChange = (e) => {  

        setArticleInputs({ ...ArticleInputs, 
            [e.target.name]: e.target.value });
          }        
    const InsertArticleInputs = (e) => {  
                e.preventDefault();  
                console.log(e)
                const data = { articleId:ArticleInputs.articleId, total_price:ArticleInputs.total_price, quantity: ArticleInputs.quantity };  
                console.log(data)
                props.addArticleInput(data); 
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
                <p className="h4 text-center mb-4">Add ArticleInput</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Article Name
                </label>
                <Select
                  name="articleId"
                  value={ArticleInputs.articleId}
                  options={articles}
                  onChange={e => {
                      console.log(e)
                      setArticleInputs({articleId: e.value})}}
                 />                    
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
</div></div></div>
     );
}
const mapStateToProps =state=>({
    cartProps : state.cartState,
    ArticleProps:state.ArticleState,

    })

 export default connect(mapStateToProps, {getNumbers,getAllArticles,addArticleInput})(AddArticleInput);
