import React , {useState , useEffect} from 'react';
import Employee from './employees/Employee';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import {changeState} from '.././store/actions/navbar/navbarAction';
import {logout} from '.././store/actions/authentification/authentificationAction';
import {Link} from "react-router-dom"


const Navbar = (props) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    
    props.cartProps.cart.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  }, []);

 const onChangeState=(value1,value2,value3)=>{  
   console.log("dkhalna")
  props.changeState(value1,value2,value3);
 }
 const GoLogout=()=>{
   console.log("koki")
   props.logout();
   props.history.push('/login')
 }

 const GoToCart=()=>{
    this.props.history.push('/Commande');
  }
  // console.log('Navbar');
  return ( 
    console.log("this is props",props),
    <div className="container-scroller">
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
      <a className="navbar-brand brand-logo"><img src="./asset/images/logo.svg" alt="logo"/></a>
      <a className="navbar-brand brand-logo-mini" ><img src="./asset/images/logo-mini.svg" alt="logo"/></a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-center">
      <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
        <span className="icon-menu"></span>
      </button>

      <ul className="navbar-nav">
      {(props.AuthProps.user.roles.includes("ROLE_RHUSER") || props.AuthProps.user.roles.includes("ROLE_ADMIN") )&&
        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangeState(true,false,false)}>
            <span className="btn">Gestion RH</span>
          </a>
        </li>
}
 {(props.AuthProps.user.roles.includes("ROLE_FINANCEUSER") || props.AuthProps.user.roles.includes("ROLE_ADMIN"))&&
        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangeState(false,true,false)}>
            <span className="btn">Module finance</span>
          </a>
        </li>
}
{(props.AuthProps.user.roles.includes("ROLE_ADMIN"))&&
        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangeState(false,false,true)}>
            <span className="btn">Manage Users</span>
          </a>
        </li>
}
        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangeState(false,false,false)}>
            <span className="btn">Gestion projet</span>
          </a>
        </li>

      </ul>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
            <i className="icon-bell mx-0"></i>
            <span className="count"></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <a className="dropdown-item">
              <p className="mb-0 font-weight-normal float-left">You have 4 new notifications
              </p>
              <span className="badge badge-pill badge-warning float-right">View all</span>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-success">
                  <i className="icon-info mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-medium">Application Error</h6>
                <p className="font-weight-light small-text">
                  Just now
                </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-warning">
                  <i className="icon-speech mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-medium">Settings</h6>
                <p className="font-weight-light small-text">
                  Private message
                </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-info">
                  <i className="icon-envelope mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-medium">New user registration</h6>
                <p className="font-weight-light small-text">
                  2 days ago
                </p>
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <i className="icon-envelope mx-0"></i>
            <span className="count"></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
            <div className="dropdown-item">
              <p className="mb-0 font-weight-normal float-left">You have 7 unread mails
              </p>
              <span className="badge badge-info badge-pill float-right">View all</span>
            </div>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <img src="/asset/images/faces/face4.jpg" alt="image" className="profile-pic"></img>
              </div>
              <div className="preview-item-content flex-grow">
                <h6 className="preview-subject ellipsis font-weight-medium">David Grey
                  <span className="float-right font-weight-light small-text">1 Minutes ago</span>
                </h6>
                <p className="font-weight-light small-text">
                  The meeting is cancelled
                </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <img src="images/faces/face2.jpg" alt="image" className="profile-pic"></img>
              </div>
              <div className="preview-item-content flex-grow">
                <h6 className="preview-subject ellipsis font-weight-medium">Tim Cook
                  <span className="float-right font-weight-light small-text">15 Minutes ago</span>
                </h6>
                <p className="font-weight-light small-text">
                  New product launch
                </p>
              </div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                  <img src="images/faces/face3.jpg" alt="image" className="profile-pic"></img>
              </div>
              <div className="preview-item-content flex-grow">
                <h6 className="preview-subject ellipsis font-weight-medium"> Johnson
                  <span className="float-right font-weight-light small-text">18 Minutes ago</span>
                </h6>
                <p className="font-weight-light small-text">
                  Upcoming board meeting
                </p>
              </div>
            </a>
          </div>
        </li>
        
        {props.AuthProps.user.roles.includes("ROLE_FINANCEUSER") &&
        <li>
        <Link data-toggle="tooltip" data-placement="top" title="Add to Cart" to='/Commande' ><i className="fas fa-shopping-cart mr-3"></i></Link>
         <span className="badge badge-danger">{cartCount}</span>
        </li>
      }
      <li>
        <button type="button" class="btn btn-primary btn-sm" onClick={()=>GoLogout()}>logout</button>
      </li>
        
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="icon-menu"> </span>
      </button>
    </div>
  </nav>
  <Dashboard/>
  </div>
   );
}




const mapDispatchToProps=dispatch=>{
  return{
    changeState:(v1,v2,v3)=>dispatch(changeState(v1,v2,v3)), 
    logout:()=>dispatch(logout())
  } 
}

const mapStateToProps=state=>({
cartProps :state.cartState,
AuthProps :state.AuthState,
NavbarProps : state.NavbarState,

})

export default connect(mapStateToProps,mapDispatchToProps )(Navbar)