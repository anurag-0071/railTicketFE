import React from 'react';
import { List, ListItem, ListItemText } from "@material-ui/core"


const getColoumns = (coloumns) => {
  let i = 0;
  return (
    coloumns.map(key => {
      if (key !== "id" && key !== "selected") {
        return (
          <ListItem key={i++}>
            <ListItemText>
              <b>
                {key}
              </b>
            </ListItemText>
          </ListItem>
        )
      }
      return null
    })
  )
}

function ListingModalHeader({ coloumns }) {
  return (
    <List dense
      style={{
        backgroundColor: "#282c34",
      }}
    >
      <ListItem>
        <List
          className="listingModalHeader"
        >
          {getColoumns(coloumns)}
        </List>
      </ListItem>
    </List>
  )
}

export default ListingModalHeader;