var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema =  new Schema({
    
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    parentId:{
        type: Schema.Types.ObjectId,
        ref: 'category',
    }
   
})
module.exports = mongoose.model("category",categorySchema);