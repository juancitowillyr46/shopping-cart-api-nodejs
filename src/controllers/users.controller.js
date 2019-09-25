const express = require('express');

const userService = require('../services/users.service');
exports.getUsers = async(req, res) => {
    try {
        const success = await userService.getUsers();
        res.status(200).send({
            data: success
        });
    } catch (err) {
        res.status(404).send({
            error: err
        });
    }
};

exports.getUserById = async(req, res) => {
    try {
        const success = await userService.getUserById(req.params.id);
        res.status(200).send({
            data: success
        });
    } catch (err) {
        res.status(404).send({
            error: err
        });
    }
};

exports.postUser = async(req, res) => {

    try {

        const success = await userService.postUser(req.body);

        if (success === true) {
            res.status(201).send({
                message: `POST Request Successfull`,
                params: null,
                request: req.body
            });
        } else {
            res.status(400).send({
                message: `Failed POST Request Successfull`
            });
        }

    } catch (err) {

        res.status(404).send({
            error: err
        });

    }

};

exports.putUser = async(req, res) => {
    try {
        const success = await userService.putUser(req.params.id, req.body);
        if (success === true) {
            res.status(200).send({
                message: `PUT Request Successfull`
            });
        } else {
            res.status(400).send({
                message: `Failed PUT Request Successfull`
            });
        }
    } catch (err) {
        res.status(404).send({
            error: err.message
        });
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const success = await userService.deleteById(req.params.id, req.body);
        if (success === true) {
            res.status(200).send({
                message: `DELETE Request Successfull`
            });
        } else {
            res.status(400).send({
                message: `Failed DELETE Request Successfull`
            });
        }
    } catch (err) {
        res.status(404).send({
            error: err.message
        });
    }
};

exports.login = async(req, res) => {

    try {
        const isToken = await userService.findByCredentials(req.body);
        if (isToken !== null) {
            res.header('token', isToken);
            res.status(200).send({
                data: isToken
            });
        } else {
            res.status(400).send({
                message: `Failed Login Request Successfull`
            });
        }
    } catch (err) {
        res.status(404).send({
            error: err.message
        });
    }
}