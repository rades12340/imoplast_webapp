import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "godfather",
    database: "my_db",
    multipleStatements: true,
});

export default con;