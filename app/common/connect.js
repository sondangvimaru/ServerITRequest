var mysql=require('mysql');
var connection=mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'quanlysupportit'
});
connection.connect(function(err, connection){
    if(err){
        console.log("khong ket noi dc csdl");
        process.exit();
    }
});
module.exports = connection;