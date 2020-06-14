import React from "react";
import moment from "moment";
import { CircularProgress, Button, Typography, TextField, MenuItem } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";
import CreateIcon from '@material-ui/icons/Create';

import ListingHeader from "../components/ListingHeader";
import ListingModal from "../components/ListingModal";
import AddItems from "../components/AddItems";
import MyAlert from "../components/MyAlert";
import ListingScreen from "./ListingScreen";

class Users extends React.Component {

  fetchURL = "http://localhost:10010/users/admin";
  fetchCountURL = "http://localhost:10010/users/admin/count";
  createAdminURL = "http://localhost:10010/users/admin";

  initialState = {
    isLoading: true,
    users: [],
    totalCount: 0,
    pages: 1,
    currentPageNumber: 1,
    coloumns: [
      "Name",
      "Email",
      "Phone",
      "Age",
      "Gender",
      "Member Since",
    ],
    alert: {
      show: false,
      message: "",
      title: "",
      severity: "",
    },
    showCreateModal: false,
    newUser: {
      name: "user 16",
      email: "asibnha26@gmail.com",
      phone: "8789688826",
      age: "21",
      gender: "Male",
    },
    errors: {
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
    }

  }

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  clickAdd = () => {
    this.setState({
      showCreateModal: true
    })
  }

  closeAdditionDialog = () => {
    this.setState({
      showCreateModal: false
    })
  }

  fetchUserList = (page) => {
    fetch(this.fetchURL + "?page=" + page + "&count=10").then(res => res.json())
      .then((result) => {
        const usersData = result.map(item => {
          return {
            "Name": item.name,
            "Email": item.email,
            "Phone": item.phone,
            "Age": item.age,
            "Gender": item.gender,
            "Member Since": moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
            // "Action": ""
          }
        })
        setTimeout(() => {
          this.setState({
            isLoading: false,
            users: usersData
          })
        }, 0 * 1000);
      }, (error) => {
        console.error("fetch API error", error)
      })
  }

  fetchUserCount = () => {
    fetch(this.fetchCountURL).then(res => res.json())
      .then((result) => {
        this.setState({
          // isLoading: false,
          totalCount: result.count,
          pages: Math.round(result.count / 10 + 0.5)
        })
      }, (error) => {
        console.error("fetch API error", error)
      })
  }

  fetchData = () => {
    this.fetchUserList(0);
    this.fetchUserCount();
  }

  componentDidMount = () => {
    this.fetchData();
  }

  handleFieldValueChange = (event, id) => {
    const value = event.target.value;
    const newUser = this.state.newUser;
    newUser[id] = value
    this.setState({
      newUser
    })
  }

  getCreateModal = () => {
    return (
      <div>
        <TextField
          id={"name"}
          label={"name"}
          required
          helperText={this.state.errors.name}
          error={this.state.errors.name}
          fullWidth
          value={this.state.newUser.name}
          onChange={(event) => this.handleFieldValueChange(event, "name")}
        >
        </TextField>
        <TextField
          id={"email"}
          label={"email"}
          required
          helperText={this.state.errors.email}
          error={this.state.errors.email}
          fullWidth
          value={this.state.newUser.email}
          onChange={(event) => this.handleFieldValueChange(event, "email")}
        >
        </TextField>
        <TextField
          id={"phone"}
          label={"phone"}
          required
          helperText={this.state.errors.phone}
          error={this.state.errors.phone}
          fullWidth
          value={this.state.newUser.phone}
          onChange={(event) => this.handleFieldValueChange(event, "phone")}
        >
        </TextField>
        <TextField
          id={"age"}
          label={"age"}
          required
          helperText={this.state.errors.age}
          error={this.state.errors.age}
          fullWidth
          value={this.state.newUser.age}
          onChange={(event) => this.handleFieldValueChange(event, "age")}
        >
        </TextField>
        <TextField
          select={true}
          id={"gender"}
          label={"gender"}
          required
          helperText={this.state.errors.gender}
          error={this.state.errors.gender}
          fullWidth
          value={this.state.newUser.gender}
          onChange={(event) => this.handleFieldValueChange(event, "gender")}
        >
          <MenuItem key={"Male"} value={"Male"}>
            Male
          </MenuItem>
          <MenuItem key={"Female"} value={"Female"}>
            Female
          </MenuItem>
        </TextField>
      </div>
    )
  }

  validateInput = () => {
    let isValid = true;
    const errors = this.state.errors;
    for (const key in this.state.newUser) {
      const value = this.state.newUser[key];
      let pattern = "";
      switch (key) {
        case "name":
          if (!value) {
            errors[key] = "Name is required"
            isValid = false;
          } else {
            errors[key] = "";
          }
          break;

        case "email":
          pattern = /^[A-Za-z1-9\.\_]+@[a-z]+\.[a-z]+$/g;
          if (!value) {
            errors[key] = "Email is required";
            isValid = false;
          } else if (!value.match(pattern)) {
            errors.email = "Provide valid email Id";
            isValid = false;
          } else {
            errors[key] = "";
          }
          break;

        case "phone":
          pattern = /^[0-9]{10}$/g;
          if (!value) {
            errors[key] = "Phone no is required";
            isValid = false;
          } else if (!value.match(pattern)) {
            errors.phone = "Invalid phone no. Enter 10 digit phone number."
            isValid = false;
          } else {
            errors[key] = "";
          }
          break;
      }
    }
    this.setState({
      errors
    })
    return isValid;
  }

  createAlert = ({
    message,
    title,
    severity
  }) => {
    this.setState({
      alert: {
        show: true,
        message,
        title,
        severity,
      }
    });
  }

  closeAlert = () => {
    this.setState({
      alert: this.initialState.alert
    })
  }

  createUser = () => {

    alert("Creating new user");

    if (this.validateInput()) {
      fetch(this.createAdminURL, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(this.state.newUser)
      }).then(res => {
        if (res.ok) {
          return Promise.resolve(res.json());
        } else {
          return Promise.reject(res.json());
        }
      }).then((resp) => {
        this.setState(Object.assign({}, this.initialState));
        this.createAlert({
          message: "Admin Created Successfully",
          title: "Success",
          severity: "success"
        })
        this.fetchData();
      }, (error) => {
        error.then((error) => {
          this.createAlert({
            message: error.message,
            title: "Error",
            severity: "error"
          })
        })
      }).catch((error) => {
        this.createAlert({
          message: error.toString(),
          title: "Error",
          severity: "error"
        })
      });

    } else {
      this.createAlert({
        message: "Provide valid inputs",
        title: "Invalid Inputs",
        severity: "error"
      })
    }
  }

  getView = () => {
    if (this.state.isLoading) {
      return (
        <CircularProgress
          className="loader"
        >
        </CircularProgress>
      )
    } else {
      return (
        <div>

          <ListingModal
            coloumns={this.state.coloumns}
            items={this.state.users}
          />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <Pagination
              color='secondary'
              showFirstButton
              showLastButton
              count={this.state.pages}
              defaultPage={this.state.currentPageNumber}
              onChange={(event, page) => {
                this.setState({
                  isLoading: true,
                  currentPageNumber: page
                })
                this.fetchUserList(page - 1);
              }}
              style={{ alignSelf: "flex-end", color: "white" }}
              renderItem={(item) => {
                return <PaginationItem {...item}
                  color='primary'
                  style={{
                    color: "white"
                  }}
                />
              }}
            />
          </div>
        </div>
      )
    }
  }

  showAlert = () => {
    if (this.state.alert.show) {
      return (
        <MyAlert
          message={this.state.alert.message}
          title={this.state.alert.title}
          severity={this.state.alert.severity}
          closeAlert={this.closeAlert}
        />
      )
    } else {
      return null;
    }
  }

  render = () => {
    return (
      <div className="listingScreen"
      >
        {this.showAlert()}
        <ListingScreen
          title={"Users"}
          count={this.state.totalCount}
          createActionText={"Add User"}
          isLoading={this.state.isLoading}
          coloumns={this.state.coloumns}
          items={this.state.users}
          pages={this.state.pages}
          changePage={this.fetchUserList}
          clickAdd={this.clickAdd}
          createModalTitle={"Add User"}
          showCreateModal={this.state.showCreateModal}
          createModal={this.getCreateModal()}
          onClickAdd={this.createUser}
          closeAdditionDialog={this.closeAdditionDialog}
        />
      </div>
    )
  }

}

export default Users;