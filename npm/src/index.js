// Import express and creating our app
const express = require('express')
const app = express()
const routes = require('./Routes/Passwords')
const path = require ('path')


// app config
app.set('title','ApiRest - password Manager')
app.set('port',3001)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

// Mysql connection to database
const connection = require('./connection')

//midleware
const Middleware = require('./MiddleWares/logged')
const router = require('./Routes/Passwords')
app.use(express.urlencoded({extended: false}))


// Import Routes

app.use(Middleware.logged)
app.use(router)


// Path of our static files
app.use(express.static(path.join(__dirname,'public')))


//app running
app.listen(app.get('port'),() =>{
    console.log(app.get('title') + ` Running in port ${app.get('port')}`)
})
