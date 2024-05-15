var express = require('express');
var router = express.Router();
const ctrl = require("../controllers/about");

/* GET page. */
router.get('/', ctrl.about);

module.exports = router;
