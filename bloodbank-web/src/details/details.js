import React, { Component } from "react";
import "./details.css";
class Details extends Component {
  render() {
    return (
      <thead>
        <tr>
          <td class="stat">Request Date</td>
          <td class="stat">Request Time</td>
          <td class="stat">Blood Type</td>
          <td class="stat">Unit(s)</td>
          <td class="stat">Requester Name</td>
          <td class="stat">Request Status</td>
        </tr>
      </thead>
    );
  }
}

export default Details;
