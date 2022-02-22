const fs = require('fs')

class loginController{
    static renderLogin(req,res){
        res.render('home.ejs')
    }

    static loginPage(req,res){
        const { username, password } = req.body
        const data = JSON.parse(fs.readFileSync('./data/user.json', 'utf-8'))
        const users = {
            "username": req.body.username,
            "password": req.body.password
        }
        const findUser = data.find(item => item.username === users.username)
        if(!findUser){
            message.push('User not found')
        } else {
            if(findUser.password !== users.password){
                res.status(400).json({
                    message:"password is incorrect"
                })
            } else {
                res.redirect('/userlist')
            }
        }
    }
}

module.exports = loginController