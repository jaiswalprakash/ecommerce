const jwt = require('jsonwebtoken');
const User  = require('../model/user')

const auth = async (req, res, next) => {
    try {
       
        const token = req.header('Authorization').replace('Bearer ', ''); // we get the token that is send by user user in token variable 
       
        const decoded = jwt.verify(token, 'thisIsNewUser');

        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!user) {
            throw new error()
        }
       req.user = user;
       req.token = token
       
        next();
    } catch (e) {
        res.status(401).send({ error: "please authenticate" })

    }

}

module.exports = auth;