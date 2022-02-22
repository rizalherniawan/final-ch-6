const login = require('express')()

const loginController = require('../controller/adminlogin')

login.get('/',loginController.renderLogin)
login.post('/',loginController.loginPage)

module.exports = login