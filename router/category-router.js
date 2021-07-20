const express = require('express');
const route = express.Router();
const categoryDAO = require('../DAO/categoryDAO');
const { Router } = require('express');



route.post('/insertCategory', async function (req, res) {

    try {
        let data = await categoryDAO.insertCategory(req.body);
        console.log(data);
        if (data && data.length > 0) {
            res.send('data stored in category')
        }
        else {
            res.send('error');
        }
    } catch (error) {
        res.send('something went wrong');
    }

});
route.patch('/updateCategory', async function (req, res) {
    try {
        let data = await categoryDAO.updateCategory(req.body);
        if (data) {
            res.status(200).send("recorded updated")
        }
        else {
            res.send('Error');
        }

    } catch (error) {
        res.send("something went wrong")
    }

});

route.delete('/deleteCategory', async function (req, res) {

    try {
        let data = await categoryDAO.deleteCategory(req.body);
        if (data) {
            res.status(200).send("deleted")
        }
        else {
            res.send('Error');
        }
    } catch (error) {
        res.send("something went wrong");
    }
});

route.get('/getCategory', async function (req, res) {
    try {
        let data = await categoryDAO.getCategory();
        if (data) {
            res.status(200).send(data)
        }
        else {
            res.send('Error');
        }
    } catch (error) {
        res.send("something went wrong");
    }
})



module.exports = route;