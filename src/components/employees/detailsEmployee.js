import React, { Component } from 'react';
import axios from 'axios';

export default class detailsEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Employee:[]
        };
      }
    componentDidMount() {
        const id = this.props.match.params.id;
        return axios.get('http://localhost:3001/Employee/getEmployee/'+id).then((response)=>{
        console.log(response.data);
        this.setState({
        Employee:response.data})
        })
    }
    render() { 
       return (        
            <div>
                	<div class="card " style={{ marginTop: "8%" , marginLeft:"20%" }}>
						<div class="card-body">
							<div class="row">
								<div class="col-md-12">
									<div class="profile-view">
										<div class="profile-img-wrap">
											<div class="profile-img">
												<a href="#"><img alt="" src="https://dreamguys.co.in/smarthr/orange/assets/img/profiles/avatar-02.jpg"/></a>
											</div>
										</div>
										<div class="profile-basic">
											<div class="row">
												<div class="col-md-5">
													<div class="profile-info-left">
														<h3 class="user-name m-t-0 mb-0">{this.state.Employee.last_name}{this.state.Employee.first_name}</h3>
														<h6 class="text-muted">UI/UX Design Team</h6>
                                                       <small class="text-muted">{this.state.Employee.current_position}</small>
														<div class="staff-id">Employee ID :{this.state.Employee.id} </div>
														<div class="small doj text-muted">Date of Join : {this.state.Employee.hiring_date}</div>
														<div class="staff-msg"><a class="btn btn-custom" href="https://dreamguys.co.in/smarthr/orange/chat.html">Send Message</a></div>
													</div>
												</div>
												<div class="col-md-7">
													<ul class="personal-info">
														<li>
															<div class="title">Phone:</div>
															<div class="text"><a href="#">{this.state.Employee.phone_number}</a></div>
														</li>
														
														<li>
															<div class="title">Birthday:</div>
															<div class="text">{this.state.Employee.date_of_birth}uhkku</div>
														</li>
														<li>
															<div class="title">Address:</div>
															<div class="text">{this.state.Employee.postal_address}uyhuuy</div>
														</li>
														<li>
															<div class="title">Gender:</div>
															<div class="text">{this.state.Employee.gender}kuk</div>
														</li>
														<li>
															<div class="title">school level </div>
                                                            <div class="text">{this.state.Employee.school_level}jjhkjk</div>
														</li>
                                                        <li>
															<div class="title">graduation:</div>
                                                            <div class="text">{this.state.Employee.graduation_date}jhgjh</div>
														</li>
                                                        <li>
															<div class="title">office:</div>
                                                            <div class="text">{this.state.Employee.office}j</div>
														</li>
                                                        <li>
															<div class="title">department:</div>
                                                            <div class="text">{this.state.Employee.departementId}</div>
														</li>
                                                        <li>
															<div class="title">salary</div>
                                                            <div class="text">{this.state.Employee.salary}</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div class="pro-edit"><a data-target="#profile_info" data-toggle="modal" class="edit-icon" href="#"><i class="fa fa-pencil"></i></a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
            </div>
        )
    }}

