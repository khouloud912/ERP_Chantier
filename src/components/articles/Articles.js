import React, { useState,useEffect } from 'react';
import {getAllArticles,deleteArticle} from '../../store/actions/article/AllArticleActions';
import {connect, connectAdvanced} from 'react-redux';
import {addCart} from '../../store/actions/AllActions.';

const Articles = (props) => {
  const [data, setData] = useState([]);  
  useEffect(() => {     
    props.getAllArticles();
    console.log(props.ArticleProps.AllArticles)
    setData(props.ArticleProps.AllArticles)
  }, []); 

  return ( 
    <div class="container" style={{marginLeft:"19%",marginTop:'5%'}}>
            <div class="row">
            {data.map((Article) => (
            <div class="col-5 col-sm-8 col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img"
                  src={`http://localhost:3001${Article.image}`}/>
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
          </div>

   );
}
const mapStateToProps=(state)=>({
  ArticleProps :state.ArticleState,
  })

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (id, Articles) => dispatch(addCart(id,Articles)), 
    getAllArticles:()=>dispatch (getAllArticles() ),
     deleteArticle:()=> dispatch (deleteArticle()),

 //   fetchArticleDetails:()=>dispatch(fetchArticleDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
