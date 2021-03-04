const VerifyToken = (req,res,next) => {

    console.log('Running Midleware')

    const authorisation_header = req.headers['authorisation']

    if (authorisation_header !== undefined){

        console.log(authorisation_header)

        const token = authorisation_header.split(" ")[1]

        req.token= token

        next()

    }else{
        console.log('Token not recognised')
        
    }
    
}
exports.VerifyToken = VerifyToken