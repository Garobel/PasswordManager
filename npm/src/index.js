// Import express and creating our app
const express = require('express')
const app = express()

// app config
app.set('title','ApiRest - password Manager')
app.set('port',3001)

// Mysql connection to database
const connection = require('./connection')




//app running
app.listen(app.get('port'),() =>{
    console.log(app.get('title') + ` Running in port ${app.get('port')}`)
})
