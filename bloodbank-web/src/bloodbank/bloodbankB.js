import React, { Component } from "react";
import "./bloodbank.css";

class BloodbankB extends Component {
  render() {
    return (
      <div>
        <table class="table c">
          <tbody>
            <tr>
              <td className="b">BLOOD B</td>
            </tr>
            <tr>
              <td class="a">FFP B Rh P(B+): {this.props.ffp_Bpos}</td>
            </tr>
            <tr>
              <td class="a">FFP B Rh N(B-): {this.props.ffp_Bneg}</td>
            </tr>
            <tr>
              <td class="a">PC B Rh P(B+): {this.props.pc_Bpos}</td>
            </tr>
            <tr>
              <td class="a">PC B Rh N(B-): {this.props.pc_Bneg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BloodbankB;
