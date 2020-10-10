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
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item nav-profile">
                <div className="nav-link">
                  <div className="profile-image">
                    <img  alt="image"/>
                    <span className="online-status online"></span> 
                  </div>
                  <div className="profile-name">
                    <p className="name">
                      Marina Michel
                    </p>
                    <p className="designation">
                      Super Admin
                    </p>
                  </div>
                </div>
              </li>
              {this.props.Rhstate===true && ( this.props.AuthProps.user.roles.includes("ROLE_RHUSER")  ||(this.props.AuthProps.user.roles.includes("ROLE_ADMIN"))) &&
              <div>
              <li className="nav-item">
                <Link className="nav-link" to="/employee">
                  <i className="icon-rocket menu-icon"></i>
                  <span className="menu-title">Employees</span>
                  <span className="badge badge-success">New</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/departement">
                  <i className="icon-shield menu-icon"></i>
                  <span className="menu-title">departments</span>
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/abscence">
                  <i className="icon-check menu-icon"></i>
                  <span className="menu-title">Abscence</span>
                  <span className="badge badge-danger">3</span>
                </Link>
                <div className="collapse" id="page-layouts">
                  <ul className="nav flex-column sub-menu">
                    <li className="nav-item d-none d-lg-block"> <a className="nav-link" href="pages/layout/boxed-layout.html">Boxed</a></li>
                    <li className="nav-item"> <a className="nav-link" href="pages/layout/rtl-layout.html">RTL</a></li>
                    <li className="nav-item d-none d-lg-block"> <a className="nav-link" href="pages/layout/horizontal-menu.html">Horizontal Menu</a></li>
                  </ul>
                </div>
              </li>
              </div>
               }
              {this.props.FinanceState=== true && (this.props.FinanceState=== true && this.props.AuthProps.user.roles.includes("ROLE_FINANCEUSER") || (this.props.AuthProps.user.roles.includes("ROLE_ADMIN") )) &&
              <div>
              <li className="nav-item">
                <Link className="nav-link" to="/Articles">
                  <i className="icon-shield menu-icon"></i>
                  <span className="menu-title">Article</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ArticleInput">
                  <i className="icon-shield menu-icon"></i>
                  <span className="menu-title">Article Input</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ArticleOutput">
                  <i className="icon-shield menu-icon"></i>
                  <span className="menu-title">Article Output</span>
                </Link>
              </li>
               <li className="nav-item">
               <Link className="nav-link" to="/categories">
                 <i className="icon-rocket menu-icon"></i>
                 <span className="menu-title">Category</span>
               </Link>
             </li>

            <li className="nav-item">
               <Link className="nav-link" to="/providers">
                 <i className="icon-rocket menu-icon"></i>
                 <span className="menu-title">Providers</span>
               </Link>
             </li> 
             <li className="nav-item">
               <Link className="nav-link" to="/Commande">
                 <i className="icon-rocket menu-icon"></i>
                 <span className="menu-title">Commandes</span>
               </Link>
             </li> 
             <li className="nav-item">
               <Link className="nav-link" to ="/CommandeLigne">
                 <i className="icon-rocket menu-icon"></i>
                 <span className="menu-title">Commande lignes</span>
               </Link>
             </li> 
             <li className="nav-item">
               <a className="nav-link" href="/">
                 <i className="icon-rocket menu-icon"></i>
                 <span className="menu-title">Statistics</span>
               </a>
             </li> 

             </div>
                  }

{this.props.ManagementState=== true  && (this.props.AuthProps.user.roles.includes("ROLE_ADMIN")) &&
            <div>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="icon-shield menu-icon"></i>
                  <span className="menu-title">Users</span>
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

