
import React from 'react';
import { ClickAwayListener } from "@material-ui/core";

import Sidebar from '../components/Sidebar';
import NavBar from "../components/NavBar";
import ListingScreen from "./ListingScreen";

const items = [
  { name: 'home', label: 'Home' }, // booking screen
  { name: "ticketHistory", label: "Ticket History", selected: true },
  { name: 'trainList', label: 'Train List' },
  { name: 'stationList', label: 'Station List' },
  { name: 'users', label: 'Manage Users' },
  // { name: 'settings', label: 'Settings' }
]

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
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
    if (this.state.showMenu) {
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
    return (
      <div>
        <NavBar toggleMenu={this.toggleMenu}></NavBar>
        <div className="App">
          {this.getSideBar()}
          <header className="App-header">
            <ListingScreen className="sideBarItem" title="Trains"></ListingScreen>
          </header>
        </div>

      </div>
    )
  }
}

export default Dashboard;