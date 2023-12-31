const express = require('express');
const router = express.Router();

router.route('/combinatorics')
    .get((req, res) => {
        res.render('combinatorics');
    });

module.exports = router;
