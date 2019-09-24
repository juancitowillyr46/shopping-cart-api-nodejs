const userService = require('../services/users.service');

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