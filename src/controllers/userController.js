const router = require('express').Router();

router.get('/register', (req, req) => {
    res.render('user/register');
})

module.exports = router;