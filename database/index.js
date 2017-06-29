const Promise = require('bluebird');
const difference = require('underscore').difference;
const options = {
    promiseLib: Promise
};
const pgp = require('pg-promise')(options);
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'mydb',
    user: 'postgres',
    password: 'postgres'
};
const db = pgp(cn);
<<<<<<< HEAD
exports.db = db;
exports.query = function(queryStr, callback){
=======

let query = function(queryStr, callback){
>>>>>>> 'june28 1807 saveimagefunc'

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

let getImage = (id, part, callback) => {
  db.any(`select _path from ${part} where id = ${id}`)
    .then(path => {
      callback(path[0]._path);
    })
    .catch(err => {
      console.log(err);
  });

}
<<<<<<< HEAD
=======
let getRandomImage = (part,callback) => {
>>>>>>> 'june28 1807 saveimagefunc'

exports.getRandomImage = (part,callback) => {
  db.any(`select id from ${part} order by id desc limit 1`)
    .then(maxId => {
      var id = maxId[0].id;
      return Math.floor(Math.random() * (id)) + 1;
    })
    .then(id => {
      getImage(id, part, callback);
    })
    .catch(error => {
      console.log(error);
  });
};

<<<<<<< HEAD
exports.getTwoImages = function(part, callback) {
  let arr1 = ['head', 'torso', 'legs'];
  let diff = difference(arr1, [part]);
  let partObj = {};

  console.log(getRandomImage('head'));
  // iterate diff 
  diff.forEach((each) => {
    let obj = {};
    getRandomImage(each, (data) => {
      obj[each] = data;
      partObj[each] = obj;
=======
exports.getTwoImages = (part, callback) => {
  let arr1 = ['head', 'torso', 'legs'];
  let diff = difference(arr1, [part]);
  let partA = diff[0], partB = diff[1];

  var obj = {};
  getRandomImage(partA, (data) => {
    obj[partA] = data;
    getRandomImage(partB, (data) => {
      obj[partB] = data;
      callback(obj)
>>>>>>> 'june28 1807 saveimagefunc'
    });
  });
<<<<<<< HEAD

};

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/exquisite');

// var db = mongoose.connection;

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

// var userSchema = mongoose.Schema({  
//   facebook: {
//     id: String,
//     token: String,
//     email: String,
//     name: String,
//     username: String,
//   }
// });
// module.exports = mongoose.model('User', userSchema);
// {obj{head: abc_path}, obj{torso: def_path}}



=======
};
>>>>>>> 'june28 1807 saveimagefunc'

exports.savePartImage = (userId, part, path) => {
  var queryStr = `insert into ${part} (_path, user_id) values ('${path}', ${userId})`;
  query(queryStr, (data) => {
    console.log(data);
  });
};


 
 
