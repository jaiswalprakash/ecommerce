const productModel = require('../model/product');
const categoryModel = require('../model/category');
const productDAO = {

    insertProduct: async function (bodyData) {
        let data = await categoryModel.findOne({ _id: bodyData.categoryId });
        if (data) {
            productId = ('PRO' + Math.floor(Math.random() * 1000))
            let data = productModel.insertMany({
                name: bodyData.name,
                productDescription: bodyData.productDescription,
                price: bodyData.price,
                categoryId: bodyData.categoryId,
                productId: productId,

            });
            return data;
        }
        else {
            return 0;
        }
    },
    getProduct: async function (bodyData) {
        let data = await productModel.find().populate({
            path: "categoryId",
            select: { name: 1 }
        });
        return data;
    },
    setOffer: async (bodyData) => {
        let data = await productModel.updateMany({ categoryId: bodyData.categoryId }, { $set: { offerPercentage: bodyData.offerPercentage } })
        return data;
    },
}
module.exports = productDAO;