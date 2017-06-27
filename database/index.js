const promise = require('bluebird');
const options = {
    promiseLib: promise
};
const pgp = require('pg-promise')(options);

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'mydb',
    user: 'kenlyhui',
    password: ''
};
const db = pgp(cn);

exports.query = function(queryStr, callback){

  db.any(queryStr, [true])
    .then(data => {
        callback(data);
    })
    .catch(error => {
        callback(error);
    })
    .finally(() => {
        pgp.end();
    });

};






 
 
