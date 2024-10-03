const {User} = require("../model/user.model")


  const signupUser = async(req, res) =>{
    const {username, fullName, email, password} = req.body;
        
        const user = await User.create({
            username,
            fullName,
            email,
            password,
    
        })
    
        return res.status(200).json({user})
}

module.exports = {
    signupUser,
}

