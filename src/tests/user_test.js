const mocha = require('mocha');
const assert = require('assert');
const UserChar = require('../models/userModel').User;
const cn = require('../config/db');

mocha.describe('POST /users', () => {
    mocha.before((done) => {
        console.log(`Aplicando prueba de conexión`);
        cn.connect();
        done();
    })
    mocha.after((done) => {
        cn.close();
        done();
    });

    mocha.it('OK, creating a new user', (done) => {
        var user = new UserChar({
            username: `Juan`,
            password: `12345678`,
            email: `juan.rodas.manez`,
            fullname: `Juan Wilfredo`
        });
        user.save().then(() => {
            assert(user.isNew === false);
            done();
        });
    });
});