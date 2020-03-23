import React, { Component } from "react";
import "./bloodbank.css";

class BloodbankA extends Component {
  render() {
    return (
      <div>
        <table class="table b">
          <tbody>
            <tr>
              <td className="b">BLOOD A</td>
            </tr>
            <tr>
              <td class="a">FFP A Rh P(A+): {this.props.ffp_Apos}</td>
            </tr>
            <tr>
              <td class="a">FFP A Rh N(A-): {this.props.ffp_Aneg}</td>
            </tr>
            <tr>
              <td class="a">PC A Rh P(A+): {this.props.pc_Apos}</td>
            </tr>
            <tr>
              <td class="a">PC A Rh N(A-): {this.props.pc_Aneg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BloodbankA;
