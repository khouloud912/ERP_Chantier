import React, { useState,useEffect } from 'react';
import AddCategorie from './AddCategory';
import {getCategories,deleteCategory} from '../../store/actions/category/categoryAction';
import {connect} from 'react-redux';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";


const Categories = (props) => {
    const [data, setData] = useState([]); 
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
      console.log(event.target.value)
      setSearchTerm(event.target.value);
    }; 
useEffect(() => {  
  props.getCategories();
  console.log(props.categoryProps.categories);
  setData(props.categoryProps.categories)
  console.log(searchTerm)
  if( searchTerm !== ""){
  const results = data.filter(person =>
    (person.Name_categorie?person.Name_categorie:'').toLowerCase().includes(searchTerm) 
   
  ); 
  console.log("results",results)
  setSearchResults(results);
  }else{
    setSearchResults(props.categoryProps.categories);
  }
}, [searchTerm]); 
const AddCategory =()=>{
  props.history.push('/AddCategory');
}
    return (  
      <div className="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white" ,marginTop: "4%" , marginLeft:"24%" }}> 
        
        <div class="card" style={{  width:"800px"}}>
          <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Categories</h3>
        <div class="card-body">
            <div id="table" class="table-editable">
              <span class="table-add float-right mb-3 mr-2">
              <MDBCol>
                <MDBFormInline className="md-form mr-auto mb-4">
                 <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
                  value={searchTerm}
                  onChange={handleChange}
                 />
               {props.AuthProps.user.user.roles.includes("ROLE_FINANCEUSER")&&
                <a href="#!" class="text-success"><i class="fas fa-plus fa-2x" aria-hidden="true" onClick={AddCategory}></i></a>
                 }
                 </MDBFormInline>
                </MDBCol>   
               </span>
              <table class="table table-bordered table-responsive-md table-striped text-center">
              <div>
                <thead>
                  <tr>
                    <th class="text-center">category Name</th>
                    <th class="text-center">description </th>
                  </tr>
                </thead>
                <tbody>
                {searchResults.map((item) =>(
                  <tr>
                <td class="pt-3-half" contenteditable="true">{item.Name_categorie}</td>
                <td class="pt-3-half" contenteditable="true">{item.description}</td>
                    <td>
                    {props.AuthProps.user.user.roles.includes("ROLE_FINANCEUSER")&&
                      <span class="table-remove">
                        <button type="button"  class="btn btn-danger btn-rounded btn-sm my-0"  onClick={(e) =>window.confirm("Are you sure you wish to delete this item?") &&
                          props.deleteCategory(item.id) } 
                         >Remove</button>
                      <button type="button" class="btn btn-info btn-rounded btn-sm my-0" >edit</button>
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
  categoryProps :state.CategoryState,
  AuthProps :state.AuthState,

  })
  
  export default connect(mapStateToProps, {getCategories,deleteCategory})(Categories)