import React, { useState,useEffect } from 'react';
import {getAllArticlesOutputs , deleteArticleOutput ,getAllArticles} from '../../../store/actions/article/AllArticleActions';
import axios from 'axios';
import {connect} from 'react-redux';
import moment from 'moment';


const ArticleOutputs = (props) => {
    const [data, setData] = useState([]); 
    const [article, setArticle] = useState([]);  
 
useEffect(() => {  
  console.log(props)
  props.getAllArticlesOutputs();
  console.log(props.ArticleProps.ArticleOutput)
  setData(props.ArticleProps.ArticleOutput)

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

const AddArticleOutput =()=>{
  props.history.push('/AddArticleOutput')  ;
}
    return (  
        
      <div className="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"24%" }}>
        <div class="card" style={{  width:"800px"}}>
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Article Outputs</h3>
        <div class="card-body">
            <div id="table" class="table-editable">
            {props.AuthProps.user.user.roles.includes("ROLE_FINANCEUSER")&&

              <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                    class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddArticleOutput}></i></a></span>
    }
              <table class="table table-bordered table-responsive-md table-striped text-center">
              <div>
                <thead>
                  <tr>
                    <th class="text-center">article Name</th>
                    <th class="text-center">quantity </th>
                    <th class="text-center">totall price</th>
                    <th class="text-center">date</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item) =>(
                  <tr>
                <td class="pt-3-half" contenteditable="true">{getName(item.articleId)}  </td>
                <td class="pt-3-half" contenteditable="true">{item.quantity}</td>
                <td class="pt-3-half" contenteditable="true">{item.totally_price}</td>
                <td class="pt-3-half" contenteditable="true"> {moment(item.createdAt).format("DD-MM-YYYY")}</td>
                    <td>
                    {props.AuthProps.user.user.roles.includes("ROLE_FINANCEUSER")&&

                      <span class="table-remove">
                        <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                      props.deleteArticleOutput(item.id)} 
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
        </div></div></div>
    );
}
 
const mapStateToProps=(state)=>({
  ArticleProps :state.ArticleState,
  AuthProps :state.AuthState,

  })
export default connect(mapStateToProps , {getAllArticlesOutputs,deleteArticleOutput,getAllArticles})(ArticleOutputs);