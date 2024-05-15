var express = require('express');
var router = express.Router();
const ctrl = require("../controllers/contact");

/* GET page. */
router.get('/', ctrl.contact);

module.exports = router;
