import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";

const getListItemContent = (listType, listItem) => {
  const contentArray = [];
  for (const key in listItem) {
    if (key !== "id" && key !== "selected") {
      console.log("key", key, "listitem", listItem[key])
      contentArray.push(
        <ListItem>
          <ListItemText>
            {key === "runsOn" ? listItem[key].join(",") : listItem[key]}
          </ListItemText>
        </ListItem>
      )
    }
  }
  return contentArray;
}

function ListingItem({ listType, listItem, handleListItemClick }) {
  return (
    // container
    <div>
      <ListItem
        // style={{ display: "flex" }}
        dense
        key={listItem.id}
        button
        selected={listItem.selected}
        onClick={handleListItemClick}
      >
        <List className="listingModalHeader"
          style={{
            width: "100%"
          }}
        >
          {getListItemContent(listType, listItem)}
        </List>
      </ListItem>
    </div>
  )
}

export default ListingItem;