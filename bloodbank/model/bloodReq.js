var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blood_req_item = new Schema({ 
    id: {type:Number, default: -1},
    //req_date: {type:Number, default: Date()},
    //req_time: Date,
    blood_type: {type:String, default: "Not Specified!"},
    units: {type:Number, default: -1},
    //requester_name: {type:String, default: "Not Specified!"},   
    req_status: {type:String, default: "Not Specified!"}    
});

module.exports = mongoose.model('BloodRequestItem', blood_req_item);

