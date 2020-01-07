const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items:[{
        product:{type:Object,required:true},
        qty:{type:Number,required:true}
    }],
    user:{
        name:{
            type:String,
            required:true
        },
        userId:{type:Schema.Types.ObjectId,required:true,ref:'User'},
        email:{type:String,required:true}
    }
})

module.exports = mongoose.model('Order',orderSchema);