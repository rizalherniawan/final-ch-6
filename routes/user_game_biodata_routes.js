const biodata = require('express')()
const biodataController = require('../controller/biodataController.js')

biodata.get('/', biodataController.viewAll)
biodata.get('/add',biodataController.getAddFunction)
biodata.post('/add',biodataController.addFunction)
biodata.get('/edit/:id',biodataController.getEditFunction)
biodata.post('/edit/:id',biodataController.editFunction)
biodata.get('/delete/:id',biodataController.deleteFunction)



module.exports = biodata