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
        console.log("Post call - req.body: ", req.body)
        const secret = await Secret.create(req.body)
        res.status(201).json(secret)
    } catch (err) {
        res.status(422).json({ error: err})
    }
})

router.get('/:id', async (req,res) => {
    try {
        const secret = await Secret.findById(req.params.id);
        res.status(200).json(secret)
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
