const orderModule = require('../model/order');
const productModule = require('../model/product');

const orderDAO = {
    placeOrder: async (bodyData) => {
       var data = await productModule.findOne({_id:bodyData.productId});
       var today = new Date();
       let finalDate = today.getFullYear() + '/ ' + (today.getMonth() + 1) + '/ ' + today.getDate();
       return new orderModule({
           userId:bodyData.userId,
           productName:data.name,
           productDescription: data.productDescription,
           price:((100-data.offerPercentage)/100 *data.price),
           categoryId:data.categoryId,
           quantity:bodyData.quantity,
           address:bodyData.address,
           status:bodyData.status,
           orderedDate:today
       }).save();
    },
    getProduct: async (bodyData) => {
        let data = await orderModule.find({ userId: bodyData });
        return data ;
    },
};

module.exports = orderDAO;