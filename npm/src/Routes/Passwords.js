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
router.get('/password',PasswordsCont.GetCreatePassword)
router.get('/getpassword',PasswordsCont.ShowPassword)
router.get('/allPasswords',PasswordsCont.AllPassword)
router.get('/deletePass/:id',PasswordsCont.DeletePass)
router.get('/ModifyPass/:id',PasswordsCont.ModifyPass)
//Post Routes
router.post('/password',PasswordsCont.CreatePassword)
router.post('/deletePass/:id',PasswordsCont.PostDeletePass)
router.post('/ModifyPass/:id',PasswordsCont.PostModifyPass)


module.exports = router