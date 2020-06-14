import React from "react";
import { Button, CircularProgress, } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';

import ListingHeader from "../components/ListingHeader";
import ListingModal from "../components/ListingModal";
import AddItems from "../components/AddItems";
import { Pagination, PaginationItem } from "@material-ui/lab";

const trainList = [
  {
    id: "1",
    name: "train1",
    label: "train1",
    startingStation: "station 1",
    lastStation: "station 2",
    runsOn: ["M", "T", "W", "T", "F", "SA", "SU"],
    departTime: "10:20 AM",
    arrivalTime: "12:34 PM",
    selected: false
  },
  {
    id: "2",
    name: "train1",
    label: "train1",
    startingStation: "station 1",
    lastStation: "station 2",
    runsOn: ["M", "T", "W", "T", "F", "SA", "SU"],
    departTime: "10:20 AM",
    arrivalTime: "12:34 PM",
    selected: true
  },
  {
    id: "3",
    name: "train1",
    label: "train1",
    startingStation: "station 1",
    lastStation: "station 2",
    runsOn: ["M", "T", "W", "T", "F", "SA", "SU"],
    departTime: "10:20 AM",
    arrivalTime: "12:34 PM",
    selected: false
  },
  {
    id: "4",
    name: "train1",
    label: "train1",
    startingStation: "station 1",
    lastStation: "station 2",
    runsOn: ["M", "T", "W", "T", "F", "SA", "SU"],
    departTime: "10:20 AM",
    arrivalTime: "12:34 PM",
    selected: false
  },
  {
    id: "5",
    name: "train1",
    // trainNo: 
    label: "train1",
    startingStation: "station 1",
    lastStation: "station 2",
    runsOn: ["M", "T", "W", "T", "F", "SA", "SU"],
    departTime: "10:20 AM",
    arrivalTime: "12:34 PM",
    selected: false
  },
]



class ListingScreen extends React.Component {

  constructor(props) {
    super(props);

    /*
    props = {
      title,
      count,
      coloumns,
      listItems,
      createModalForm,
      onCreate,
      onDelete,

    }
    */

    this.state = {
      trainList: trainList,
      isLoading: false,
      coloumns: [
        "Train No.",
        "Name",
        "Starting Station",
        "Last Station",
        "Runs On",
        "Departure Time",
        "Arrival Time"
      ],
      showCreateModal: false,
    }
  }

  clickAdd = () => {
    this.setState({
      showCreateModal: true
    })
  }

  closeAdditionDialog = () => {
    this.setState({
      showCreateModal: false
    })
  }

  createModalFields = () => {
    return [
      { label: "Train Name", type: "text" },
      { label: "Train No", type: "text" },
      { label: "From Station", type: "text" },
      { label: "To Station", type: "text" }
    ]
  }

  getView = () => {
    if (this.props.isLoading) {
      return (
        <CircularProgress
          className="loader"
        >
        </CircularProgress>
      )
    } else {
      return (
        <div>
          <ListingModal
            coloumns={this.props.coloumns}
            items={this.props.items}
          />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <Pagination
              color='secondary'
              showFirstButton
              showLastButton
              count={this.props.pages}
              defaultPage={this.state.currentPageNumber}
              onChange={(event, page) => {
                this.setState({
                  isLoading: true,
                  currentPageNumber: page
                })
                this.props.changePage(page - 1);
              }}
              style={{ alignSelf: "flex-end", color: "white" }}
              renderItem={(item) => {
                return <PaginationItem {...item}
                  color='primary'
                  style={{
                    color: "white"
                  }}
                />
              }}
            />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }} >
        <ListingHeader title={this.props.title} count={this.props.count}></ListingHeader>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CreateIcon></CreateIcon>}
          style={{
            alignSelf: "flex-end",
            marginBottom: "1%"
          }}
          onClick={this.props.clickAdd}
        > {this.props.createActionText} </Button>
        {this.getView()}

        {
          this.props.showCreateModal ?
            <AddItems
              dialogTitle={this.props.createModalTitle}
              isOpen={this.props.showCreateModal}
              handleClose={this.props.closeAdditionDialog}
              createModal={this.props.createModal}
              onClickAdd={this.props.onClickAdd}
            /> :
            null
        }
      </div>
    )
  }
}


export default ListingScreen;