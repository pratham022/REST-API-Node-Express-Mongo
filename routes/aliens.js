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

router.post('/', async(req, res) => {

    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    // const alien = new Alien({
    //     name: "Prathamesh",
    //     tech: "NodeJS"
    // })
    try {
        const a1 = await alien.save();
        res.json(a1);

    }catch(err) {
        res.send('Error!')
    }
})

module.exports = router