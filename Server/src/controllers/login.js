const users = require("../utils/users")

const login = (req,res) => {
    // console.log(req.query)
    const {email, password} = req.query
    
    const userFound = users.find((user) => user.email === email && user.password === password);

    if(userFound) return res.status(200).json({access:true})
    return res.status(404).json({access:false})
}

module.exports = {login};