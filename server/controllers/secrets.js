const Secret = require('../models/secret');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const secrets = await Secret.all;
        res.status(200).json({data: secrets})
    } catch (err) {
        res.status(500).json({ error: err})
    }
});

router.post('/', async (req, res) => {
    try {
        const secret = await Secret.create(req.body)
        res.status(201).json(secret)
    }
})

module.exports = router;
