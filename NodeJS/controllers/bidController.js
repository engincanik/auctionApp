const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Bid } = require('../models/bid');


// => localhost:3000/bids/
// to get data from db
router.get('/', (req, res) => {
    Bid.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Bids: ' + JSON.stringify(err, undefined, 2)); }
    });
});
// to post data to db
router.post('/', (req, res) => {
    var bid = new Bid({
        userName: req.body.userName,
        bidAmount: req.body.bidAmount,
    });
    bid.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Bid Save: ' + JSON.stringify(err, undefined, 2)); }
    });
});


//In case of update 
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    var bid = {
        userName: req.body.userName,
        bidAmount: req.body.bidAmount,
        date: req.body.date,
    };
    Bid.findByIdAndUpdate(req.params.id, { $set: bid }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log }
    })
});
//Delete all documents in a collection,MongoDB
router.delete('/', (req, res) => {
    Bid.deleteMany((err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log('Error in Delete :' + JSON.stringify(err, undefined, 2)); }
    })
});

module.exports = router;