import React, { useState,useEffect } from 'react';
import {getArticlesInputs,deleteArticleInput , getAllArticles} from '../../../store/actions/article/AllArticleActions';
import {connect} from 'react-redux';
import axios from 'axios';
import moment from 'moment';


const ArticleInputs = (props) => {
    const [data, setData] = useState([]);  
    const [article, setArticle] = useState([]);  

  useEffect(() => { 
    props.getArticlesInputs();
    console.log(props.ArticleProps.ArticleInput)
    setData(props.ArticleProps.ArticleInput)
    props.getAllArticles();
    console.log(props.ArticleProps.AllArticles);
    setArticle(props.ArticleProps.AllArticles.map( option => ({ value: option.id, label: option.Name})))
  
}, []); 

const getName=(id)=> {
  let label="";
 article.map((item)=>{
   if(item.value == id){
     console.log("id", id ,"And item.value", item.value ,"label", item.label)
      label= item.label
   }
 })
 return label
}


const AddArticleInput =()=>{
  props.history.push('/AddArticleInput')  ;
}
    return (  
      
      <div className="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"24%" }}>
        
        <div class="card" style={{width:"800px"}}>
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Article Inputs</h3>
        <div class="card-body">
            <div id="table" class="table-editable">
            {props.AuthProps.user.roles.includes("ROLE_FINANCEUSER")&&
              <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                    class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddArticleInput}></i></a></span>
    }
              <table class="table table-bordered table-responsive-md table-striped text-center">
              <div>
                <thead>
                  <tr>
                    <th class="text-center">article Name</th>
                    <th class="text-center">quantity </th>
                    <th class="text-center">total price</th>
                    <th class="text-center">date</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item) =>(
                  <tr>
                <td class="pt-3-half" contenteditable="true">{getName(item.articleId)} </td>
                <td class="pt-3-half" contenteditable="true">{item.quantity}</td>
                <td class="pt-3-half" contenteditable="true">{item.total_price}</td>
                <td class="pt-3-half" contenteditable="true">{moment(item.createdAt).format("DD-MM-YYYY")}</td>
                    <td>
                    {props.AuthProps.user.roles.includes("ROLE_FINANCEUSER")&&
                      <span class="table-remove">
                        <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                      props.deleteArticleInput(item.id)} 
                         >Remove</button>
                      <button type="button" class="btn btn-info btn-rounded btn-sm my-0" >edit </button>
                          </span>
}
                    </td>
                  </tr>
                ))}
                </tbody>
                </div>
              </table>
            </div>
          </div> 
        </div>
        </div>
        </div></div>

    );
}

const mapStateToProps=(state)=>({
  ArticleProps :state.ArticleState,
  AuthProps :state.AuthState,

  })
export default connect(mapStateToProps , {getArticlesInputs,deleteArticleInput, getAllArticles })(ArticleInputs);