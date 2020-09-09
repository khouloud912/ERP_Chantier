import React, { useState,useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';


const ArticleOutputs = (props) => {
    const [data, setData] = useState([]);  
useEffect(() => {  
  console.log("koki");
  axios.get("http://localhost:3001/ArticleOutput/getAllArticleOutput").then(response => {
    setData(response.data);
    console.log(response.data);
  })
  .catch(e => {
    console.log(e);
  });
}, []); 
const deleteArticleOutput = (id) => {  
      axios.delete(`http://localhost:3001/ArticleOutput/deleteArticleOutput/${id}`)  
        .then((result) => {  
          console.log("deleted succesffully")
        });  
    };  
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
                      deleteArticleOutput(item.id)} 
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
 
export default ArticleOutputs;