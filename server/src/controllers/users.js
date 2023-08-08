const Users = require('../models/users')

const registerNewUser = async(req,res) => {
    // User already existed
    const matched = await Users.exists({email: req.body.email})
    if(matched){
        res.status(409).json({
            msg: 'User Alredy Exists'
        })
    }else{
        await Users.create(req.body)
        res.status(201).json({
            msg: 'User Created Successfully'
        })
    }
    console.log(req.body)
    
}

module.exports = {registerNewUser};