var express = require('express');
var crud = require('../controllers/crud.js');

var router = express.Router();

router.get('/',crud.showAll);
router.get('/insert',crud.insert);
router.post('/store',crud.store);
router.get("/edit/:id", crud.edit);
router.post("/update/:id", crud.update);
router.get("/delete/:id", crud.delete);

module.exports = router;