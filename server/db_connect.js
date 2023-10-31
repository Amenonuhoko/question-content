// db.js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost', // or your MySQL server IP
  port     : 3306,        // default port for MySQL
  user     : 'root',      // your MySQL username
  password : '',  // your MySQL password
  database : 'at3' // your database name
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting: ' + error.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
