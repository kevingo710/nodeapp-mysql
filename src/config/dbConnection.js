const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '13.84.40.107',
    port: '3306',
    user: 'root',
    password: 'kevinsecret2020',
    database: 'spotify'
  });
}
