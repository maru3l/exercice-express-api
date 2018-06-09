const Router = require('express').Router;
const router = new Router();

const item = require('./models/item/router');

router.use('/item', item);

module.exports = router;
