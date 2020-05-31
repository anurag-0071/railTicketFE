import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";

const getListItemContent = (listType, listItem) => {
  const contentArray = [];
  let i = 0;
  for (const key in listItem) {
    if (key !== "id" && key !== "selected") {
      contentArray.push(
        <ListItem key={i++}>
          <ListItemText>
            {key === "runsOn" ? listItem[key].join(",") : listItem[key]}
          </ListItemText>
        </ListItem>
      );
    }
  }
  return contentArray;
}

function ListingItem({ itemKey, listType, listItem, handleListItemClick }) {
  return (
    // container
    <div>
      <ListItem
        // style={{ display: "flex" }}
        dense
        key={itemKey}
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