const router = require('express').Router();

homeController = require('./controllers/homeController');
authController = require('./controllers/authController');
createController = require('./controllers/publicationController');
galleryController = require('./controllers/galleryController');
editController = require('./controllers/editController');

router.use(homeController);
router.use(authController);
router.use(createController);
router.use(galleryController);




module.exports = router;