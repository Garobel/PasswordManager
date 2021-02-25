// import module express and Router method
const express = require ('express')

const Router = express.Router()

// Login and Register

Router.post('/',Controllers.Login)
Router.post('/Reg',Controllers.Register)

//Get Routes

//Post Routes