import React from "react";

import ListingHeader from "../components/ListingHeader";
import ListingModal from "../components/ListingModal";

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
      ]
    }
  }




  render() {
    return (
      <div className="listingScreen">
        <ListingHeader></ListingHeader>
        <ListingModal
          coloumns={this.state.coloumns}
          items={this.state.trainList}
        />

      </div>
    )
  }
}


export default ListingScreen;