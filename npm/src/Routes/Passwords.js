// import module express and Router method
const express = require ('express')
const router = express.Router()


//controllers import
const Controllers = require('../Controllers/PasswordCont')

// Login and Register

router.post('/login',Controllers.Login)
router.post('/reg',Controllers.Register)

//Get Routes

//Post Routes

module.exports = router