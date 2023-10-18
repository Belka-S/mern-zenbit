const { Router } = require('express');

const router = Router();

const authRouter = require('./api/auth');
const contactsRouter = require('./api/items');

router.use('/auth', authRouter);
router.use('/items', itemsRouter);

module.exports = router;
