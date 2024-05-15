var express = require('express');
var router = express.Router();
const ctrl = require("../controllers/meals");

/* GET page. */
router.get('/', ctrl.meals);

module.exports = router;
