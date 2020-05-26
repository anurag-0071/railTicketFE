
import React from 'react';
import logo from '../logo.svg';
import { ClickAwayListener } from "@material-ui/core";

import Sidebar from '../components/Sidebar';
import NavBar from "../components/NavBar";

const items = [
  { name: 'home', label: 'Home', selected: true },
  { name: 'sales', label: 'Sales' },
  { name: 'orders', label: 'Orders' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' }]

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    console.log(" dashboard props", props)
    this.state = {
      items,
      showMenu: false,
      ...props
    }
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
    console.log("state after", this.state);
  }

  handleSideBarClick = (key) => {
    const items = this.state.items;
    items.forEach(item => {
      if (item.label === key) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.setState({
      items: items
    })
  }

  getSideBar = () => {
    console.log("show menu", this.state.showMenu)
    if (this.state.showMenu) {
      console.log("returning sidebar element")
      return (
        <div className="Container">
          <div className="sidebar">
            <ClickAwayListener
              onClickAway={this.toggleMenu}
            >
              <Sidebar items={this.state.items} handleClick={this.handleSideBarClick} />
            </ClickAwayListener>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    console.log("states before render", this.state)
    return (
      <div>
        <NavBar toggleMenu={this.toggleMenu}></NavBar>
        <div className="App">
          {this.getSideBar()}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    )
  }
}

export default Dashboard;