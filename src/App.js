import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Employee from './components/employees/Employee';
import Departement from './components/departments/Department';
import Abscence from './components/abscences/abscence';
import AddEmployee from './components/employees/AddEmployee';
import modifyEmployee from './components/employees/modifyEmployee';
import detailsEmployee from './components/employees/detailsEmployee';
import AddDepartement from './components/departments/AddDepartement';
import AddAbscence from './components/abscences/addAbscence';
import EditDepartment from './components/departments/editDepartment';
import EditAbscence from './components/abscences/editAbscence';
import AddArticle from './components/articles/AddArticle';
import Articles from './components/articles/Articles';
import commandes from './components/commande/commande';
import AddCategorie from './components/category/AddCategory';
import AddProvider from './components/provider/AddProvider';
import AddArticleInput from './components/articles/ArticleInput/AddArticleInput';
import AddArticleOutput from './components/articles/ArticleOutput/AddArticleOutput';
import ArticleInput from './components/articles/ArticleInput/ArticleInputs';
import ArticleOutput from './components/articles/ArticleOutput/ArticleOutputs';
import categories from './components/category/categories';
import providers from './components/provider/providers';

import {Provider} from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div class="App">
      <Navbar />
      <div class="container-fluid page-body-wrapper">
      <div class="row row-offcanvas row-offcanvas-right">
      <div class="content-wrapper" style={{backgroundColor: "white"}}>
        <Route path='/employee' component={Employee}/>
        <Route path='/departement' component={Departement}/>
        <Route path='/abscence' component={Abscence}/>  
        <Route path='/addEmployee' component={AddEmployee}/>
        <Route path='/modifyEmployee/:id' component={modifyEmployee}/>
        <Route path='/detailsEmployee/:id' component={detailsEmployee}/>    
        <Route path='/addDepartment' component={AddDepartement}/>     
        <Route path='/addAbscence' component={AddAbscence}/>      
        <Route path='/editDepartment/:id' component={EditDepartment}/>  
        <Route path='/editAbscence/:id' component={EditAbscence}/>  
        <Route path='/AddArticle' component={AddArticle}/> 
        <Route path='/Articles' component={Articles}/> 
        <Route path='/commande' component={commandes}/> 
        <Route path='/AddCategory' component={AddCategorie}/> 
        <Route path='/AddProvider' component={AddProvider}/> 
        <Route path='/AddArticleInput' component={AddArticleInput}/> 
        <Route path='/AddArticleOutput' component={AddArticleOutput}/> 
        <Route path='/ArticleOutput' component={ArticleOutput}/> 
        <Route path='/ArticleInput' component={ArticleInput}/> 
        <Route path='/categories' component={categories}/> 
        <Route path='/providers' component={providers}/> 
</div>
</div></div>
    </div>
    </Router>
    </Provider>
  );
}
export default App;
