import React, { useState,useEffect } from 'react';
import {getAllArticlesOutputs , deleteArticleOutput} from '../../../store/actions/article/AllArticleActions';
import axios from 'axios';
import {connect} from 'react-redux';
import moment from 'moment';


const ArticleOutputs = (props) => {
    const [data, setData] = useState([]);  
useEffect(() => {  
  console.log(props)
  props.getAllArticlesOutputs();
  console.log(props.ArticleProps.ArticleOutput)
  setData(props.ArticleProps.ArticleOutput)
}, []); 

const AddArticleOutput =()=>{
  props.history.push('/AddArticleOutput')  ;
}
    return (  
        <div>
        <div class="card" style={{ marginTop: "4%" , marginLeft:"24%" , width:"800px"}}>
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Article Outputs</h3>
        <div class="card-body">
            <div id="table" class="table-editable">
              <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                    class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddArticleOutput}></i></a></span>
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
                <td class="pt-3-half" contenteditable="true">mezel </td>
                <td class="pt-3-half" contenteditable="true">{item.quantity}</td>
                <td class="pt-3-half" contenteditable="true">{item.totally_price}</td>
                <td class="pt-3-half" contenteditable="true">{item.createdAt}</td>
                    <td>
                      <span class="table-remove">
                        <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                      props.deleteArticleOutput(item.id)} 
                         >Remove</button>
                      <button type="button" class="btn btn-info btn-rounded btn-sm my-0" >edit </button>
                          </span>
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
    );
}
 
const mapStateToProps=(state)=>({
  ArticleProps :state.ArticleState
  })
export default connect(mapStateToProps , {getAllArticlesOutputs,deleteArticleOutput})(ArticleOutputs);