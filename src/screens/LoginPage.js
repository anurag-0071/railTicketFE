import React from 'react';
import { Typography, TextField, Button, MenuItem } from "@material-ui/core";


class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props,
      name: "",
      phone: "",
      email: "",
      age: 0,
      gender: "",
      password: "",
      confirmPassword: "",
      errors: {
        name: "",
        phone: "",
        email: "",
        age: "",
        password: "",
        confirmassword: "",
      }
    }
  }

  setError = (key, errorMsg) => {
    const errors = this.state.errors;
    errors[key] = errorMsg;
    this.setState({ errors })
  }

  validateInput = () => {
    var isValid = true;
    // if (true) {
    //   console.log(this.state);
    //   return true;
    // }

    const errors = this.state.errors;
    for (const fieldName in this.state) {
      const value = this.state[fieldName];
      // alert("fieldName: " + fieldName + "   value: " + value);

      if (fieldName === 'name') {
        if (!value) {
          errors[fieldName] = "Please provide valid input";
          isValid = false;
        } else {
          errors[fieldName] = "";
        }
      } else if (fieldName === 'phone') {
        const pattern = /^[0-9]{10}$/g;
        if (!value) {
          errors[fieldName] = "Please provide valid input";
          isValid = false;
        } else if (!value.match(pattern)) {
          errors.phone = "Invalid phone no. Enter 10 digit phone number."
          isValid = false;
        } else {
          errors[fieldName] = "";
        }
      } else if (fieldName === 'email') {
        const pattern = /^[A-Za-z1-9\.\_]+@[a-z]+\.[a-z]+$/g;
        if (!value) {
          errors[fieldName] = "Please provide valid input";
          isValid = false;
        } else if (!value.match(pattern)) {
          errors.email = "Provide valid email Id";
          isValid = false;
        } else {
          errors[fieldName] = "";
        }
      } else if (fieldName === 'age') {
        const pattern = /^[0-9]{1,3}$/g;
        if (!value) {
          errors[fieldName] = "Please provide valid input";
          isValid = false;
        } else if (!value.match(pattern)) {
          errors.age = "Provide correct age";
          isValid = false;
        } else {
          errors[fieldName] = "";
        }
      } else if (fieldName === 'gender') {

      } else if (fieldName === 'password') {

      } else if (fieldName === 'confirmPassword') {
        if (!value) {
          errors[fieldName] = "Please provide valid input";
          isValid = false;
        } else if (value !== this.state.password) {
          errors.confirmPassword = "Password is not matching"
          isValid = false;
        } else {
          errors[fieldName] = "";
        }
      }
    }
    this.setState({
      errors
    })
    return isValid;
  }

  handleFieldValueChange = (event, id) => {
    const value = event.target.value;

    // console.log('updating state', id, value, typeof value)
    // if (id === 'phone' && value / 10000000000 > 1) {
    //   const errors = this.state.errors;
    //   errors.phone = "Max 10 digits allowed";
    //   this.setState({
    //     errors
    //   })
    //   return;
    // } else if (id === "phone") {
    //   // const errors = this.state.errors;
    //   // errors.phone = "";
    //   // this.setState({
    //   //   errors,
    //   //   phone: value
    //   // })
    //   return;
    // }
    this.setState({
      [id]: value
    })
  }

  submitForm = () => {
    // const 
    if (this.validateInput()) {
      alert("valid inputs");
    } else {
      alert("error in inputs");
    }
  }

  getLoginModal = () => {
    console.log('this.state = ', this.state)
    if (this.state.showLoginPage) {
      return (
        <form className="LoginForm">
          <TextField
            id="phone"
            label="Phone"
            placeholder="phone"
            type="Number"
            required
            value={this.state.phone}
            error={this.state.errors.phone}
            helperText={this.state.errors.phone}
            onChange={(event) => this.handleFieldValueChange(event, "phone")}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="password"
            required
            value={this.state.password}
            error={this.state.errors.password}
            helperText={this.state.errors.password}
            onChange={(event) => this.handleFieldValueChange(event, "password")}
          />
        </form>
      )
    } else if (this.state.showSignUpPage) {
      return <form className="LoginForm">
        <TextField
          id="name"
          label="Name"
          placeholder="name"
          required
          value={this.state.name}
          error={this.state.errors.name}
          helperText={this.state.errors.name}
          onChange={(event) => this.handleFieldValueChange(event, "name")}
        />
        <TextField
          id="phone"
          label="Phone"
          placeholder="phone"
          type="number"
          required
          value={this.state.phone}
          error={this.state.errors.phone}
          helperText={this.state.errors.phone}
          onChange={(event) => this.handleFieldValueChange(event, "phone")}
        />
        <TextField
          id="email"
          label="Email"
          placeholder="email"
          required
          value={this.state.email}
          error={this.state.errors.email}
          helperText={this.state.errors.email}
          onChange={(event) => this.handleFieldValueChange(event, "email")}
        />
        <TextField
          id="gender"
          label="Gender"
          select
          required
          value={this.state.gender}
          error={this.state.errors.gender}
          helperText={this.state.errors.gender}
          onChange={(event) => this.handleFieldValueChange(event, "gender")}
        >
          <MenuItem key={"Male"} value={"Male"}>
            Male
          </MenuItem>
          <MenuItem key={"Female"} value={"Female"}>
            Female
          </MenuItem>
        </TextField>
        <TextField
          id="age"
          label="Age"
          placeholder="age"
          type="number"
          required
          value={this.state.age}
          error={this.state.errors.age}
          helperText={this.state.errors.age}
          onChange={(event) => this.handleFieldValueChange(event, "age")}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          placeholder="password"
          required
          value={this.state.password}
          error={this.state.errors.password}
          helperText={this.state.errors.password}
          onChange={(event) => this.handleFieldValueChange(event, "password")}
        />
        <TextField
          id="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="password"
          required
          value={this.state.confirmPassword}
          error={this.state.errors.confirmPassword}
          helperText={this.state.errors.confirmPassword}
          onChange={(event) => this.handleFieldValueChange(event, "confirmPassword")}
        />
      </form>
    } else {
      return (
        <form className="LoginForm">
          <TextField
            id="phone"
            label="Phone"
            placeholder="phone"
            required
            error={this.state.errors.phone}
            helperText={this.state.errors.phone}
            onChange={(event) => this.handleFieldValueChange(event, "phone")}
          />
        </form>
      )
    }
  }

  render() {

    return (
      <div className="LoginPage" >
        <div className="LoginModal">
          {this.getLoginModal()}
          <Button
            style={{
              marginTop: "4%",
              alignSelf: "flex-end",
              backgroundColor: "blue",
            }}
            // disabled,
            onClick={this.submitForm}
          >
            <Typography
              varient="h1"
              color="secondary"
            >
              Submit
            </Typography>
          </Button>
        </div>
      </div >
    )
  }



}


export default LoginPage