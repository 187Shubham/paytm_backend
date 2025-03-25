const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
    {
accountNumber : {
        type: String,
        required : true,
        unique : true
},
accountholder : {
    type : string ,
    required : true
},
balance : {
    type : Number,
    default : 0
},
createdAt : {
type : Date,
default : Date.now
}
    });

    Module.expors = mongoose.model('account' , accountSchema);