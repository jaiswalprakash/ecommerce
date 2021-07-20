const express = require("express");
const cartDAO = require("../DAO/cartDAO");
const route = express.Router();


route.post('/addToMyCart', async function (req, res) {

    try {
        let data = await cartDAO.addToMyCart(req.body);
       
        if (data) {
            res.status(200).send(data);

        } else {
            res.status(400).send("cant added ")
        }
    } catch (error) {
        res.status(400).send("something went wrong ");
    }

});

route.post('/addToCart', async function (req, res) {

    try {
        let data = await cartDAO.addToCart(req.body);
        if (data) {
            res.status(200).send(data);

        } else {
            res.status(400).send("cant added ")
        }
    } catch (error) {
        res.status(400).send("something went wrong ");
    }

});


route.get('/getCartDetail', async function (req, res) {
    try {
        let data = await cartDAO.getCartDetail(req.params);
        if (data) {
            res.status(200).send(data);

        } else {
            res.status(400).send("cant get ")
        }
    } catch (error) {
        res.status(400).send("something went wrong ");
    }
});

module.exports = route;