const router = require('express').Router();

homeController = require('./controllers/homeController');
loginController = require('./controllers/loginController');

router.use(homeController);
router.use(loginController);


module.exports = router;