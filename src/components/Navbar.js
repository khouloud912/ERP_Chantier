import React , {Component , useEffect} from 'react';
import Employee from './employees/Employee';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import {getNumbers} from '.././store/actions/getAction';


class Navbar extends Component {
  constructor(props) {
    console.log(props)   
    super(props);
    this.state = {
        FinanceElements:false,
        projectElements:false,
        RhElements:true,
    };
    this.onChangefinanceElements = this.onChangefinanceElements.bind(this);
    this.onChangeprojectElements = this.onChangeprojectElements.bind(this);
    this.onChangeRhElements = this.onChangeRhElements.bind(this);
    this.componentDidMount =this.componentDidMount.bind(this);
  }
  componentDidMount(){
    getNumbers()
  }
  onChangefinanceElements(e){
     this.setState({
      FinanceElements: true,
      RhElements:false,
      projectElements:false}, function () {
      console.log("finance state",this.state.FinanceElements);
      console.log("projectElements",this.state.projectElements);
      console.log("rhElements",this.state.RhElements);
  });
  }
  onChangeprojectElements(e){
    this.setState({
      projectElements: true,
      RhElements:false,
      FinanceElements:false}, function () {
      console.log(this.state.FinanceElements);
      console.log(this.state.projectElements)
  });
  }
  onChangeRhElements(e){
    console.log("koki");
    this.setState({
      projectElements: false,
      RhElements:true,
      FinanceElements:false}, function () {
      console.log(this.state.FinanceElements);
  });
  }
    render(){
        return (
            <div className="container-scroller">
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
              <a className="navbar-brand brand-logo"><img src="./asset/images/logo.svg" alt="logo"/></a>
              <a class="navbar-brand brand-logo-mini" ><img src="./asset/images/logo-mini.svg" alt="logo"/></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center">
              <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span class="icon-menu"></span>
              </button>
              <ul class="navbar-nav">
                <li class="nav-item dropdown d-none d-lg-flex">
                  <a class="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>this.onChangeRhElements(e)}>
                    <span class="btn">Gestion RH</span>
                  </a>
                </li>
                <li class="nav-item dropdown d-none d-lg-flex">
                  <a class="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>this.onChangefinanceElements(e)}>
                    <span class="btn">Module finance</span>
                  </a>
                </li>
                <li class="nav-item dropdown d-none d-lg-flex">
                  <a class="nav-link dropdown-toggle nav-btn" id="actionDropdown" data-toggle="dropdown" onClick={(e)=>this.onChangeprojectElements(e)}>
                    <span class="btn">Gestion projet</span>
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item dropdown">
                  <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                    <i class="icon-bell mx-0"></i>
                    <span class="count"></span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    <a class="dropdown-item">
                      <p class="mb-0 font-weight-normal float-left">You have 4 new notifications
                      </p>
                      <span class="badge badge-pill badge-warning float-right">View all</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-success">
                          <i class="icon-info mx-0"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject font-weight-medium">Application Error</h6>
                        <p class="font-weight-light small-text">
                          Just now
                        </p>
                      </div>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-warning">
                          <i class="icon-speech mx-0"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject font-weight-medium">Settings</h6>
                        <p class="font-weight-light small-text">
                          Private message
                        </p>
                      </div>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                        <div class="preview-icon bg-info">
                          <i class="icon-envelope mx-0"></i>
                        </div>
                      </div>
                      <div class="preview-item-content">
                        <h6 class="preview-subject font-weight-medium">New user registration</h6>
                        <p class="font-weight-light small-text">
                          2 days ago
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                    <i class="icon-envelope mx-0"></i>
                    <span class="count"></span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                    <div class="dropdown-item">
                      <p class="mb-0 font-weight-normal float-left">You have 7 unread mails
                      </p>
                      <span class="badge badge-info badge-pill float-right">View all</span>
                    </div>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                          <img src="/asset/images/faces/face4.jpg" alt="image" class="profile-pic"></img>
                      </div>
                      <div class="preview-item-content flex-grow">
                        <h6 class="preview-subject ellipsis font-weight-medium">David Grey
                          <span class="float-right font-weight-light small-text">1 Minutes ago</span>
                        </h6>
                        <p class="font-weight-light small-text">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                          <img src="images/faces/face2.jpg" alt="image" class="profile-pic"></img>
                      </div>
                      <div class="preview-item-content flex-grow">
                        <h6 class="preview-subject ellipsis font-weight-medium">Tim Cook
                          <span class="float-right font-weight-light small-text">15 Minutes ago</span>
                        </h6>
                        <p class="font-weight-light small-text">
                          New product launch
                        </p>
                      </div>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item preview-item">
                      <div class="preview-thumbnail">
                          <img src="images/faces/face3.jpg" alt="image" class="profile-pic"></img>
                      </div>
                      <div class="preview-item-content flex-grow">
                        <h6 class="preview-subject ellipsis font-weight-medium"> Johnson
                          <span class="float-right font-weight-light small-text">18 Minutes ago</span>
                        </h6>
                        <p class="font-weight-light small-text">
                          Upcoming board meeting
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li class="nav-item nav-settings d-none d-lg-block">
                  <a class="nav-link" href="#">
                    <i class="icon-grid"></i>
                  </a>
                </li>
                <li>
                <a data-toggle="tooltip" data-placement="top" title="Add to Cart"  href="/commande" ><i class="fas fa-shopping-cart mr-3"></i></a>
                <span class="badge badge-danger">{this.props.cartProps.cartNumbers}</span>
                </li>
                
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span class="icon-menu"> </span>
              </button>
            </div>
          </nav>
          <Dashboard 
          FinanceState = {this.state.FinanceElements}
          Rhstate={this.state.RhElements}
          projectState={this.state.projectElements}
          />
          </div>

        )
    }
}
const mapStateToProps=state=>({
cartProps :state.cartState

})

export default connect(mapStateToProps, {getNumbers})(Navbar)