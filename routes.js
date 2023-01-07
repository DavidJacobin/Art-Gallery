const router = require('express').Router();

homeController = require('./controllers/homeController');
authController = require('./controllers/authController');

router.use(homeController);
router.use(authController);


module.exports = router;