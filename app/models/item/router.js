// Vendor
const Router = require('express').Router;

// controller
const item = require('./index');

const router = new Router();

router.route('/')
  .get((...args) => item.getAll(...args))
  .post((...args) => item.create(...args));

router.route("/:id")
  .put((...args) => item.update(...args))
  .get((...args) => item.findById(...args))
  .delete((...args) => item.remove(...args));

module.exports = router;
