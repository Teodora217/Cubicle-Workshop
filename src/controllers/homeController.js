const router = require('express').Router();
const cubeService = require('../services/cubServices');

router.get('/', (req, res) => {
    const cubes = cubeService.getAll();
    console.log({cubes});
    res.render('index', {cubes});
});


router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});


module.exports = router;