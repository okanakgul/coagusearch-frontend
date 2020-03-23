import React, { Component } from "react";
import "./bloodbank.css";

class BloodbankAB extends Component {
  render() {
    return (
      <div>
        <table class="table d">
          <tbody>
            <tr>
              <td className="b">BLOOD AB</td>
            </tr>
            <tr>
              <td class="a">FFP AB Rh P(AB+): {this.props.ffp_ABpos}</td>
            </tr>
            <tr>
              <td class="a">FFP AB Rh N(AB-): {this.props.ffp_ABneg}</td>
            </tr>
            <tr>
              <td class="a">PC AB Rh P(AB+): {this.props.pc_ABpos}</td>
            </tr>
            <tr>
              <td class="a">PC AB Rh N(AB-): {this.props.pc_ABneg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BloodbankAB;
