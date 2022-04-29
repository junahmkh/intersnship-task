const express = require('express');
const router = express.Router();
const API_model = require('../models/apiModel');
router.get('/', (req,res) => {
    API_model.find({ })
        .then((data) =>{
            console.log('Data :',data);
            res.json(data);
        })
        .catch((error) =>{
            console.log('error :',error);
        })
    
});

module.exports = router;