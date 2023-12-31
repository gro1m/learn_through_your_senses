const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('index');
    });


router.route('/about_me').get((req, res) => {
    res.render('about_me');
});

router.route('/blog').get((req, res) => {
    res.render('blog');
});

module.exports = router;
