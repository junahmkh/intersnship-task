// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080; 

const routes = require('./routes/api');

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://junahmkh:2522aysha@cluster0.abduh.mongodb.net/entries?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);
app.listen(PORT, console.log(`Server is started at ${PORT}`));
