var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    offerPercentage: {
        type: Number,
        default: 0
    },
});
module.exports = mongoose.model("product", productSchema)