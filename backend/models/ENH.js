var mongoose = require('mongoose');



//motorista
const deliveryManSchema = new mongoose.Schema({
    admitted: Boolean,
    fullname: String,
    email: String,
    password: String,
    token: String,
});

//client
const clientSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    token: String,
    cart: [cart_product],
});

//Admin
const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    token: String,
});

const cart_product = new mongoose.Schema({
    product_id: String,
    amount: Number,
});


//Ordenes


const orderSchema = new mongoose.Schema({
    business_id: String,
    client_id: String,
    delivey_man_id: String,
    delivery_state: String,
    location: locationSchema,
    payment_info: paymentInfoSchema,
    order_products: [orderProductSchema]
});

const orderProductSchema = new mongoose.Schema({
    product_id: String,
    amount: Number,
});

const locationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
});

const paymentInfoSchema = new mongoose.Schema({
    card_number: Number,
    cvv: Number,
    expired_date: String,
});

//Categorias

var categorySchema = new mongoose.Schema({
    name: String,
    logo: String,
    business_list: [businessSchema],
});


const businessSchema = new mongoose.Schema({
    name: String,
    logo: String,
    banner: String,
    description: String,
    rating: Number,
    phone_number: String,
    products: [productsSchema]
});

const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
});




module.exports = mongoose.model('categorias', categorySchema)