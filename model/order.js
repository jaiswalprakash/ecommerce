var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    quantity: {
        type: Number,
        require: true,
        default: 1
    },
    address: {
        type: String,
        require: true
    },
    status: {
        type: Number
    },
    orderedDate: {
        type: String
    },
});

module.exports = mongoose.model("order", orderSchema);