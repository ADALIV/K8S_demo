const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'mysql-service',
    port: 3306,
    user: 'root',
    password: 'rootpassword',
    database: 'myappdb',
});


db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
    
    connection.release();
});

module.exports = db;
