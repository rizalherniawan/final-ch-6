const userList = require('express')()
const  userController  = require('../controller/userlistController.js')

userList.get('/', userController.viewAll)
userList.get('/add', userController.getAddFunction)
userList.post('/add', userController.addFunction)
userList.get('/edit/:id', userController.getEditFunction)
userList.post('/edit/:id', userController.editFunction)
userList.get('/delete/:id', userController.deleteFunction)


module.exports = userList