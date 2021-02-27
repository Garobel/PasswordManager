// import module express and Router method
const express = require ('express')
const router = express.Router()


//controllers import
const UsersAccount = require('../Controllers/UsersAccount')
const PasswordsCont = require('../Controllers/PasswordsCont')

// Login and Register

router.post('/login',UsersAccount.Login)
router.post('/reg',UsersAccount.Register)

//Get Routes
router.get('/getpassword',PasswordsCont.ShowPassword)
router.get('/allPasswords',PasswordsCont.AllPassword)
//Post Routes
router.get('/password',PasswordsCont.CreatePassword)
router.get('/deletePass',PasswordsCont.DeletePass)
router.get('/ModifyPass',PasswordsCont.ModifyPass)


module.exports = router