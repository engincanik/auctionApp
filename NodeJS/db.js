const mongoose = require('mongoose');
//I used a collection named CaseDB. In case of db changes, change here.
mongoose.connect('mongodb://localhost:27017/CaseDB', (err) => {
    if (!err){
        console.log('MongoDB connection succeeded!');
    }else{
        console.log('Error in DB connection: ' + JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;