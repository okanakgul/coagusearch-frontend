import React, { Component } from 'react'
import './bloodreq.css';
var mybloodtype = "Not Specified";    
class BloodReq extends Component {



    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <td>{this.props.req_date}</td>
                        <td>{this.props.req_time}</td>
                        <td>{this.props.blood_type_name}</td>
                        <td>{this.props.units}</td>
                        <td>{this.props.requester_name}</td>
                        <td>{this.props.req_status}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

/*
          <thead>
            <tr>
              <td>FFP: Fresh Frozen Plasma  </td>
              <td>PC: Platelet concentrate </td>
            </tr>
          </thead>

*/

export default BloodReq;