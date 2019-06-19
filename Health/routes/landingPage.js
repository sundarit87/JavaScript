const express = require('express')
const router = express.Router()

//route

router.get('/',(req,res)=>{
    res.render('landingPage')
})

router.post('/',(req,res)=>{
   // console.log('redirect')
    res.redirect('/doctor')
})

module.exports = router;