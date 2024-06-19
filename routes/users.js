var express = require('express');
const { get_vendors } = require('../controllers/vendors');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user resource');
});

router.get("/getVendorUsers", get_vendors)
module.exports = router;
