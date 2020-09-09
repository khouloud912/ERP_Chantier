import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Radio} from "final-form-material-ui";
import {
  Paper,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  TextField,
  Select
} from "@material-ui/core";
import axios from 'axios';
import { TimePicker, DatePicker } from "@material-ui/pickers";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      date_of_birth: "",
      phone_number: "",
      gender: "",
      postal_adress: "",
      school_level: "",
      graduation_date: "",
      current_position: "",
      hiring_date: "",
      salary: "",
      office: "",
      DepartmentID:'',
      AllDepartment:[{}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangedateofbirth = this.onChangedateofbirth.bind(this);
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
    this.onChangepostalAdress = this.onChangepostalAdress.bind(this);
    this.onChangeschoollevel = this.onChangeschoollevel.bind(this);
    this.onChangegraduationDate = this.onChangegraduationDate.bind(this);
    this.onChangecurentPosition = this.onChangecurentPosition.bind(this);
    this.onChangehiringDate = this.onChangehiringDate.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeoffice = this.onChangeoffice.bind(this);
    this.onchangeDepartmentID =this.onchangeDepartmentID.bind(this);
    this.componentDidMount =this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ last_name: e.target.value });
  };
  onChangefirstName = (e) => {
    console.log(e.target.value);
    this.setState({ first_name: e.target.value });
  };
  onChangedateofbirth = (e) => {
    console.log(e.target.value);
    this.setState({ date_of_birth: e.target.value });
    console.log(this.state.date_of_birth);
  };
  onChangephoneNumber = (e) => {
    console.log(e.target.value);
    this.setState({ phone_number: e.target.value });
    console.log(this.state.phone_number);
  };
  onChangegender = (e) => {
    console.log(e.target.value);
    this.setState({ gender: e.target.value });
  };
  onChangepostalAdress = (e) => {
    console.log(e.target.value);
    this.setState({ postal_adress: e.target.value });
    console.log(this.state.postal_adress);
  };
  onChangeschoollevel = (e) => {
    console.log(e.target.value);
    this.setState({ school_level: e.target.value });
    console.log(this.state.school_level);
  };
  onChangegraduationDate = (e) => {
    console.log(e.target.value);
    this.setState({ graduation_date: e.target.value });
    console.log(this.graduation_date);
  };
  onChangecurentPosition = (e) => {
    console.log(e.target.value);
    this.setState({ current_position: e.target.value });
    console.log(this.state.current_position);
  };
  onChangehiringDate = (e) => {
    console.log(e.target.value);
    this.setState({ hiring_date: e.target.value });
  };
  onChangeSalary = (e) => {
    console.log(e.target.value);
    this.setState({ salary: e.target.value });
  };
  onChangeoffice = (e) => {
    console.log(e.target.value);
    this.setState({ office: e.target.value });
  };
  onchangeDepartmentID=(e)=>{
    this.setState({
      DepartmentID: e.target.value
    }, function () {
      console.log(this.state.DepartmentID);
  });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  console.log(this.state.first_name ,this.state.phone_number ,this.state.school_level , this.state.current_position ) 
   axios.post('http://localhost:3001/Employee/addEmployee',{
    first_name: this.state.first_name,
    last_name :this.state.last_name,
    office:this.state.office,
    salary:this.state.salary,
    hiring_date:this.state.hiring_date,
    current_position:this.state.current_position,
    graduation_date:this.state.graduation_date,
    school_level:this.state.school_level,
    postal_adress:this.state.postal_adress,
    gender:this.state.gender,
    phone_number:this.state.phone_number,
    departementId:this.state.DepartmentID,
    date_of_birth:this.state.date_of_birth
  }
   )
      .then((res) => {
          console.log(res.data)
          console.log("success")
      }).catch((error) => {
          console.log(error)
          console.log("hawel marra okhra")
      });
  };
  componentDidMount(){
    return axios.get("http://localhost:3001/Departement/getAlldepartement").then((response)=>{
            console.log(response.data);
            this.setState({
              AllDepartment:response.data
            })
     })
  }
  DatePickerWrapper(props) {
    const {
      input: { name, onChange, value, ...restInput },
      meta,
      ...rest
    } = props;
    const showError =
      ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
      meta.touched;
    return (
      <DatePicker
        {...rest}
        name={name}
        helperText={showError ? meta.error || meta.submitError : undefined}
        error={showError}
        inputProps={restInput}
        onChange={onChange}
        value={value === "" ? null : value}
      />
    );
  }
  TimePickerWrapper(props) {
    const {
      input: { name, onChange, value, ...restInput },
      meta,
      ...rest
    } = props;
    const showError =
      ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
      meta.touched;
   
    return (
      <TimePicker
        {...rest}
        name={name}
        helperText={showError ? meta.error || meta.submitError : undefined}
        error={showError}
        inputProps={restInput}
        onChange={onChange}
        value={value === "" ? null : value}
      />
    );
  }
  validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.postalAdress) {
      errors.postalAdress = "Required";
    }
    return errors;
  };
  render() {
    return (
      <div>
        <div
          style={{
            maxWidth: 600,
            marginTop: "10%",
            marginLeft: "30%",
            backgroundColor: "white",
          }}
        >
          <CssBaseline />
          <Form
            onSubmit={() => {}}
            initialValues={{ employed: true, stooge: "larry" }}
            validate={(values) => {
              const errors = {};
              if (!values.first_name) {
                errors.first_name = "Required";
              }
              if (!values.lastName) {
                errors.lastName = "Required";
              }
              if (!values.currentposition) {
                errors.currentposition = "Required";
              }
              if (!values.office) {
                errors.office = "Required";
              }
              if (!values.department) {
                errors.department = "Required";
              }
              return errors;
            }}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
              <form onSubmit={(e) => this.handleSubmit(e)} noValidate>
                <Paper style={{ padding: 16 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={6}>
                      <Field>
                        {(props) => (
                          <TextField
                            fullWidth
                            required
                            name="firstName"
                            type="text"
                            label="First Name"
                            value={this.state.first_name}
                            onChange={(e) => this.onChangefirstName(e)}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field>
                      {(props) => (
                      <TextField
                        fullWidth
                        required
                        name="lastName"
                        type="text"
                        label="Last Name"
                        value={this.state.last_name}
                        onChange={(e) => this.handleChange(e)}
                      />
                      )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field>
                        {(props) => (
                          <TextField
                            fullWidth
                            required
                            name="date"
                            type="date"
                            label="date of birth"
                            value={this.state.date_of_birth}
                            onChange={(e) => this.onChangedateofbirth(e)}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField
                        name="phoneNumber "
                        fullWidth
                        required
                        type="text"
                        label="phone Number"
                        value={this.state.phone_number}
                        onChange={(e)=>this.onChangephoneNumber(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row
                        value={this.state.gender}
                        onChange={(e)=>this.onChangegender(e)}
                        >
                          <FormControlLabel
                            label="Male"
                            control={
                              <Field
                                name="stooge"
                                component={Radio}
                                type="radio"
                                value="Male"
                              />
                            }
                          />
                          <FormControlLabel
                            label="Female"
                            control={
                              <Field
                                name="stooge"
                                component={Radio}
                                type="radio"
                                value="Female"
                              />
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField                       
                        name="postalAdress"
                        fullWidth
                        required
                        type="text"
                        label="postal adress"
                        value={this.state.postal_adress}
                        onChange={(e)=>this.onChangepostalAdress(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField                       
                           name="school level "
                        fullWidth
                        required
                        type="text"
                        label="school level"
                        value={this.state.school_level}
                        onChange={(e)=>this.onChangeschoollevel(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField                
                        name="graduationDate"
                        fullWidth
                        required
                        type="date"
                        label="graduation date"
                        value={this.state.graduation_date}
                        onChange={(e)=>this.onChangegraduationDate(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                        <Field>
                        {(props) => (
                          <TextField  
                        name="hiring date"
                        fullWidth
                        required
                        type="date"
                        label="hiring date"
                        value={this.state.hiring_date}
                        onChange={(e)=>this.onChangehiringDate(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField 
                        fullWidth
                        required
                        name="currentposition"
                        type="text"
                        label="Current position"
                        value={this.state.current_position}
                        onChange={(e)=>this.onChangecurentPosition(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField                 
                        fullWidth
                        required
                        name="office"
                        type="text"
                        label="office"
                        value={this.state.office}
                        onChange={(e)=>this.onChangeoffice(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field>
                       {(props) => (
                        <Select
                        fullWidth
                        required
                        name="department"
                        label="Select a department"
                        formControlProps={{ fullWidth: true }}
                        value={this.state.DepartmentID}
                        onChange={(e)=>this.onchangeDepartmentID(e)}>
                        {this.state.AllDepartment.map((department)=>(
                        <MenuItem value={department.id}>{department.departement_name}</MenuItem>
                        ))}
                      </Select>
                       )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field>
                        {(props) => (
                          <TextField
                            fullWidth
                            required
                            name="salary"
                            type="text"
                            label="salary"
                            value={this.state.salary}
                            onChange={(e) => this.onChangeSalary(e)}
                          />
                        )}
                      </Field>
                    </Grid>
                    <Grid item style={{ marginTop:16 }}>
                      <Button
                        type="button"
                        variant="contained"
                        onClick={reset}
                        disabled={submitting || pristine}
                      >
                        Reset
                      </Button>
                    </Grid>
                    <Grid item style={{ marginTop: 16 }}>
                      <input
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={submitting}
                      />
                      
                    </Grid>
                  </Grid>
                </Paper>
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}
