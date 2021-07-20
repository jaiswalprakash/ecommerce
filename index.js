const express = require('express');
var mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');



// -------connection for database-----------//

const mongoDB = 'mongodb://localhost/e-commerce'; // create the mooc database 
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Mongodb connected successfully');
});

//----------------bodyParser for post---------------//


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//  --------------routing----------------------- //

app.use('/product', require('./router/product-router'));
app.use('/category', require('./router/category-router'));
app.use('/user', require('./router/user-router'));
app.use('/cart', require('./router/cart-router'));
app.use('/order', require('./router/order-router'));

// ----------- defining port number------------//

app.listen(3000, () => {
    console.log("listening to the port 3000");
});