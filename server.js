const express = require('express')
const router = require('./routes/index.js')
const app = express()
const PORT = 9500

app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log(`succedfully connected to port: ${PORT}`)
})