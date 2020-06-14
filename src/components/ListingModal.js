import React from 'react';
import { TableContainer, Paper, TableHead, Table, TableCell, TableRow, makeStyles, TableBody } from "@material-ui/core";

import { withStyles } from '@material-ui/core/styles';

const handleListItemClick = () => {
  alert("clicked")
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    color: theme.palette.common.white,
    backgroundColor: "#282c34",
    // borderColor: "red",
    // border: 1,
    m: 1,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    // padding: "1%",
    minWidth: 700,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const getTableHeader = (coloumns) => {
  return coloumns.map((item, index) => {
    return (
      <StyledTableCell key={index} align={"center"}>
        {item}
      </StyledTableCell>
    )
  });
}

const getTableContent = (items) => {
  return items.map((item, index) => {
    const rowItemArr = [];
    for (const key in item) {
      if (key !== "id") {
        rowItemArr.push(
          <StyledTableCell onClick={handleListItemClick} key={key + " " + index} align={"center"}>
            {item[key]}
          </StyledTableCell >
        )
      } else {

      }
    }
    return (
      <StyledTableRow key={index}>
        {rowItemArr}
      </StyledTableRow>
    )
  })
}

function ListingModal({ coloumns, items }) {

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {getTableHeader(coloumns)}
            </TableRow>
          </TableHead>
          <TableBody>
            {getTableContent(items)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ListingModal;