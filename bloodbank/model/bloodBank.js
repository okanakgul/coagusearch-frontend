var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bloodbank_item = new Schema({ 
    //FFP (fresh frozen plasma=taze donmuş plazma)
    _id: {type: Number, default: 0}, 
    ffp_0pos: {type: Number, default: 1000},
    ffp_0neg: {type: Number, default: 1000},
    ffp_Apos: {type: Number, default: 1000},
    ffp_Aneg: {type: Number, default: 1000},
    ffp_Bpos: {type: Number, default: 1000},
    ffp_Bneg: {type: Number, default: 1000},
    ffp_ABpos: {type: Number, default: 1000},
    ffp_ABneg: {type: Number, default: 1000},

    // Platelet concentrate (platelet süspansiyonu)
    pc_0pos: {type: Number, default: 1000},
    pc_0neg: {type: Number, default: 1000},
    pc_Apos: {type: Number, default: 1000},
    pc_Aneg: {type: Number, default: 1000},
    pc_Bpos: {type: Number, default: 1000},
    pc_Bneg: {type: Number, default: 1000},
    pc_ABpos: {type: Number, default: 1000},
    pc_ABneg: {type: Number, default: 1000}, 
});

module.exports = mongoose.model('BloodBankItem', bloodbank_item);
