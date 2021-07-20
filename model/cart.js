const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var cartModule = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    productId: [{
        type: Schema.Types.ObjectId, 
        ref: "product",
        required: true
    }],

});

module.exports = mongoose.model("cart", cartModule)