const mySql = require('mysql2');
const database = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "ismayil5575",
    database: "blog-list"
})

module.exports=database;