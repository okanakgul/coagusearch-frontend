import React, { Component } from 'react'
import './details.css';
var mybloodtype = "Not Specified";
class Details extends Component {



  render() {
    return (

      
        <thead>
          <tr>
            <td >Request Date</td>
            <td >Request Time</td>
            <td>Blood Type</td>
            <td >Unit(s)</td>
            <td >Requester Name</td>
            <td >Request Status</td>
          </tr>
        </thead>
      



    )
  }
}

export default Details;