const router = require('express').Router();

const appRoutes = require('./apis/app-routes');
const userRoutes = require('./apis/user-routes')

router.use('/apps', appRoutes);
router.use('/user', userRoutes)

module.exports = router;