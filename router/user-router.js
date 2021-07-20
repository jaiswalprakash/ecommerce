const express = require('express');
const route = express.Router();
const userDAO = require('../DAO/userDAO');
const auth = require('../middleware/auth')

route.post('/signUp', async function (req, res) {
    try {
        console.log(req.body);
        let data = await userDAO.create(req.body);
        const token = await userDAO.generateAuthToken(data);
        if (data) {
            res.status(200).send(data)

        } else {
            res.status(400).send("something went wrong");
        }
    } catch (error) {

    }
});
route.post('/login', async function (req, res) {
    try {
        console.log(req.body);
        let data = await userDAO.login(req.body);
        const token = await userDAO.generateAuthToken(data);
        if (data) {
            res.status(200).send(data);

        } else {
            res.status(404).send('error');
        }
    } catch (error) {
        res.status(500).send("error")
    }
});
route.post('/logout', auth, async function (req, res) {

    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.status('200').send("logout successfully");
    } catch (error) {
        res.status(500).send("error")

    }
});

route.post('/logoutAll', auth, async function (req, res) {

    try {
        req.user.tokens = [];
        await req.user.save()
        res.status('200').send("logout from all  successfully");
    } catch (error) {
        res.status(500).send("error")

    }
});

module.exports = route;