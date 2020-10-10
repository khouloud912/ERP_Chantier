import React from 'react';
import Navbar from './components/Navbar';

import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect
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
import Commande from './components/commande/commande';
import AddCategorie from './components/category/AddCategory';
import AddProvider from './components/provider/AddProvider';
import AddArticleInput from './components/articles/ArticleInput/AddArticleInput';
import AddArticleOutput from './components/articles/ArticleOutput/AddArticleOutput';
import ArticleInput from './components/articles/ArticleInput/ArticleInputs';
import ArticleOutput from './components/articles/ArticleOutput/ArticleOutputs';
import categories from './components/category/categories';
import providers from './components/provider/providers';
import CommandeLigne from './components/commande/commandeLigne';
import Reception from './components/Reception/AddReception';
import Register from './components/authentification/Register';
import Activation from './components/authentification/Activation';
import login from './components/authentification/login';
import ForgetPassword from './components/authentification/forgotPassword';
import ResetPassword from './components/authentification/resetPassword';
import UserManagement from './components/admin/userManagement';



const App = (props) => {
  console.log(props.AuthProps);
  const isLoggedIn = props.AuthProps.isLoggedIn;
  console.log(isLoggedIn)

  const  ProtectedRoute= ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (isLoggedIn ? (<>
         <Navbar {...props}/><Component {...props}/>  
         </>)
        :(<Redirect to={{pathname: '/login', state: {from: props.location}}} />)
    )}/>
      }

  return ( 
    <Router>
    <div class="App" >
    <Route exact path='/register' component={Register}/>
    <Route exact path='/login' component={login}/>

     <Route exact path='/users/password/forget' component={ForgetPassword}/>
     <Route exact path='/users/password/reset/:token' component={ResetPassword}/>
    <Route exact path='/users/activate/:token' component={Activation}/>


    {isLoggedIn && (props.AuthProps.user.roles.includes("ROLE_RHUSER") || (props.AuthProps.user.roles.includes("ROLE_ADMIN")))&&
    <div>
        <ProtectedRoute path='/employee' component={Employee}/>
        <ProtectedRoute path='/abscence' component={Abscence}/> 
        <ProtectedRoute path='/departement' component={Departement}/>
    </div>
    }

{ isLoggedIn && (props.AuthProps.user.roles.includes("ROLE_RHUSER"))&& 
<div>
        <ProtectedRoute path='/addEmployee' component={AddEmployee}/>
        <ProtectedRoute path='/modifyEmployee/:id' component={modifyEmployee}/>
        <ProtectedRoute path='/detailsEmployee/:id' component={detailsEmployee}/>    
        <ProtectedRoute path='/addDepartment' component={AddDepartement}/>     
        <ProtectedRoute path='/addAbscence' component={AddAbscence}/>      
        <ProtectedRoute path='/editDepartment/:id' component={EditDepartment}/>  
        <ProtectedRoute path='/editAbscence/:id' component={EditAbscence}/>  
        </div>
  }
  
  {isLoggedIn && (props.AuthProps.user.roles.includes("ROLE_FINANCEUSER")|| props.AuthProps.user.roles.includes("ROLE_ADMIN"))&& 
    <div>
        <ProtectedRoute path='/Articles' component={Articles}/> 
        <ProtectedRoute path='/Commande' component={Commande}/> 
        <ProtectedRoute path='/CommandeLigne' component={CommandeLigne}/> 
        <ProtectedRoute path='/ArticleInput' component={ArticleInput}/> 
        <ProtectedRoute path='/ArticleOutput' component={ArticleOutput}/> 
        <ProtectedRoute path='/categories' component={categories}/> 
        <ProtectedRoute path='/providers' component={providers}/> 
        </div>
}
{isLoggedIn &&  props.AuthProps.user.roles.includes("ROLE_FINANCEUSER") && 
    <div>
        <ProtectedRoute  path='/AddArticle' component={AddArticle}/> 
        <ProtectedRoute path='/AddCategory' component={AddCategorie}/> 
        <ProtectedRoute path='/AddProvider' component={AddProvider}/> 
        <ProtectedRoute path='/AddArticleInput' component={AddArticleInput}/> 
        <ProtectedRoute path='/AddArticleOutput' component={AddArticleOutput}/> 
        <ProtectedRoute path='/AddReception' component={Reception}/> 
</div>
}
{isLoggedIn && props.AuthProps.user.roles.includes("ROLE_FINANCEUSER") && 
<div>
<ProtectedRoute exact path='/userManagment' component={UserManagement}/>
</div>
}
</div>
    </Router>
   );
}
 
const mapStateToProps=(state)=>({
  AuthProps :state.AuthState,
  })

export default connect(mapStateToProps)(App);









/*
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
import Commande from './components/commande/commande';
import AddCategorie from './components/category/AddCategory';
import AddProvider from './components/provider/AddProvider';
import AddArticleInput from './components/articles/ArticleInput/AddArticleInput';
import AddArticleOutput from './components/articles/ArticleOutput/AddArticleOutput';
import ArticleInput from './components/articles/ArticleInput/ArticleInputs';
import ArticleOutput from './components/articles/ArticleOutput/ArticleOutputs';
import categories from './components/category/categories';
import providers from './components/provider/providers';
import CommandeLigne from './components/commande/commandeLigne';
import Reception from './components/Reception/AddReception';
import Register from './components/authentification/Register';
import Activation from './components/authentification/Activation';
import login from './components/authentification/login';
import ForgetPassword from './components/authentification/forgotPassword';
import ResetPassword from './components/authentification/resetPassword';



function App() {
  
  return (
    <Router>
    <div class="App" >
     <Route exact path='/register' component={Register}/>
     <Route exact path='/login' component={login}/>
     <Route exact path='/users/password/forget' component={ForgetPassword}/>
     <Route exact path='/users/password/reset/:token' component={ResetPassword}/>
    <Route exact path='/users/activate/:token' component={Activation}/>
    
    </div>
    </Router>
  );
}
export default App;
*/