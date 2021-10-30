const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', async(req, res) => {
    try {

        // fetch all the aliens from db and send 
        const aliens = await Alien.find();
        res.json(aliens);

    }catch(err) {
        res.send('Err: ', err);
    }
})

module.exports = router