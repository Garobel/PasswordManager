// databases conection
const connection = require('../connection')
const bcrypt = require('bcrypt')


const GetCreatePassword = (req,res) => {
    res.render('CreatePassword')
}

const CreatePassword = (req,res)=>{

    //Passwrod encryption 
    const PassCrypt = bcrypt.hashSync(req.body.password, 10)
    // sql query
    const sql = `insert into passwords SET web='${req.body.web}', user_name='${req.body.user_name}' , password='${PassCrypt}'`
    
    connection.query(sql,PassCrypt,(err,result)=>{

        if(err){

            console.log('error ocurring when introducing the data from the form')
            console.log(err)
        }else{

            console.log('information registered')
            res.redirect('/password')
        }
    })
    
}

const ShowPassword = (err,res) =>{
    res.render('CreatePassword')
    
}

const AllPassword = (err,res) => {
    res.render('AllPassword')
}

const DeletePass = (err,res) => {
    res.render('DeletePassword')

}

const ModifyPass = (err,res) => {
    res.render('UpdatePassword')

}

module.exports = {CreatePassword,ShowPassword,AllPassword,DeletePass,ModifyPass,GetCreatePassword}