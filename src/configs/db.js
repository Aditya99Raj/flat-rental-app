const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://aditya:aditya@cluster0.2zxpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}