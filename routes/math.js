const express = require('express');
const router = express.Router();

router.route('/combinatorics')
    .get((req, res) => {
        res.locals.title = "Combinatorics"
        res.render('combinatorics');
    });

module.exports = router;
