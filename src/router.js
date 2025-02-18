const router = require('express').Router();
const homeController = require('./controllers/homeController');
const cubController = require('./controllers/cubController');

router.use(homeController);
router.use('/cubes', cubController);

router.get('*', (req, res) => {
    res.redirect("/404");
});

module.exports = router;