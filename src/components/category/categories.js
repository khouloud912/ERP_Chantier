import React, { useState,useEffect } from 'react';
import AddCategorie from './AddCategory';
import {getCategories,deleteCategory} from '../../store/actions/category/categoryAction';
import {connect} from 'react-redux';


const Categories = (props) => {
    const [data, setData] = useState([]);  
useEffect(() => {  
  props.getCategories();
  console.log(props.categoryProps.categories);
  setData(props.categoryProps.categories)

}, []); 

const AddCategory =()=>{
  props.history.push('/AddCategory')  ;
}
    return (  
        <div>
        <div class="card" style={{ marginTop: "4%" , marginLeft:"24%" , width:"800px"}}>
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Categories</h3>
        <div class="card-body">
            <div id="table" class="table-editable">
              <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i
                    class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddCategory}></i></a></span>
              <table class="table table-bordered table-responsive-md table-striped text-center">
              <div>
                <thead>
                  <tr>
                    <th class="text-center">category Name</th>
                    <th class="text-center">description </th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item) =>(
                  <tr>
                <td class="pt-3-half" contenteditable="true">{item.Name_categorie}</td>
                <td class="pt-3-half" contenteditable="true">{item.description}</td>
                    <td>
                      <span class="table-remove">
                        <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                          props.deleteCategory(item.id) } 
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
  categoryProps :state.CategoryState
  })
  
  export default connect(mapStateToProps, {getCategories,deleteCategory})(Categories)