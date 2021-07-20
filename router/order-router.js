const express = require('express');
const route = express.Router();
const orderDAO = require('../DAO/orderDAO');


route.post('/placeOrder', async function (req, res) {
    try {
        let data = await orderDAO.placeOrder(req.body);
        if (data) {
           res.status(200).send(data);
        } else {
            res.status(500).send('bad request');
        }
    } catch (error) {
        res.send("something went wrong");
    }
});

route.get('/getOrder/:userId', async function (req, res) {
    try {
        let data = await orderDAO.getProduct(req.params.userId)

        if (data) {
            res.status(200).send(data);
        } else {
            res.status(500).send('bad request');
        }
    } catch (error) {
        res.send("something went wrong");
    }
})


module.exports = route;