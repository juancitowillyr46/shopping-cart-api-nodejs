const userService = require('../services/users.service');
const jwt = require('jsonwebtoken');

exports.validateIdParam = async(req, res, next) => {

    try {
        const success = await userService.getUserById(req.params.id);
        if (success === null) {
            return res.status(404).json({ message: 'No se encontró el registro' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    next();

}

exports.validateToken = async(req, res, next) => {

    try {
        if (!req.headers.authorization) {
            return next(res.status(403).json({ message: 'Not authorized' }));
        } else {
            const token = req.headers.authorization.split(" ")[1];
            await jwt.verify(token, process.env.JWT_KEY, async(err, payload) => {
                if (err) {
                    return res.status(401).json({ message: err.message });
                } else {
                    const user = await userService.getUserById(payload.sub);
                    return res.status(200).json({ data: user });
                }
            });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}