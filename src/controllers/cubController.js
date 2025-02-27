const router = require('express').Router();
const cubeService = require('../services/cubServices');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    cubeService.create({
        name, 
        description, 
        imageUrl, 
        difficultyLevel: Number(difficultyLevel) });
    res.redirect('/');
});

router.get('/details/:cubeId', (req, res) => {
   const { cubeId } = req.params;
   const cube = cubeService.getSingleCube(cubeId);

   if(!cube) {
    res.redirect('/404');
    return;
   }

   res.render('details', {...cube});
});

module.exports = router;