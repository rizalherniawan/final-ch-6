const router = require('express')()
const fs = require('fs')
const userList = require('./user_game.js')
const biodata = require('./user_game_biodata_routes.js')
const history = require('./user_game_history_routes.js')

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.post('/',(req,res) => {
    const {username, password} = req.body
    const users = fs.readFileSync('data/user.json','utf-8')
    const parsedUsers = JSON.parse(users)
    const newUser = {
        "username": req.body.username,
        "password": req.body.password
    }
    const userFound = parsedUsers.find(item => item.username === newUser.username)
    if(!userFound){
        message.push('user is not found')
    } else {
        if(userFound.password !== newUser.password){
            res.status(400).json({
                message:"password is incorrect"
            })
        } else {
            res.redirect('/userlist')
        }
    }
})

router.use('/biodata', biodata)
router.use('/userlist', userList)
router.use('/historicaldata', history)

module.exports = router