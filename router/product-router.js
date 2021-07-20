const express = require('express');
const route = express.Router();
const productDAO = require('../DAO/productDAO');


route.post('/insertProduct', async function (req, res) {

    try {
        let data = await productDAO.insertProduct(req.body);
        if (data) {
            res.status(200).send(data)
        }
        else {
            res.send('Error');
        }
    } catch (error) {
        res.send("something went wrong")
    }
});

route.get('/getProduct', async function (req, res) {
    try {
        // console.log(req.params.name)
        let data = await productDAO.getProduct();
        if (data) {
            res.status(200).send(data)
        }
        else {
            res.send('Error');
        }
    } catch (error) {
        res.send("something went wrong")
    }
});
route.post('/setOffer', async function (req, res) {
    try {
        let data = await productDAO.setOffer(req.body);
        if (data) {
            res.status(200).send(data)
        }
        else {
            res.send('Error');
        }
    } catch (error) {
        res.send("something went wrong")
    }
});
module.exports = route;