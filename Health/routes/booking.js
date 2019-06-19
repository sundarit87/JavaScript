const express = require('express')
const router = express.Router()

//route
// /book
router.get('/',(req,res)=>{
    res.render('booking')
})

router.post('/',(req,res)=>{
    console.log('redirect')
    res.redirect('/book')
})

module.exports = router;