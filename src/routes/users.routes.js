const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        message: `GET Request Successfull`
    });
});

router.get('/:id', (req, res) => {
    res.status(200).send({
        message: `GET Request Successfull`,
        params: req.params
    });
});

router.post('/', (req, res) => {
    res.status(200).send({
        message: `POST Request Successfull`
    });
});

router.put('/:id', (req, res) => {
    res.status(200).send({
        message: `PUT Request Successfull`
    });
});

router.delete('/:id', (req, res) => {
    res.status(200).send({
        message: `DELETE Request Successfull`
    });
});

module.exports = router;