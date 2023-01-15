const router = require('express').Router();
const publicationService = require('../services/publicationService')
const { isAuth} = require('../middlewares/authMiddleware')

router.get('/gallery', async (req,res) => {
    const publications = await publicationService.getAll().lean()

    res.render('publications/gallery', {publications})
});



module.exports = router;