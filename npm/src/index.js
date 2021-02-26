// Import express and creating our app
const express = require('express')
const app = express()
const routes = require('./Routes/Passwords')


// app config
app.set('title','ApiRest - password Manager')
app.set('port',3001)

// Mysql connection to database
const connection = require('./connection')

//midleware
const Middleware = require('./MiddleWares/logged')



// Import Routes

app.use(Middleware.logged)
app.use(routes)


//app running
app.listen(app.get('port'),() =>{
    console.log(app.get('title') + ` Running in port ${app.get('port')}`)
})
