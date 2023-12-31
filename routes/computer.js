const express = require('express');
const router = express.Router();

router.route('/build_computer_intro')
    .get((req, res) => {
        res.render('build_computer_intro');
    });

module.exports = router;
