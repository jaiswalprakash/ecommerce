const userModel = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userDAO = {
    create: (bodyData) => {
        return new userModel({
            name: bodyData.name,
            password: bodyData.password,
            email: bodyData.email
        }).save();
    },
    login: async function (bodyData) {
        
        try {
            let data = await userModel.findOne({ email: bodyData.email });
            // console.log(data);
            if (!data) {
                throw new error('unable to login');
            }
            const isMatch = await bcrypt.compare(bodyData.password, data.password);
            if (!isMatch) {
                throw new error('unable to login');
            }
            else {
                return data;
            }
        } catch (error) {
            return "error"

        }

    },
     generateAuthToken:async function(bodyData){
        const user =bodyData;
        // console.log('user',user);
        const token =jwt.sign({_id:user._id.toString()},'thisIsNewUser', ); // token is generated 
        //console.log('token',token);
        user.tokens=user.tokens.concat({token:token});// now we concat that token to our model
        await user.save();
        return token;

    },
}

module.exports = userDAO;