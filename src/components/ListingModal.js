import React from 'react';
import { TableContainer, Paper, TableHead, Table, TableCell, TableRow, makeStyles, TableBody } from "@material-ui/core";

import ListingModalHeader from "./ListingModalHeader";
import ListingItem from "./Listingtem"
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

function createData(name, calories, fat, carbs, protein, x = "sdfa") {
  return { name, calories, fat, carbs, protein, x };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const getTableHeader = (coloumns) => {
  // alert(coloumns)
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