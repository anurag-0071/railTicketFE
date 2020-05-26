import React from 'react'
import { Typography } from '@material-ui/core'


class ListScreenHeader extends React.Component {
  constructor(props) {
    super(props)
  }


  render = () => {
    return (
      // outer div
      <div className="listScreenHeader">
        {/* Title on left */}
        <div className="listScreenTitle">
          <Typography className="listScreenTitle"
            style={{ fontSize: "50px" }}
          >Trains</Typography>
        </div>
        {/* count on right */}
        <div className="listScreenCount">
          <Typography> count: 0</Typography>
        </div>
      </div>
    )
  }

}

export default ListScreenHeader;