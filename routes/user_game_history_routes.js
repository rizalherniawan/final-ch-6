const history = require('express')()
const historyController = require('../controller/historyController.js')

history.get('/', historyController.viewAll)
history.get('/add', historyController.getAddFunction)
history.post('/add',historyController.addFunction)
history.get('/edit/:id',historyController.getEditFunction)
history.post('/edit/:id',historyController.editFunction)
history.get('/delete/:id',historyController.deleteFunction)

module.exports = history