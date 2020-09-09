import React, { useState,useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios'


const AddCategorie  = () => {
    const [categories, setCategory] = useState({ Name_categorie: '', description: '' });  
    const apiUrl = "http://localhost:3001/categorie/addCategorie";  

    const onChange = (e) => {  
        setCategory({ ...categories, [e.target.name]: e.target.value });
          } 
    const InsertCategory = (e) => {  
                console.log("koki");
                e.preventDefault();  
                console.log(e)
                const data = { Name_categorie:categories.Name_categorie, description: categories.description };  
                axios.post(apiUrl, data)  .then((result) => {  
                    console.log(result.data);            
                  });  
    
              };  
    return ( 
        <div style={{ marginTop: "4%" , marginLeft:"24%" }}>
        <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={InsertCategory}>
                <p className="h4 text-center mb-4">Add Category</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Category Name
                </label> 
                <input type="text" name="Name_categorie"  className="form-control" value={categories.Name_categorie} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Description
                </label>
                <input type="text" name="description" className="form-control" value={categories.description} onChange={onChange} />
                <br />
                <div className="text-center mt-4">
                <input  type="submit" />
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>       
</div>
     );
}
 
export default AddCategorie;