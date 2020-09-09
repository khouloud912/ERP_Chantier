import React, { useState,useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';


const AddArticleOutput  = () => {
    const [ArticleOutputs, setArticleOutputs] = useState({ articleId: '', quantity: '',  totally_price:''});  
    const apiUrl = "http://localhost:3001/ArticleOutput/addArticleOutput";  
    const[articles,setArticle]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/Article/getAllArticles").then(response => {
            setArticle(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });        
    }, [])
    
    const onChange = (e) => {  
        setArticleOutputs({ ...ArticleOutputs, [e.target.name]: e.target.value });
          } 
    
    const InsertArticleOutputs = (e) => {  
                e.preventDefault();  
                console.log(e)
                const data = {  quantity: ArticleOutputs.quantity ,totally_price:ArticleOutputs.totally_price,  };  
                console.log(data)
                axios.post(apiUrl, data).then((result) => {  
                    console.log(result.data);            
                  });  
              };  
    return ( 
        <div style={{ marginTop: "4%" , marginLeft:"24%" }}>
        <MDBContainer>
        <MDBRow>
            <MDBCol md="8">
            <form  onSubmit={InsertArticleOutputs}>
                <p className="h4 text-center mb-4">Add ArticleOutputs</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                    Article Name
                </label> 
                <select   
                 onChange={onChange}
                    className="browser-default custom-select">
                    {articles.map((item)=>(
                    <option  value={item.id}>{item.Name}</option>
                    ))}
                </select>
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                  quantity
                </label>
                <input type="text" name="quantity" className="form-control" value={ArticleOutputs.quantity} onChange={onChange} />
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                 total Price
                </label>
                <input type="text" name="totally_price" className="form-control" value={ArticleOutputs.totally_price} onChange={onChange} />
                <br/>
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
export default AddArticleOutput;