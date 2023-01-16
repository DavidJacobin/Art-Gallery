const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const publicationService = require('../services/publicationService');

router.get('/details/:id', async (req, res) => {
    const publication = await publicationService.getOneDetailed(req.params.id).lean();
    const isAuthor = publication.author._id == req.user?._id

    res.render('publications/details', { ...publication, isAuthor })
});

router.get('/delete/:id', isAuth, async (req, res) => {
    await publicationService.delete( req.params.id);

    res.redirect('/gallery')
});

module.exports = router;