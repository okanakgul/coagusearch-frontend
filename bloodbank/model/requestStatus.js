var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var req_status_item = new Schema({
    id : {type:Number, default: -1},
    req_status: {type:String, default: "Not Specified!"}    
});

module.exports = mongoose.model('RequestStatusItem', req_status_item);
