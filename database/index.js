
const pg = require('pg');
const Promise = require('bluebird');

exports.connectPg = (queryStr, callback) => {
  const connectionString = 'postgres://localhost:3000/fetcher';
//   var config = {
//   user: 'kenlyhui', //env var: PGUSER
//   database: 'postgres', //env var: PGDATABASE
//   password: '', //env var: PGPASSWORD
//   host: 'localhost', // Server hosting the postgres database
//   port: 3000, //env var: PGPORT
//   max: 10, // max number of clients in the pool
//   idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// };
  const client = new pg.Client(connectionString);
  client.connect();
  client.query(queryStr, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(data);
    }
  });
  client.query(queryStr);
  // client.end();

};

// exports.connectMySql = (sql, callback) => {
//   let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'student',
//     password: 'student',
//     database: 'chat'
//   });

//   connection.connect();

//   connection.query(sql, (err, result) => {
//     console.log('queryString: ', sql);
//     if (err) { console.log('****** FAILED ******', err); }
//     console.log('mySQL result: ', result);
//     if (callback) { callback({results: result}); }
//   });

//   connection.end();
// };