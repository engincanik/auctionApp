const mongoose = require('mongoose');

var Bid = mongoose.model('Bid',{
    userName: {type: String},
    bidAmount: {type: Number},
    date: {type: Date, default:Date.now}
});

module.exports = { Bid }; 