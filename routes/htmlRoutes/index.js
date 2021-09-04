const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/create', (req, res) => {
    res.render('create')
})

module.exports = router;