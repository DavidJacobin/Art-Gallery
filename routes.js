const router = require('express').Router();

homeController = require('./controllers/homeController');
authController = require('./controllers/authController');
galleryController = require('./controllers/galleryController');
detailsController = require('./controllers/publicationController');
editController = require('./controllers/editController');
createController = require('./controllers/createController');

router.use(homeController);
router.use(authController);
router.use(detailsController)
router.use(createController);
router.use(galleryController);
router.use(editController);



module.exports = router;