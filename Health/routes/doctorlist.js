const express = require('express')
const router = express.Router()

//route
// /doctor
router.get('/',(req,res)=>{
    res.render('doctorlist')
})

router.post('/',(req,res)=>{
    console.log('redirect')
    res.redirect('/book')
})

module.exports = router;