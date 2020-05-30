import React from 'react';
import { List, ListItem, ListItemText } from "@material-ui/core"


const getColoumns = (coloumns) => {
  return (
    coloumns.map(key => {
      if (key !== "id" && key !== "selected") {
        return (
          <ListItem>
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
        backgroundColor: "whitesmoke",
      }}
    >
      <ListItem>
        <List
          className="listingModalHeader"
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