import React, { Component } from "react";
import "./bloodbank.css";

class Bloodbank extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-header">BLOOD BANK STORAGE</div>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Type 0 Blood</th>
              <th>Type A Blood</th>
              <th>Type B Blood</th>
              <th>Type AB Blood</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="a">FFP 0 Rh P(0+): {this.props.ffp_0pos}</td>
              <td class="a">FFP A Rh P(A+): {this.props.ffp_Apos}</td>
              <td class="a">FFP B Rh P(B+): {this.props.ffp_Bpos}</td>
              <td class="a">FFP AB Rh P(AB+): {this.props.ffp_ABpos}</td>
            </tr>

            <tr>
              <td class="a">FFP 0 Rh N(0-): {this.props.ffp_0neg}</td>
              <td class="a">FFP A Rh N(A-): {this.props.ffp_Aneg}</td>
              <td class="a">FFP B Rh N(B-): {this.props.ffp_Bneg}</td>
              <td class="a">FFP AB Rh N(AB-): {this.props.ffp_ABneg}</td>
            </tr>

            <tr>
              <td class="a">PC 0 Rh P(0+): {this.props.pc_Apos}</td>
              <td class="a">PC A Rh P(A+): {this.props.pc_Apos}</td>
              <td class="a">PC B Rh P(B+): {this.props.pc_Bpos}</td>
              <td class="a">PC AB Rh P(AB+): {this.props.pc_ABpos}</td>
            </tr>

            <tr>
              <td class="a">PC 0 Rh N(0-): {this.props.pc_0neg}</td>
              <td class="a">PC A Rh N(A-): {this.props.pc_Aneg}</td>
              <td class="a">PC B Rh N(B-): {this.props.pc_Bneg}</td>
              <td class="a">PC AB Rh N(AB-): {this.props.pc_ABneg}</td>
            </tr>
          </tbody>
        </table>
        <div class="card-footer">
        <h2>FFP: Fresh Frozen Plasma PC: Platelet concentrate</h2>
    </div>
      </div>
    );
  }
}

export default Bloodbank;
