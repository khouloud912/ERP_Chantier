import React, { useState,useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';


const AddProvider  = () => {
    const [providers, setProvider] = useState({ Name: '', adress: '', postal_code:'',city:'',country:'',phone:'',email:'' });  
    const apiUrl = "http://localhost:3001/Provider/addProvider";  

    const onChange = (e) => {  
        setProvider({ ...providers, [e.target.name]: e.target.value });
          } 
    const InsertProvider = (e) => {  
                console.log("koki");
                e.preventDefault();  
                console.log(e)
                const data = { Name:providers.Name, adress: providers.adress , postal_code:providers.postal_code,city:providers.city,country:providers.country,phone:providers.phone,email:providers.email };  
                axios.post(apiUrl, data)  .then((result) => {  
                    console.log(result.data);            
                  });  
              };  
    return ( 
        <div style={{ marginTop: "4%" , marginLeft:"24%" }}>
        <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={InsertProvider}>
                <p className="h4 text-center mb-4">Add provider</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Provider Name
                </label> 
                <input type="text" name="Name"  className="form-control" value={providers.Name} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    Adress
                </label>
                <input type="text" name="adress" className="form-control" value={providers.adress} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                   Postal Code
                </label>
                <input type="text" name="postal_code" className="form-control" value={providers.postal_code} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    City
                </label>
                <input type="text" name="city" className="form-control" value={providers.city} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    country
                </label>
                <input type="text" name="country" className="form-control" value={providers.country} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    phone
                </label>
                <input type="text" name="phone" className="form-control" value={providers.phone} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                    email
                </label>
                <input type="text" name="email" className="form-control" value={providers.email} onChange={onChange} />
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
export default AddProvider;