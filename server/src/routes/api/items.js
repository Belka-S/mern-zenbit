const express = require('express');

const ctrl = require('../../controllers');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, ctrl.items.getAll);

module.exports = router;
