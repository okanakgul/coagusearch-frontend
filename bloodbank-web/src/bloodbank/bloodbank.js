import React, { Component } from 'react'
import './bloodbank.css';

class Bloodbank extends Component {
    render() {
        return (
            <table
                className="b"
                border="0">
                <tbody>

                    <tr>
                        <td>FFP 0 Rh P(0+): {this.props.ffp_0pos}</td>
                        <td>FFP A Rh N(A+): {this.props.ffp_Apos}</td>
                        <td>FFP B Rh N(B+): {this.props.ffp_Bpos}</td>
                        <td>FFP AB Rh N(AB+): {this.props.ffp_ABpos}</td>
                    </tr>

                    <tr>
                        <td>FFP 0 Rh N(0-): {this.props.ffp_0neg}</td>
                        <td>FFP A Rh N(A-): {this.props.ffp_Aneg}</td>
                        <td>FFP B Rh N(B-): {this.props.ffp_Bneg}</td>
                        <td>FFP AB Rh N(AB-): {this.props.ffp_ABneg}</td>
                    </tr>

                    <tr>
                        <td>PC 0 Rh N(0+): {this.props.pc_Apos}</td>
                        <td>PC A Rh N(A+): {this.props.pc_Apos}</td>
                        <td>PC B Rh N(B+): {this.props.pc_Bpos}</td>
                        <td>PC AB Rh N(AB+): {this.props.pc_ABpos}</td>
                    </tr>

                    <tr>
                        <td>PC 0 Rh N(0-): {this.props.pc_0neg}</td>
                        <td>PC A Rh N(A-): {this.props.pc_Aneg}</td>
                        <td>PC B Rh N(B-): {this.props.pc_Bneg}</td>
                        <td>PC AB Rh N(AB-): {this.props.pc_ABneg}</td>
                    </tr>
                </tbody>

            </table>

        )
    }
}

export default Bloodbank;