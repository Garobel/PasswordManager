// databases conection
const connection = require('../connection')
const bcrypt = require('bcrypt')


const GetCreatePassword = (req,res) => {
    res.render('CreatePassword')
}

const CreatePassword = (req,res)=>{

        // sql query
        const sql = `insert into passwords SET web='${req.body.web}', user_name='${req.body.user_name}' , email='${req.body.email}' , password='${req.body.password}'`
        
        connection.query(sql,(err,result)=>{

            if(err){

                console.log('error ocurring when introducing the data from the form')
                console.log(err)
            }else{

                console.log('information registered')
                res.redirect('/allpasswords')
            }
        })
    

}

const ShowPassword = (req,res) =>{
    res.render('CreatePassword')
    
}

const AllPassword = (req,res) => {

    sql = 'select * from passwords'

    connection.query(sql,(err,result)=>{

        if (err) {
            console.log('Error trying to get the information from db')
        }
        else{

            
            res.render('AllPassword',{Data:result})

        }
    })
    
}

const DeletePass = (req,res) => {

    sql = `select * from passwords WHERE id=${req.params.id}`

    connection.query(sql,(err,result) => {

        if (err) {

            console.log('Error trying to get the information from db')

        }
       else{

           res.render('DeletePassword' ,{Data:result} )
       }
   })

}

const PostDeletePass = (req,res) => {

    sql=`DELETE from passwords where id=${req.params.id}`

    connection.query(sql,(err,result) =>{

        if(err){

            console.log('Error trying to delete the data from de db')
        }
        else{

            res.redirect('/allpasswords')
        }
    })
}

const ModifyPass = (req,res) => {

    sql = `select * from passwords WHERE id=${req.params.id}`

     connection.query(sql,(err,result) => {

         if (err) {

             console.log('Error trying to get the information from db')

         }
        else{

            res.render('UpdatePassword' ,{Data:result} )
        }
    })
    

}

const PostModifyPass = (req,res) => {

    //ID information
    const param = req.params.id

    // sql query
    sql = `update passwords SET web='${req.body.web}', user_name='${req.body.user_name}' , email='${req.body.email}' , password='${req.body.password}' WHERE id=${param}`

    connection.query(sql,(err,result) => {

        if(err){

            console.log('Error trying to update the information')

        }
        else{

            console.log('Information updated')
            res.redirect('/allpasswords')
        }
    })

}

module.exports = {CreatePassword,ShowPassword,AllPassword,DeletePass,ModifyPass,GetCreatePassword,PostModifyPass,PostDeletePass}