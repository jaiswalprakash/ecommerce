var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var offerSchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    offerPercentage: {
        type: Number,
        required: true
    },

    staringDate: {
        type: String,
        required: true,
    },
    endingDate: {
        type: String,
        required: true,
    }
});

module.export = mongoose.model("offer",offerSchema);