const promise = require('bluebird');
const difference = require('underscore').difference;
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

let getRandomImage = (part) => {
  db.any(`select id from ${part} order by id desc limit 1`)
    .then(maxId => {
      return Math.floor(Math.random * (maxID));
    })
    .then(id => {
      return getImage(id, part);
    })
    .catch(error => {
      console.log(error);
    });
};

let getImage = (id, part) => {
  db.any(`select _path from ${part} where id = ${id}`)
    .then(path => {
      return path;
    })
    .catch(err => {
      console.log(error);
  });
}

exports.twoImages = function(part, callback) {
  let arr1 = ['head', 'torso', 'legs'];
  let diff = _.difference(arr1, [part]);
  let partObj = {};

  // iterate diff 
  diff.forEach((each) => {
    let obj = {};
    obj['path'] = getRandomImage(each);
    partObj[each] = obj;
  });
  return partObj;
}






 
 
