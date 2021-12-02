const router = require('express').Router();
const appRoutes = require('./app-routes');
const userRoutes = require('./user-routes');

router.use('/apps', appRoutes);
router.use('/user', userRoutes);

module.exports = router;
