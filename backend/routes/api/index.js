const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const shelvesRouter = require('./shelves.js')
const gamesRouter = require('./games')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/shelves', shelvesRouter);
router.use('/games', gamesRouter)
module.exports = router;