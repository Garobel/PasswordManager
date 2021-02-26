const logged = (req,res,next) => {
    
    console.log('Middlewarw Running')
    next()
    
}

exports.logged = logged