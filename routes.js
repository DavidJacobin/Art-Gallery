const router = require('express').Router();

homeController = require('./controllers/homeController');
authController = require('./controllers/authController');
createController = require('./controllers/publicationController');

router.use(homeController);
router.use(authController);
router.use(createController);



module.exports = router;