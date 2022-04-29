const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const apiSchema = new Schema({
    API: String,
    Description: String,
    Auth: String,
    HTTPS: String,
    Cors: String,
    Auth: String,
    Link: String,
    Category: String,
});
//Model
const API_model = mongoose.model('api_model',apiSchema); 

module.exports = API_model;