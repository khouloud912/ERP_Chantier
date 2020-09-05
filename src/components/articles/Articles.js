import React, { Component } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from 'axios';
import {connect} from 'react-redux';
import {addCart} from '../../store/actions/addToCartAction';
import {fetchArticleDetails} from '../../store/actions/addToCartAction';
import { ADD_PRODUCT_CART } from '../../store/actions/types';

 class Articles extends Component {

    constructor(props) {
        super(props);
        console.log(props);
       // console.log(props.addCart)
        this.state = {
          AllArticles:[{}],
        }
        this.componentDidMount=this.componentDidMount.bind(this);
      }
      componentDidMount() {
        this.props.fetchArticleDetails();

        return axios.get("http://localhost:3001/Article/getAllArticles").then((response)=>{
          console.log(response.data);
          this.setState({
            AllArticles:response.data
          })
        })
      }    
    render() {
        return (
            <div class="container" style={{marginLeft:"19%",marginTop:'5%'}}>
            <div class="row">
            {this.state.AllArticles.map((Article)=>(
              <div class="col-5 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                  <img class="card-img" src={`http://localhost:3001${Article.image}` }/>
                  <div class="card-img-overlay d-flex justify-content-end">
                    <a href="#" class="card-link text-danger like">
                      <i class="fas fa-heart"></i>
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">{Article.Name}</h4>
                   <h6 class="card-subtitle mb-2 text-muted">provider : {Article.providerId}</h6>
                   
                    <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success"><h5 class="mt-4"> {Article.quantity} pieces</h5></div>
                       <a href="#" class="btn btn-danger mt-3"  onClick={this.props.addCart()}><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: () => dispatch(addCart()), 
    fetchArticleDetails:()=>dispatch(fetchArticleDetails())
  };
};

export default connect(null, mapDispatchToProps)(Articles);