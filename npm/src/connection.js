//import mysql module and mysql databse configuration
const mysql = require('mysql')
const {mysql_database} = require('./config')
const {mysql_database2} = require('./config')

//creating the connection with the database and managing err

const connection = mysql.createConnection(mysql_database,mysql_database2)



connection.connect((err,conn) => {

    if(err){

        console.log(`An error has occurred : ${err}`)
    }
    else{

        console.log('Connected to the data base')

        return conn

    }
})