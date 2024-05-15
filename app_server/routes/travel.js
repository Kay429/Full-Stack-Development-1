var express = require('express');
var router = express.Router();
const ctrl = require("../controllers/travel");

/* GET home page. */
router.get('/', ctrl.travel);

module.exports = router;
