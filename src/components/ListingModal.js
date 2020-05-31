import React from 'react';
import { List } from "@material-ui/core";

import ListingModalHeader from "./ListingModalHeader";
import ListingItem from "./Listingtem"

const handleListItemClick = () => {
  alert("clicked")
}

function ListingModal({ coloumns, items }) {
  return (
    <div>
      <ListingModalHeader
        coloumns={coloumns}
      />
      <List
      >
        {items.map(item => {
          console.log("item", item)
          return (
            <ListingItem
              key={item.id}
              itemKey={item.id}
              listType={"train"}
              listItem={item}
              handleListItemClick={handleListItemClick}
            />
          )
        })}
      </List>
    </div>
  )
}

export default ListingModal;