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

const friends = [1,2,3]

//routes
app.get('/', (req,res)=>{
    res.send("hello")
});

app.get('/home', (req,res)=>{
    res.render("home", {friends:friends})
});

app.get('/login', (req,res)=>{
    res.render("login")
});

app.get('/addfriend', (req,res)=>{
    res.render('addfriend')
})

app.post('/addfriend', (req,res)=>{
    console.log(req.body.friends)
    friends.push(req.body.friends)
    res.redirect('/home')
})
// app.get('/', (req,res)=>{
//     res.send("hello")
// });

app.listen(port, ()=>console.log(`app is listening at ${port}`))
