const express = require('express');
const router = express.Router();

router.route('/lstm')
    .get((req, res) => {
        res.locals.title = "LSTM"
        res.render('lstm');
    });

module.exports = router;
