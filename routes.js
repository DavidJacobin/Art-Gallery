const router = require('express').Router();

homeController = require('./controllers/homeController');

router.use(homeController);


module.exports = router;