const router = require('express').Router();

const publicationService = require('../services/publicationService')
const { isAuth} = require('../middlewares/authMiddleware')

router.get('/', async(req,res) => {
    const publications = await publicationService.getAll().lean()


    res.render('home', {publications});
});



module.exports = router;