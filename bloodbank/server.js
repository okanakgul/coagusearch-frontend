var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/bloodbank');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/";

var BloodReq = require('./model/bloodReq');
var BloodBank = require('./model/bloodBank');
var ReqStatus = require('./model/requestStatus');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var bloodbank;


function uploadBloodbank() {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("bloodbank");
    var query = { _id: 0 };
    dbo.collection("bloodbankitems").find(query).toArray(function (err, result) {
      if (err) throw err;
      bloodbank = result[0];
      //console.log(bloodbank);
      db.close();
    });
  });
}

uploadBloodbank();




app.post('/bloodbank', function (request, response) {
  var bloodbank1 = new BloodBank();
  bloodbank1.save(function (err, savedBloodbank) {
    if (err) {
      response.status(500).send("Could not save the BloodBank!");
    }
    else {
      response.status(200).send(savedBloodbank);
    }
  });
});

app.post('/bloodReq', function (request, response) {
  var status = new ReqStatus();
  var blood_req = new BloodReq();
  blood_req.id = request.body.id;
  status.id = request.body.id;
  blood_req.blood_type = request.body.blood_type;
  blood_req.units = request.body.units;
  switch (request.body.blood_type) {


    case "ffp_0pos":
      if (request.body.units <= bloodbank.ffp_0pos) {
        status.req_status = "CONFIRMED!";
        bloodbank.ffp_0pos = bloodbank.ffp_0pos - request.body.units;
        blood_req.req_status = status.req_status;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "ffp_0neg":
      if (request.body.units <= bloodbank.ffp_0pos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.ffp_0neg = bloodbank.ffp_0neg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "ffp_Apos":
      if (request.body.units <= bloodbank.ffp_Apos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.ffp_Apos = bloodbank.ffp_Apos - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;

    case "ffp_Aneg":
      if (request.body.units <= bloodbank.ffp_Aneg) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.ffp_Aneg = bloodbank.ffp_Aneg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;

    case "ffp_Bpos":
      if (request.body.units <= bloodbank.ffp_Bpos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.ffp_Bpos = bloodbank.ffp_Bpos - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "ffp_Bneg":
      if (request.body.units <= bloodbank.ffp_Bneg) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.ffp_Bneg = bloodbank.ffp_Bneg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "ffp_ABpos":
      if (request.body.units <= bloodbank.ffp_ABpos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.ffp_ABpos = bloodbank.ffp_ABpos - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "ffp_ABneg":
      if (request.body.units <= bloodbank.ffp_ABneg) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.ffp_ABneg = bloodbank.ffp_ABneg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_0pos":
      if (request.body.units <= bloodbank.pc_0pos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_0pos = bloodbank.pc_0pos - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_0neg":
      if (request.body.units <= bloodbank.pc_0neg) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_0neg = bloodbank.pc_0neg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_Apos":
      if (request.body.units <= bloodbank.pc_Apos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_Apos = bloodbank.pc_Apos - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_Aneg":
      if (request.body.units <= bloodbank.pc_Aneg) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_Aneg = bloodbank.pc_Aneg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_Bpos":
      if (request.body.units <= bloodbank.pc_Bpos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_Bpos = bloodbank.pc_Bpos - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_Bneg":
      if (request.body.units <= bloodbank.pc_Bneg) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_Bneg = bloodbank.pc_Bneg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_ABpos":
      if (request.body.units <= bloodbank.pc_ABpos) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_ABpos = bloodbank.pc_ABpos - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
    case "pc_ABneg":
      if (request.body.units <= bloodbank.pc_ABneg) {
        status.req_status = "CONFIRMED!";
        blood_req.req_status = status.req_status;
        bloodbank.pc_ABneg = bloodbank.pc_ABneg - request.body.units;
      }
      else {
        status.req_status = "Rejected (Lack of Source)!";
        blood_req.req_status = status.req_status;
      }
      break;
  }

  blood_req.save(function (err, savedBloodReq) {
    if (err) {
      response.status(500).send({ error: "Could not save blood" });
    }
    else {
      status.save();
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("bloodbank");
        var myquery = { _id: 0 };
        dbo.collection("bloodbankitems").update(myquery, bloodbank, function (err,) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });
      });
      response.status(200).send(status);
    }
  });


});


app.get('/bloodReq', function (request, response) {
  BloodReq.find({}, function (err, blood_reqs) {
    if (err) {
      response.status(500).send({ error: "Could not fetch bloodReqs" });
    } else {
      response.send(blood_reqs);

    }
  });

});




setTimeout(function afterTwoSeconds() {
  app.listen(3004, function () {
    console.log(bloodbank);
    console.log("Blood bank running on port 3004");
  });
}, 2000)

/*app.listen(3004, function () {
  console.log(bloodbank);
  console.log("Blood bank running on port 3004");
});*/


