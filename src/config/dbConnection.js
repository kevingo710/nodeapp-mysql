const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '1.1.1.1',
    port: '1111',
    user: '1111',
    password: '11111',
    database: '111111'
  });
}
