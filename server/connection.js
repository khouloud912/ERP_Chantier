const mysql=require("mysql");

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gprojet',
    multipleStatements:true,
    dialect: "mysql",
});
mysqlConnection.connect((err)=>{
    if(!err){
        console.log("connection succeded");

    }else{
        console.log("connection failed");
    }
})

module.exports = mysqlConnection;