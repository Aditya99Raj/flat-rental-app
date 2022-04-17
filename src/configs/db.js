const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://masai:masai@apartmentmange.a6ubt.mongodb.net/finalDB?retryWrites=true&w=majority")
}