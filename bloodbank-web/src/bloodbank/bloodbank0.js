import React, { Component } from "react";
import "./bloodbank.css";

class Bloodbank0 extends Component {
  render() {
    return (
      <div>
        <table class="table a">
          <tbody>
            <tr>
              <td className="b">BLOOD 0</td>
            </tr>
            <tr>
              <td class="a">FFP 0 Rh P(0+): {this.props.ffp_0pos}</td>
            </tr>
            <tr>
              <td class="a">FFP 0 Rh N(0-): {this.props.ffp_0neg}</td>
            </tr>
            <tr>
              <td class="a">PC 0 Rh P(0+): {this.props.pc_0pos}</td>
            </tr>
            <tr>
              <td class="a">PC 0 Rh N(0-): {this.props.pc_0neg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Bloodbank0;
