import React from 'react';
import { List, ListItem, ListItemText } from "@material-ui/core"


const getColoumns = (coloumns) => {
  return (
    coloumns.map(key => {
      return (
        <ListItem>
          <ListItemText>
            <b>
              {key}
            </b>
          </ListItemText>
        </ListItem>
      )
    })
  )
}

function ListingModalHeader({ coloumns }) {
  return (
    <List
      style={{
        backgroundColor: "#c1c1c1",
      }}
    >
      <ListItem>
        <List className="listingModalHeader"
          style={{
            width: "100%"
          }}
        >
          {getColoumns(coloumns)}
        </List>
      </ListItem>
    </List>
  )
}

export default ListingModalHeader;