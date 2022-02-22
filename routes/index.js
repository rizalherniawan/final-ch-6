const router = require('express')()
const login = require('./login-page.js')
const userList = require('./user_game.js')
const biodata = require('./user_game_biodata_routes.js')
const history = require('./user_game_history_routes.js')

router.use(login)
router.use('/biodata', biodata)
router.use('/userlist', userList)
router.use('/historicaldata', history)

module.exports = router