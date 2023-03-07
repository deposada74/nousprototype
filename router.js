const express = require('express');
const router = express.Router();

router.get('', (req,res)=>{
    res.render('index.ejs');
})

router.get('/inicio', (req,res)=>{
    res.render('index.ejs');
})

router.get('/mujer', (req,res)=>{
    res.render('mujer.ejs');
})

router.get('/hombre', (req,res)=>{
    res.render('hombre.ejs');
})

router.get('/inicio', (req,res)=>{
    res.render('Index');
});

router.get('/isu', (req,res)=>{
    res.render('isu');
});

router.get('/perfil', (req,res)=>{
    res.render('perfil');
});

module.exports = router;