const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const shelvesRouter = require('./shelves.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/shelves', shelvesRouter);
module.exports = router;