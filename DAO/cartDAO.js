const cartModel = require('../model/cart');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
var arr = [];

const cartDAO = {
    addToCart: async (bodyData) => {
        arr.push(bodyData.productId)
        localStorage.setItem('cart', arr);
        return localStorage.getItem('cart');
    },
    addToMyCart: async (bodyData) => {

        let data = await cartModel.find({ userId: bodyData.userId });
        if (data.length > 0) {
            let data = await cartModel.updateOne({ userId: bodyData.userId }, { $addToSet: { productId: bodyData.productId } });
            return data;
        }
        else {
            let data = await cartModel.insertMany({
                userId: bodyData.userId,
                productId: bodyData.productId

            });
            return data;
        }

    },
}

module.exports = cartDAO;