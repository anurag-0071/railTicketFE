import React from 'react'
import { Typography } from '@material-ui/core'


class ListScreenHeader extends React.Component {

  render = () => {
    return (
      // outer div
      <div className="listScreenHeader">
        {/* Title on left */}
        <div className="listScreenTitle">
          <Typography className="listScreenTitle"
            style={{ fontSize: "50px" }}
          >{this.props.title}</Typography>
        </div>
        {/* count on right */}
        <div className="listScreenCount">
          <Typography> count: {this.props.count}</Typography>
        </div>
      </div>
    )
  }

}

export default ListScreenHeader;