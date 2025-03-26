const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        fromAccount :{
            type: mongoose.Schema.types.ObjectId,
            ref: 'Account',
            required : true
        },
        toAccount : {
          type : mongoose.Schema.Type.objectId,
          ref : 'Account',
          required :true
        },
        amount : {
            type: Number,
            required: true
        },
        type : {
            type : string ,
            enum : ['TRANSFER' , 'DEPOST' , 'WITHDRAWAL'],
            required : true
        },
        timeStamp:{
         type : Date,
         default: Date.now
        }
    }
)

module.exports = mongoose.model( transaction ,transactionSchema);