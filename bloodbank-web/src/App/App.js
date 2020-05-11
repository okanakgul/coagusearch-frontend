import React, { Component } from "react";
import logo from "./logo.jpg";
import brandLogo from "../images/logo.jpg";
import "./App.css";
import HttpService from "../services/http-service";
import Bloodreq from "../bloodreq/bloodreq";
//import Bloodbank from "../bloodbank/bloodbank";
import Details from "../details/details";
import BloodbankA from "../bloodbank/bloodbankA";
import Bloodbank0 from "../bloodbank/bloodbank0";
import BloodbankAB from "../bloodbank/bloodbankAB";
import BloodbankB from "../bloodbank/bloodbankB";

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { bloodbank: [], bloodreq: [], details: [] };
    //Bind Functions
    this.loadBloodReqs = this.loadBloodReqs.bind(this);
    this.loadBloodReqs();

    this.loadBloodReqsToOrder = this.loadBloodReqsToOrder.bind(this);
    this.loadBloodReqsToOrder();

    this.loadBloodBank = this.loadBloodBank.bind(this);
    this.loadBloodBank();

    var self = this;

    setTimeout(function afterOneSeconds() {
      self.bloodreqList = self.bloodreqList.bind(self);
      self.bloodbankList0 = self.bloodbankList0.bind(self);
      self.bloodbankListA = self.bloodbankListA.bind(self);
      self.bloodbankListB = self.bloodbankListB.bind(self);
      self.bloodbankListAB = self.bloodbankListAB.bind(self);

      var orderedList = self.state.bloodreq.sort();
      orderedList = orderedList.reverse();
    }, 1000);
  }

  loadBloodReqsToOrder = () => {
    var self = this;
    http.getBloodReqs().then(
      bloodreqs => {
        self.setState({ bloodreq: bloodreqs });
      },
      err => {}
    );
  };

  loadBloodReqs = () => {
    var self = this;
    setInterval(function() {
      http.getBloodReqs().then(
        bloodreqs => {
          self.setState({ bloodreq: bloodreqs });
          var orderedList = self.state.bloodreq.sort();
          orderedList = orderedList.reverse();
          self.setState({ bloodreq: orderedList });
        },
        err => {}
      );
    }, 1000);
  };

  loadBloodBank = () => {
    var self = this;
    setInterval(function() {
      http.getBloodBank().then(
        data => {
          self.setState({ bloodbank: data });
        },
        err => {}
      );
    }, 1000);
  };

  bloodbankList0 = () => {
    const list = this.state.bloodbank.map(bloodbank => (
      <div key={bloodbank._id}>
        <Bloodbank0
          ffp_0pos={bloodbank.ffp_0pos}
          ffp_0neg={bloodbank.ffp_0neg}
          pc_0pos={bloodbank.pc_0pos}
          pc_0neg={bloodbank.pc_0neg}
        />
      </div>
    ));
    return list;
  };

  bloodbankListA = () => {
    const list = this.state.bloodbank.map(bloodbank => (
      <div key={bloodbank._id}>
        <BloodbankA
          ffp_Apos={bloodbank.ffp_Apos}
          ffp_Aneg={bloodbank.ffp_Aneg}
          pc_Apos={bloodbank.pc_Apos}
          pc_Aneg={bloodbank.pc_Aneg}
        />
      </div>
    ));
    return list;
  };

  bloodbankListB = () => {
    const list = this.state.bloodbank.map(bloodbank => (
      <div key={bloodbank._id}>
        <BloodbankB
          ffp_Bpos={bloodbank.ffp_Bpos}
          ffp_Bneg={bloodbank.ffp_Bneg}
          pc_Bpos={bloodbank.pc_Bpos}
          pc_Bneg={bloodbank.pc_Bneg}
        />
      </div>
    ));
    return list;
  };

  bloodbankListAB = () => {
    const list = this.state.bloodbank.map(bloodbank => (
      <div key={bloodbank._id}>
        <BloodbankAB
          ffp_ABpos={bloodbank.ffp_ABpos}
          ffp_ABneg={bloodbank.ffp_ABneg}
          pc_ABpos={bloodbank.pc_ABpos}
          pc_ABneg={bloodbank.pc_ABneg}
        />
      </div>
    ));
    return list;
  };

  bloodreqList = () => {
    const list = this.state.bloodreq.map(bloodreq => (
      <div className="col-sm" key={bloodreq._id}>
        <Bloodreq
          req_date={bloodreq.req_date}
          req_time={bloodreq.req_time}
          blood_type_name={bloodreq.blood_type_name}
          units={bloodreq.units}
          requester_name={bloodreq.requester_name}
          req_status={bloodreq.req_status}
          needUpdate={bloodreq.isUpdated}
        />
      </div>
    ));
    return list;
  };

  render() {
    return (
      <div className="App-main">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="" />
        </div>

        <div id="home">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-3"></div>
              <div class="col-md-7 col-sm-9"></div>
            </div>
          </div>
        </div>

        <div class="divider">
          <div class="container ">
            <div class="row ">
              <div class="col">
                <div class="divider-wrapper divider-one">
                  {this.bloodbankList0()}
                </div>
              </div>
              <div class="col">
                <div class="divider-wrapper divider-two">
                  {this.bloodbankListA()}
                </div>
              </div>
              <div class="col">
                <div class="divider-wrapper divider-three">
                  {this.bloodbankListB()}
                </div>
              </div>
              <div class="col">
                <div class="divider-wrapper divider-fourth">
                  {this.bloodbankListAB()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Details />
          {this.bloodreqList()}
        </div>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-4">
                <img src={brandLogo} class="img-responsive" alt="logo" />
                <p>
                  This site has been developed for simulation.
                  <a
                    rel="nofollow"
                    href="https://ku.blackboard.com/webapps/login/"
                    target="_parent"
                  >
                    {" "}
                    Click here{" "}
                  </a>
                  to reach KU Blackboard.
                </p>

                <p>
                  <i class="fa fa-phone"></i>{" "}
                  <a rel="nofollow" href="tel:+905076842914" target="_parent">
                    {" "}
                    +90 507 684 2914{" "}
                  </a>
                </p>

                <p>
                  <i class="fa fa-envelope-o"></i>{" "}
                  <a
                    rel="nofollow"
                    href="mailto:bogobogotech@gmail.com"
                    target="_parent"
                  >
                    {" "}
                    bogobogotech@gmail.com{" "}
                  </a>
                </p>
                <p>
                  <i class="fa fa-globe"></i>{" "}
                  <a
                    rel="nofollow"
                    href="https://www.ku.edu.tr/en/"
                    target="_parent"
                  >
                    {" "}
                    www.ku.edu.tr{" "}
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-sm-4">
                <h3>Useful Links</h3>
                <p>
                  <a href="https://ku.blackboard.com/webapps/login/">
                    KU Blackboard
                  </a>
                </p>
                <p>
                  <a href="https://kusis.ku.edu.tr/">Kusis</a>
                </p>
                <p>
                  <a href="https://kocuni.hosted.panopto.com/">KU Panopto</a>
                </p>
                <p>
                  <a href="https://kuttam.ku.edu.tr/">KUTTAM</a>
                </p>
              </div>

              <div class="col-md-4 col-sm-4 newsletter">
                <h3>Notes</h3>
                <p>
                  In case of emergency please do not hesitate to contact us.
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <p>Copyright © 2020 Bogobogo Tech</p>
              </div>
              <div class="col-md-6 col-sm-6">
                <ul class="social-icons">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/bogobogo-tech"
                      class="fab fa-linkedin"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/bogobogotech"
                      class="fab fa-facebook-square"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.ku.edu.tr/en/"
                      class="fas fa-university"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://kuh.ku.edu.tr/tr"
                      class="fas fa-clinic-medical"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="mailto:bogobogotech@gmail.com"
                      class="fa fa-envelope-o"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
