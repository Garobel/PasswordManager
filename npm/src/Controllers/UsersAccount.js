// databases conection
const connection = require('../connection')
const bcrypt = require('bcrypt')


// data just to test

const data ={
    name: 'Roberto',
    email: 'roberto@hotmail.com',
    password: '8737'
}

//POST ROUTES

const GetRegister = (req,res) => {

    res.render('CreateUser')
}

const Register = (req,res) => {
    
    if((req.body.email.length > 0 )&& (req.body.password.length > 0) ){

        //password encryption

        const data2 = bcrypt.hashSync(req.body.password, 10)

        // sql query
        const sql = `insert into users SET name='${req.body.name}' , email='${req.body.email}' , password='${data2}'`
        
        // crating the users

        connection.query(sql,(err,result) => {

            if(err){
                console.log(`error when registering data: ${err} `)
            }else{
                console.log('User Created')
                res.redirect('/')

            }
        })
    }else{
        console.log('No information provided')
        res.redirect('/reg')
    }
}

const getLogin = (req,res) => {

    res.render('index')
}

const Login = (req,res) => {

    // sqlquery 
        const sql = `select * FROM users WHERE email='${req.body.email}'`
         
        connection.query(sql,(err,result) => {

            // if array or sql result is empty
            
            if((req.body.email.length > 0 )&& (req.body.password.length > 0) ) {

                
                // check passwords from the db
                if(bcrypt.compareSync(req.body.password , result[0].password)){

                    console.log('welcome')

                    res.redirect('/allpasswords')

                }else{

                    console.log('pasword or email incorrect')
                    res.redirect('/')
                }
            }else{

                console.log('email or password incorrect')
                res.redirect('/')
            }
        })
    

}

module.exports = {Register,Login,getLogin,GetRegister}