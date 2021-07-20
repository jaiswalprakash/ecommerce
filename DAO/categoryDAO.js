const categoryModel = require('../model/category');
const productModel = require('../model/product');
const categoryDAO = {
    insertCategory: async (bodyData) => {

        let insert = categoryModel.insertMany(
            {
                name: bodyData.name,
                description: bodyData.description,
                parentId: bodyData.parentId

            });
        return insert;
    },
    getCategory: async (bodyData) => {
        let data = await categoryModel.find().
            populate({
                path: 'parentId',
                select: {  name:1, parentId:1, _id: 0,}
            }). populate({
                path: 'parentId.$.parentId',
                select: {  name:1, parentId:1, _id: 0,}
            });
            return data 
    },
    updateCategory: async (bodyData) => {
        let data = await categoryModel.updateOne({ _id: bodyData._id }, { $set: { name: bodyData.name, description: bodyData.description } });
        if (!data) {
            return 0;
        }
        else {
            return data;
        }
    },
    deleteCategory: async (bodyData) => {

        let data = await categoryModel.deleteOne({ _id: bodyData.categoryId });
        await productModel.deleteMany({ categoryId: bodyData.categoryId });
        return data;

    },


}
module.exports = categoryDAO;

