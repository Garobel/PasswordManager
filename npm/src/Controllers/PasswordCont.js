// databases conection
const connection = require('../connection')
const bcrypt = require('bcrypt')

// data just to test

const data ={
    name: 'Roberto',
    email: 'roberto@hotmail.com',
    password: '8737'
}


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

}

module.exports = {Register,Login}