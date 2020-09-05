import React , {Component} from 'react';

class Dashboard extends Component {
  constructor(props){
    super(props);
  }
    render(){ 
        return (
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
              <li class="nav-item nav-profile">
                <div class="nav-link">
                  <div class="profile-image">
                    <img src="images/faces/face10.jpg" alt="image"/>
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
              {this.props.Rhstate?
              <div>
              <li class="nav-item">
                <a class="nav-link" href="/employee">
                  <i class="icon-rocket menu-icon"></i>
                  <span class="menu-title">Employees</span>
                  <span class="badge badge-success">New</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/departement">
                  <i class="icon-shield menu-icon"></i>
                  <span class="menu-title">departments</span>
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/abscence">
                  <i class="icon-check menu-icon"></i>
                  <span class="menu-title">Abscence</span>
                  <span class="badge badge-danger">3</span>
                </a>
                <div class="collapse" id="page-layouts">
                  <ul class="nav flex-column sub-menu">
                    <li class="nav-item d-none d-lg-block"> <a class="nav-link" href="pages/layout/boxed-layout.html">Boxed</a></li>
                    <li class="nav-item"> <a class="nav-link" href="pages/layout/rtl-layout.html">RTL</a></li>
                    <li class="nav-item d-none d-lg-block"> <a class="nav-link" href="pages/layout/horizontal-menu.html">Horizontal Menu</a></li>
                  </ul>
                </div>
              </li>
              </div>:null
               }
              {this.props.FinanceState?
              <div>
              <li class="nav-item">
                <a class="nav-link" href="/AddArticle">
                  <i class="icon-shield menu-icon"></i>
                  <span class="menu-title">Article</span>
                </a>
              </li>
               <li class="nav-item">
               <a class="nav-link" href="/">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Category</span>
               </a>
             </li>
              <li class="nav-item">
              <a class="nav-link" href="/">
                <i class="icon-rocket menu-icon"></i>
                <span class="menu-title">marque</span>
              </a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="/">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Providers</span>
               </a>
             </li> 
             <li class="nav-item">
               <a class="nav-link" href="/">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Commandes</span>
               </a>
             </li> 
             <li class="nav-item">
               <a class="nav-link" href="/">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Commande lignes</span>
               </a>
             </li> 
             <li class="nav-item">
               <a class="nav-link" href="/">
                 <i class="icon-rocket menu-icon"></i>
                 <span class="menu-title">Statistics</span>
               </a>
             </li> 
             </div>
              :null
                  }
              </ul>
          </nav>
        )
    }
}
export default Dashboard;