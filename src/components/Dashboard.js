import React , {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';



class Dashboard extends Component {
  constructor(props){
    super(props);
    console.log(this.props.FinanceState);
    console.log(this.props.Rhstate)
  }
    render(){ 
        return (
          <div style={{position:"fixed"}}>
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
              <li class="nav-item nav-profile">
                <div class="nav-link">
                  <div class="profile-image">
                    <img  alt="image"/>
                    <span class="online-status online"></span> 
                  </div>
                  <div class="profile-name">
                    <p class="name">
                      Marina Michel
                    </p>
                    <p class="designation">
                      Super Admin
                    </p>
                  </div>
                </div>
              </li>
              {this.props.Rhstate===true && ( this.props.AuthProps.user.roles.includes("ROLE_RHUSER")  ||(this.props.AuthProps.user.roles.includes("ROLE_ADMIN"))) &&
              <div>
              <li class="nav-item">
                <Link class="nav-link" to="/employee">
                  <i class="icon-rocket menu-icon"></i>
                  <span class="menu-title">Employees</span>
                  <span class="badge badge-success">New</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/departement">
                  <i class="icon-shield menu-icon"></i>
                  <span class="menu-title">departments</span>
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/abscence">
                  <i class="icon-check menu-icon"></i>
                  <span class="menu-title">Abscence</span>
                  <span class="badge badge-danger">3</span>
                </Link>
                <div class="collapse" id="page-layouts">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item d-none d-lg-block"> <a class="nav-link" href="pages/layout/boxed-layout.html">Boxed</a></li>
                    <li class="nav-item"> <a class="nav-link" href="pages/layout/rtl-layout.html">RTL</a></li>
                    <li class="nav-item d-none d-lg-block"> <a class="nav-link" href="pages/layout/horizontal-menu.html">Horizontal Menu</a></li>
                  </ul>
                </div>
              </li>
              </div>
               }
              {this.props.FinanceState=== true && (this.props.FinanceState=== true && this.props.AuthProps.user.roles.includes("ROLE_FINANCEUSER") || (this.props.AuthProps.user.roles.includes("ROLE_ADMIN") )) &&
              <div>
              <li class="nav-item">
                <Link class="nav-link" to="/Articles">
                  <i class="icon-shield menu-icon"></i>
                  <span class="menu-title">Article</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ArticleInput">
                  <i class="icon-shield menu-icon"></i>
                  <span class="menu-title">Article Input</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ArticleOutput">
                  <i class="icon-shield menu-icon"></i>
                  <span class="menu-title">Article Output</span>
                </Link>
              </li>
               <li class="nav-item">
               <Link class="nav-link" to="/categories">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Category</span>
               </Link>
             </li>

            <li class="nav-item">
               <Link class="nav-link" to="/providers">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Providers</span>
               </Link>
             </li> 
             <li class="nav-item">
               <Link class="nav-link" to="/Commande">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Commandes</span>
               </Link>
             </li> 
             <li class="nav-item">
               <Link class="nav-link" to ="/CommandeLigne">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Commande lignes</span>
               </Link>
             </li> 
             <li class="nav-item">
               <a class="nav-link" href="/">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Statistics</span>
               </a>
             </li> 

             </div>
                  }

{this.props.ManagementState=== true  && (this.props.AuthProps.user.roles.includes("ROLE_ADMIN")) &&
            <div>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  <i class="icon-shield menu-icon"></i>
                  <span class="menu-title">Users</span>
                </Link>
              </li>
             </div>         
}
              </ul>
          </nav>
          </div>
        )
    }
}


const mapStateToProps=(state)=>({
 AuthProps :state.AuthState,

  })
export default connect(mapStateToProps)(Dashboard)

