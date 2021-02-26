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

const Register = (req,res) => {
    
    //password encryption

    const data2 = bcrypt.hashSync(data.password, 10)

    // sql query
    const sql = `insert into users SET name='${data.name}' , email='${data.email}' , password='${data2}'`
    
    // crating the users

    connection.query(sql,(err,result) => {

        if(err){
            console.log(`error when registering data: ${err} `)
        }else{
            console.log('User Created')

        }
    })

}

const Login = (req,res) => {

    // sqlquery 
  
        const sql = `select * FROM users WHERE email='${data.email}'`
         
        connection.query(sql,(err,result) => {

            // if array or sql result is empty
            
            if(result.length > 0 ) {

                
                // check passwords from the db
                if(bcrypt.compareSync(data.password , result[0].password)){

                    console.log('welcome')
                }else{

                    console.log('pasword or email incorrect')
                }
            }else{

                console.log('email or password incorrect')
            }
        })
    

}

module.exports = {Register,Login}