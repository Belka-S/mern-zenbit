const express = require('express');

const ctrl = require('../../controllers');
const validate = require('../../validation');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, ctrl.contacts.getAll);

module.exports = router;
