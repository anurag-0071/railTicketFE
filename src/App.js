import React from 'react';
import './App.css';

import LoginPage from "./screens/LoginPage";
import Dashboard from './screens/Dashboard';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      showLoginPage: false,
      showSignUpPage: false,
    }
  }

  getScreen = () => {
    if (this.state.isLoggedIn) {
      // show dashboard
      return <Dashboard></Dashboard>
    } else {
      // show login page
      return <LoginPage
        showLoginPage={this.state.showLoginPage}
        showSignUpPage={this.state.showSignUpPage}
      >
      </LoginPage>
    }
  }

  render() {
    return (
      <div >
        {this.getScreen()}
      </div>
    );
  }
}

export default App;
