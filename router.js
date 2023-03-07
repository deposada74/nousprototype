const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.render('index.ejs');
})

router.get('/inicio', (req, res) => {
    res.render('index.ejs');
})

router.get('/carrito', (req, res) => {
    res.render('carrito.ejs');
})

router.get('/admin', (req, res) => {
    res.render('admin.ejs');
})

router.get('/ventas', (req, res) => {
    res.render('vender.ejs');
})

router.get('/isu', (req, res) => {
    res.render('isu.ejs');
});

router.get('/perfil', (req, res) => {
    res.render('perfil.ejs');
});

router.get('/politicas', (req, res) => {
    res.render('politicas.ejs');
});

router.get('/hombre', (req, res) => {
    res.render('hombre.ejs');
})

router.get('/mujer', (req, res) => {
    res.render('mujer.ejs');
})

router.get('/niño', (req, res) => {
    res.render('children.ejs');
})

router.get('/deportes', (req, res) => {
    res.render('deportes.ejs');
})

router.get('/papeleria', (req, res) => {
    res.render('papeleria.ejs');
})

/* Se exrporta el modulo router */
module.exports = router;