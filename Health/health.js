const express = require('express')
const app = express()
const port = 8080;
const path = require('path')
const bodyParser = require('body-parser')
//it will act as middle ware
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

console.log(__dirname)
//connect app.js with public folder
//body parser
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))


const appRouter = require('./routes/landingPage')

const doctorlistRouter = require('./routes/doctorlist')

const bookRouter = require('./routes/booking')

app.use('/', appRouter)

app.use('/doctor', doctorlistRouter)

app.use('/book', bookRouter)

app.listen(port, ()=>console.log(`port is running ${port}`))