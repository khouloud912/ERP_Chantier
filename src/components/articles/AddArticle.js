import React, { Component } from "react";
import {getProviders} from '../../store/actions/provider/providerActions';
import {getCategories} from '../../store/actions/category/categoryAction';
import {addArticle} from '../../store/actions/article/AllArticleActions';
import Select from "react-select";
import {connect, connectAdvanced} from 'react-redux';
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
  input
} from "@material-ui/core";

import axios from 'axios';
import { TimePicker, DatePicker } from "@material-ui/pickers";

 class AddArticle extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            Name:'',
            quantity:'',
            unity:'',
            price:'',
            taxe:'',
            devise:'',
            minimum_quantity: '',
            location:'',
            image:null,
            providerId:'',
            categorieId:'',
            categories:[{}],
            providers:[{}]
        };
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuantity= this.onChangeQuantity.bind(this);
        this.onChangeUnity = this.onChangeUnity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeTaxe = this.onChangeTaxe.bind(this);
        this.onChangeDevise = this.onChangeDevise.bind(this);
        this.onChangeMinimumQuantity = this.onChangeMinimumQuantity.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeCategory =this.onChangeCategory.bind(this);
        this.onchangeProviderId =this.onchangeProviderId.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
      }
      onChangeName(e) {
        console.log(e.target.value);
        this.setState({ Name: e.target.value })
      }
      onChangeQuantity(e) {
        console.log(e.target.value);
        this.setState({ quantity: e.target.value })
      }
      onChangeUnity(e) {
        console.log(e.target.value);
        this.setState({ unity: e.target.value })
      }
      onChangePrice(e) {
        console.log(e.target.value);
        this.setState({ price: e.target.value })
      }
      onChangeTaxe(e) {
        this.setState({
          taxe: e.target.value
        }, function () {
          console.log(this.state.taxe);
      });
      }
      onChangeDevise(e) {
        this.setState({
          devise: e.target.value
        }, function () {
          console.log(this.state.devise);
      });
      }
      onChangeMinimumQuantity(e) {
        this.setState({
            minimum_quantity: e.target.value
        }, function () {
          console.log(this.state.minimum_quantity);
      });
      }
      onChangeLocation(e) {
        this.setState({
            location: e.target.value
        }, function () {
          console.log(this.state.location);
      });
      }
      onChangeImage(e) {
        this.setState({
            image: e.target.files[0]
        }, function () {
          console.log(this.state.image);
      });
      }
      onChangeCategory(e) {
        this.setState({
          categorieId: e.target.value
        }, function () {
          console.log(e)
          console.log(this.state.categorieId);
      });
      }
      onchangeProviderId(e) {
        this.setState({
          providerId: e.target.value
        }, function () {
          console.log(this.state.providerId);
      });
      }
  componentDidMount(){
    this.props.getProviders();
    this.props.getCategories();
    console.log(this.props.categoryProps.categories);
    console.log(this.props.ProviderProps.providers);
    this.setState({
      providers:this.props.ProviderProps.providers.map( option => ({ value: option.id, label: option.Name }))
    })
    this.setState({
      categories:this.props.categoryProps.categories.map( option => ({ value: option.id, label: option.Name_categorie }))
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.image)
    const data = new FormData();
    data.append( 'Name', this.state.Name   );
    data.append(  "quantity",this.state.quantity);
    data.append(  "unity",this.state.unity);
    data.append(  "price",this.state.price);
    data.append( "taxe",this.state.taxe );
    data.append(  "devise",this.state.devise);
    data.append( "minimum_quantity",this.state.minimum_quantity);
    data.append( "location",this.state.location);
    data.append( "images",this.state.image);
    data.append( "categorieId",this.state.categorieId);
    data.append( "providerId",this.state.providerId );
    console.log(data.get("categorieId"))  
    this.props.addArticle(data)
};
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
    const { classes } = this.props;
    return (
      <div>
        
        <div className="container-fluid page-body-wrapper">
        <div class="row row-offcanvas row-offcanvas-right">
        <div class="content-wrapper" >
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
              if (!values.Name) {
                errors.Name = "Required";
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
              <form onSubmit={(e) => this.handleSubmit(e)} noValidate method='POST' enctype = "multipart/form-data" >
                <Paper style={{ padding: 16 }}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={6}>
                      <Field>
                        {(props) => (
                          <TextField
                            fullWidth
                            required
                            name="Name"
                            type="text"
                            label="Name"
                            value={this.state.Name}
                            onChange={(e) => this.onChangeName(e)}
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
                        name="unity"
                        type="text"
                        label="unity"
                        value={this.state.unity}
                        onChange={(e) => this.onChangeUnity(e)}
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
                        name="quantity"
                        type="text"
                        label="quantity"
                        value={this.state.quantity}
                        onChange={(e) => this.onChangeQuantity(e)}
                      />
                      )}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField
                        name="Minimum Quantity "
                        fullWidth
                        required
                        type="text"
                        label="Minimum quantity"
                        value={this.state.minimum_quantity}
                        onChange={(e)=>this.onChangeMinimumQuantity(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField                       
                        name="price"
                        fullWidth
                        required
                        type="text"
                        label="price"
                        value={this.state.price}
                        onChange={(e)=>this.onChangePrice(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField                       
                           name="taxe "
                        fullWidth
                        required
                        type="text"
                        label="taxe"
                        value={this.state.taxe}
                        onChange={(e)=>this.onChangeTaxe(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <Field>
                        {(props) => (
                          <TextField                
                        name="devise"
                        fullWidth
                        required
                        type="text"
                        label="devise"
                        value={this.state.devise}
                        onChange={(e)=>this.onChangeDevise(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                        <Field>
                        {(props) => (
                        <TextField  
                        name="location"
                        fullWidth
                        required
                        type="text"
                        label="location"
                        value={this.state.location}
                        onChange={(e)=>this.onChangeLocation(e)}
                      />
                        )}
                        </Field>
                    </Grid>
                    <Grid item xs={6}>
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                     Category Name
                   </label> 
                    <Field
                      name="categorieId"
                      value={this.state.categorieId}
                      options={this.state.categories}
                      onChange={e =>{
                        console.log("e:", e)
                         this.setState({categorieId: e.value})}}
                      component={({ input, ...rest }) => (
                        <Select {...input} {...rest} searchable />)}
                    />
                    </Grid>
                    <Grid item xs={6}>
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                     Provider Name
                   </label> 
                    <Field
                      name="providerId"
                      value={this.state.providerId}
                      options={this.state.providers}
                      onChange={e =>{
                        console.log("e:",e)
                         this.setState({providerId: e.value})}}
                      component={({ input, ...rest }) => (
                        <Select {...input} {...rest} searchable />)}
                    />
                    </Grid>
                    <div>
            
                 </div>
                    <Grid item xs={12}>
                    <input
                    name="images"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={(e)=>this.onChangeImage(e)}
                    />
                    <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span" >
                        Upload Article
                    </Button>
                    </label> 
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
      </div></div></div></div>
    );
  }
}
const mapStateToProps =state=>({
  ProviderProps:state.providerState,
  categoryProps:state.CategoryState, 
  ArticleProps:state.ArticleState 
  })

export default connect(mapStateToProps, {getProviders, getCategories,addArticle})(AddArticle);
