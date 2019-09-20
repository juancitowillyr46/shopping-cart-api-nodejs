const mocha = require('mocha');
const assert = require('assert');
const userModel = require('../models/user.model').User;
const roleModel = require('../models/role.model').Role;
const statusModel = require('../models/status.model').Status;
const cn = require('../config/db');

mocha.describe('POST /users', () => {
    mocha.before((done) => {
        cn.connect();
        done();
    })
    mocha.after((done) => {
        cn.close();
        done();
    });

    mocha.it('OK, creating a new status', (done) => {
        const status = new statusModel({
            name: `Activo`,
            status: true,
            clientkey: `ACTIVE`
        });
        status.save().then(() => {
            assert(status.isNew === false);
            done();
        });
    });

    mocha.it('OK, creating a new role', (done) => {

        const role = new roleModel({
            name: `Usuario Registrado`,
            clientkey: `USER_REGISTER`,
            status: true
        });
        role.save().then(() => {
            assert(role.isNew === false);

            done();
        });
    });

    mocha.it('OK, creating a new user', async(done) => {

        let role = await roleModel.findOne({ clientkey: 'USER_REGISTER' });
        let status = await statusModel.findOne({ clientkey: 'ACTIVE' });
        // let arrRole = [];

        console.log(role);
        console.log(status);


        const user = new userModel({
            username: `Juan`,
            password: `12345678`,
            email: `juan.rodas.manez@gmail.com`,
            fullname: `Juan Wilfredo`,
            status: status,
            isverified: true
        });
        done();

        user.roles.push(role);


        let saveUser = await user.save();
        console.log(saveUser);

        return new Promise(resolve => resolve());




    });


});