import React from 'react';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  componentWillUpdate() {
    // console.log("props", this.props)
  }

  render() {
    return (
      <div >
        <List className="sideBarItem">
          {this.state.items.map(({ label, name, selected }) => (
            <ListItem

              key={name}
              button
              selected={selected}
              onClick={() => this.state.handleClick(label)}
            >
              <ListItemText >{label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

// export default Sidebar