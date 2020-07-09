import mysql from 'mysql';

const con = mysql.createConnection({
    host: process.env.NODE_ENV === "development" ? "localhost" : process.env.DB_HOSTNAME,
    user: process.env.NODE_ENV === "development" ? "root" : process.env.USER,
    port: process.env.NODE_ENV === "development" ? 3306 : process.env.PORT,
    password: process.env.NODE_ENV === "development" ? "godfather" : process.env.PASSWORD,
    database: process.env.NODE_ENV === "development" ? "godfather" : process.env.DATABASE,
    multipleStatements: true,
});

export default con;