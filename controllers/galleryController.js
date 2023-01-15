const router = require('express').Router();

const { isAuth} = require('../middlewares/authMiddleware')

router.get('/gallery',isAuth, (req,res) => {
    res.render('publications/gallery')
});



module.exports = router;