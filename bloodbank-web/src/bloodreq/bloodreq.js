import React, { Component } from 'react'
import './bloodreq.css';

var needUpdate = false;
setInterval(function(){
    if(needUpdate == true){
        window.location.reload();
        needUpdate = false;     
     }
}, 1000);

class BloodReq extends Component {

    

    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <td class="req">{this.props.req_date}</td>
                        <td class="req">{this.props.req_time}</td>
                        <td class="req">{this.props.blood_type_name}</td>
                        <td class="req">{this.props.units}</td>
                        <td class="req">{this.props.requester_name}</td>
                        <td class="req">{this.props.req_status}</td>
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