const express = require('express');
const pagerouter = express.Router();

pagerouter.get('/', (req, res) => {
    res.render('index', { title: 'ACCU DESIGN' });
});

pagerouter.get('/about', (req, res) => {
    res.render('html/About', { title: 'About Page' });
});

pagerouter.get('/contact', (req, res) => {
    res.render('html/contact', { title: 'Contact Page' });
});

pagerouter.get('/our-services', (req, res) => {
    res.render('html/our-services', { title: 'Our-Services Page' });
});

pagerouter.get('/machining', (req, res) => {
    res.render('html/machining', { title: 'Machining Page' });
});

pagerouter.get('/laser-cutting', (req, res) => {
    res.render('html/laser', { title: 'Laser-Cutting Page' });
});

pagerouter.get('/gear', (req, res) => {
    res.render('html/gear', { title: 'Gear Page' });
});

pagerouter.get('/casting', (req, res) => {
    res.render('html/casting', { title: 'Casting Page' });
});

pagerouter.get('/fabrication', (req, res) => {
    res.render('html/fabrication', { title: 'Our-Services Page' });
});

pagerouter.get('/bending', (req, res) => {
    res.render('html/bending', { title: 'Bending Page' });
});
pagerouter.get('/3d-printing', (req, res) => {
    res.render('html/3d-printing', { title: '3d-Printing Page' });
});

pagerouter.get('/wire-cutting', (req, res) => {
    res.render('html/cutting', { title: 'Cutting Page' });
});

module.exports = pagerouter;