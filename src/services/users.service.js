const userModel = require('../models/user.model').User;
const roleModel = require('../models/role.model').Role;
const statusModel = require('../models/status.model').Status;
const bycryptjs = require('bcryptjs');

exports.postUser = async(userDTO) => {

    try {

        const role = await roleModel.findOne({ clientkey: 'USER_REGISTER' });
        const status = await statusModel.findOne({ clientkey: 'ACTIVE' });

        const passwordEncrypt = await bycryptjs.hash(userDTO.password, 10);

        const user = new userModel({
            username: userDTO.username,
            password: passwordEncrypt,
            email: userDTO.email,
            fullname: userDTO.fullname,
            status: status,
            isverified: true
        });

        user.roles.push(role);

        let saveUser = await user.save();

        return (saveUser !== null) ? true : false;

    } catch (err) {
        console.log(err);
        throw new Error();
    }

};

exports.getUsers = async() => {
    try {
        return await userModel.find({});
    } catch (err) {
        console.log(err);
        throw new Error();
    }
}

exports.getUserById = async(id) => {
    try {
        return await userModel.findById(id);
    } catch (err) {
        console.log(err);
        throw new Error();
    }
}

exports.putUser = async(id, body) => {
    try {
        let updateUser = await userModel.findOneAndUpdate({ _id: id }, body);
        return (updateUser !== null) ? true : false;
    } catch (err) {
        console.log(err);
        throw new Error();
    }
}

exports.deleteById = async(id, data) => {
    try {
        let getStatus = await statusModel.findOne({ clientkey: data.status });
        let updateUser = await userModel.findOneAndUpdate({ _id: id }, { status: getStatus });
        return (updateUser !== null) ? true : false;
    } catch (err) {
        console.log(err);
        throw new Error();
    }
}

exports.findByCredentials = async(loginDTO) => {
    try {
        const updateUser = await userModel.findOne({ email: loginDTO.username });
        if (updateUser !== null) {
            const success = await bycryptjs.compare(loginDTO.password, updateUser.password);
            return (success !== null) ? true : false;
        }

    } catch (err) {
        console.log(err);
        throw new Error();
    }
}