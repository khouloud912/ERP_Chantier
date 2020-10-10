import React, { useState,useEffect } from 'react';
import {getAllArticles,deleteArticle} from '../../store/actions/article/AllArticleActions';
import {getProviders} from '../../store/actions/provider/providerActions';
import {getCategories} from '../../store/actions/category/categoryAction';
import Select from "react-select";

import {connect, connectAdvanced} from 'react-redux';
import {addCart} from '../../store/actions/AllActions.';

const Articles = (props) => {
  const [data, setData] = useState([]);
  const [finalData, setfinalData] =useState([]);
  const [filteredData, setFilteredData] = useState([]); 
  const [filterOption, setFilterOption] = useState("");


  useEffect(() => {     
    props.getAllArticles();
    console.log(props.ArticleProps.AllArticles)
    setData(props.ArticleProps.AllArticles)
    setfinalData(props.ArticleProps.AllArticles);
    props.getProviders();
    props.getCategories();
      }, []); 
  
  const optionSelected=(e)=>{
    setFilterOption(e.target.value)
    if(e.target.value === "Providers") {
        setFilteredData(props.providerProps.providers.map( option => ({ value: option.id, label: option.Name })));
        console.log("providers") ;
     }
     else{
       console.log("categories")
       setFilteredData(props.categoryProps.categories.map( option => ({ value: option.id, label: option.Name_categorie })))    
     }
  }
 
 const renderFilterOptions=(value)=>{
   if(filterOption=== "Providers"){
     console.log(value)
     let filtered = data.filter(element => element.providerId == value);
     if (filtered === null ){
      setfinalData(data);
     }
     else{
       setfinalData(filtered)
     }
   }else{
    let filtered = data.filter(element => element.categorieId == value);
     if (filtered === null ){
      setfinalData(data);
     }
     else{
       setfinalData(filtered)
     }
   }
}
const AddArticle=()=>{
  props.history.push('/AddArticle');
}
  return ( 
    
    <div className="container-fluid page-body-wrapper">
    <div class="row row-offcanvas row-offcanvas-right">
    <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "5%" , marginLeft:"20%" }}>
    <div class="container" >
       <div class="row" style={{marginLeft:"50%"}}>
         < div class="col ">  
          <select className="browser-default custom-select" onChange={optionSelected}>
          <option value="">Choose your option</option>
          <option value="Providers"> Providers</option>
          <option value="Category">Category</option>
        </select>
        </div>
        < div class="col ">  
          <Select
            styles={{width:'500px'}}
            name="articleId"
            //value={ArticleOutputs.articleId}
            options={filteredData}
            onChange={e =>{
              console.log(e)
              renderFilterOptions(e.value)
            }}
            />
            </ div>
            {props.AuthProps.user.roles.includes("ROLE_FINANCEUSER")&&

             <span class="table-add float-right mb-3 mr-2">
                 <a href="#!" class="text-success"><i
                class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddArticle} ></i></a>
          </span>
}
          </div>
            <div class="row">
            {finalData.map((Article) => (
            <div class="col-5 col-sm-8 col-md-6 col-lg-4">
              <div class="card" >
                <img
                  class="card-img" 
                  src={`${"http://localhost:3001"}/${Article.image}`}
              />
                <div class="card-body">
                  <div class="d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <h4 class="card-title">{Article.Name}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">
                    provider : {Article.providerId}
                  </h6>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Qty : {Article.Actual_quantity} || Min QTY :{Article.minimum_quantity}
                  </h6>
                  
                  <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                      <h5 class="mt-4"> {Article.price} $</h5>
                    </div>
                    <a
                      class="btn btn-danger mt-3"
                      onClick={() => {
                        console.log("test");
                        props.addCart(Article.id, data);
                     //   this.props.fetchArticleDetails()
                      }}
                    >
                      <i class="fas fa-shopping-cart"></i> Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>  </div>
          </div>  </div>
          

   );
}
const mapStateToProps=(state)=>({
  ArticleProps :state.ArticleState,
  providerProps :state.providerState,
  categoryProps :state.CategoryState,
  AuthProps :state.AuthState,




  })
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (id, Articles) => dispatch(addCart(id,Articles)), 
    getAllArticles:()=>dispatch (getAllArticles()),
    deleteArticle:()=> dispatch (deleteArticle()),
    getProviders:()=>dispatch(getProviders()),
    getCategories:()=>dispatch(getCategories())

 //   fetchArticleDetails:()=>dispatch(fetchArticleDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
