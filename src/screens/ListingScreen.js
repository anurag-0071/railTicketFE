import React from "react";
import { Button, } from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';

import ListingHeader from "../components/ListingHeader";
import ListingModal from "../components/ListingModal";
import AddItems from "../components/AddItems";

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

const stationList = [
  {
    id: "5",
    name: "station1",
    // trainNo: 
    label: "Station1",
    city: "city1",
    state: "state1",
    selected: false
  },
  {
    id: "6",
    name: "station1",
    // trainNo: 
    label: "Station1",
    city: "city1",
    state: "state1",
    selected: true
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
      showCreateModal: !this.state.showCreateModal
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

  render() {
    return (
      <div className="listingScreen">
        <ListingHeader title={this.props.title}></ListingHeader>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CreateIcon></CreateIcon>}
          style={{
            alignSelf: "flex-end"
          }}
          onClick={this.clickAdd}
        > Add Train</Button>
        <ListingModal
          coloumns={Object.keys(this.state.trainList[0])}
          items={this.state.trainList}
        />

        {
          this.state.showCreateModal ?
            <AddItems
              dialogTitle="Add train"
              fields={this.createModalFields()}
              isOpen={this.state.showCreateModal}
              handleClose={this.closeAdditionDialog}
            /> :
            null
        }
      </div>
    )
  }
}


export default ListingScreen;