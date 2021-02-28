const logged = (req,res,next) => {
    
    console.log('Middlewarw Running')
    next(console.log())
    
}

exports.logged = logged