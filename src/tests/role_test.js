// const mocha = require('mocha');
// const assert = require('assert');
// const role = require('../models/role.model');
// const cn = require('../config/db');

// mocha.describe('POST /roles', () => {
//     mocha.before((done) => {
//         cn.connect();
//         done();
//     })
//     mocha.after((done) => {
//         cn.close();
//         done();
//     });

//     mocha.it('OK, creating a new role', (done) => {
//         var model = new role.Role({
//             name: `User`,
//             clientkey: `USER`,
//             status: true
//         });
//         model.save().then(() => {
//             assert(model.isNew === false);
//             done();
//         });
//     });
// });

// // mocha.describe('GET /roles/:id', () => {
// //     mocha.before((done) => {
// //         cn.connect();
// //         done();
// //     })
// //     mocha.after((done) => {
// //         cn.close();
// //         done();
// //     });

// //     mocha.it('OK, find role', (done) => {
// //         var model = role.Role;
// //         model.find({ clientkey: 'USER' }).then((role) => {
// //             console.log(role);
// //             done();
// //         });
// //     });
// // });