import React , {useState , useEffect} from 'react';
import Employee from './employees/Employee';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
//import {getNumbers} from '.././store/actions/getAction';
import {Link} from "react-router-dom"


const Navbar = ({cartProps ,AuthProps}) => {
  const [FinanceElements,setFinanceState]=useState(false);
  const [RhElements,setRhElements]=useState(false);
  const [projectElements,setprojectElements]=useState(true);
  const[managementElement,setManagementElement]=useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cartProps.cart.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  }, [cartProps, cartCount]);


 const onChangefinanceElements=(e)=>{
    setFinanceState(true);
    setRhElements(false);
    setprojectElements(false)
   
 }
const onChangeprojectElements=(e)=>{
  setFinanceState(false);
  setRhElements(false);
  setprojectElements(true)
  
 }
const onChangeRhElements=(e)=>{
  setFinanceState(false);
  setRhElements(true);
  setprojectElements(false)
 }

 const onChangeManagementElements=(e)=>{
  setFinanceState(false);
  setRhElements(false);
  setprojectElements(false);
  setManagementElement(true);
 }
 const GoToCart=()=>{
    this.props.history.push('/Commande');
  }
  // console.log('Navbar');
  console.log('Navebar','FinanceElements,RhElements,projectElements,managementElement',FinanceElements,RhElements,projectElements,managementElement);
  return ( 
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
      {(AuthProps.user.roles.includes("ROLE_RHUSER") || AuthProps.user.roles.includes("ROLE_ADMIN") )&&
        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangeRhElements(e)}>
            <span className="btn">Gestion RH</span>
          </a>
        </li>
}
 {(AuthProps.user.roles.includes("ROLE_FINANCEUSER") || AuthProps.user.roles.includes("ROLE_ADMIN"))&&
        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangefinanceElements(e)}>
            <span className="btn">Module finance</span>
          </a>
        </li>
}

        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangeprojectElements(e)}>
            <span className="btn">Gestion projet</span>
          </a>
        </li>
{(AuthProps.user.roles.includes("ROLE_ADMIN"))&&
        <li className="nav-item dropdown d-none d-lg-flex">
          <a className="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>onChangeManagementElements(e)}>
            <span className="btn">Manage Users</span>
          </a>
        </li>
}

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
        <li className="nav-item nav-settings d-none d-lg-block">
          <a className="nav-link" href="#">
            <i className="icon-grid"></i>
          </a>
        </li>
        {AuthProps.user.roles.includes("ROLE_FINANCEUSER") &&
        <li>
        <Link data-toggle="tooltip" data-placement="top" title="Add to Cart" to='/Commande' ><i className="fas fa-shopping-cart mr-3"></i></Link>
         <span className="badge badge-danger">{cartCount}</span>
        </li>
      }
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="icon-menu"> </span>
      </button>
    </div>
  </nav>
  <Dashboard 
  FinanceState = {FinanceElements}
  Rhstate={RhElements}
  projectState={projectElements}
  ManagementState={managementElement}
  />
  </div>
   );
}
 
const mapStateToProps=state=>({
cartProps :state.cartState,
AuthProps :state.AuthState,

})

export default connect(mapStateToProps)(Navbar)