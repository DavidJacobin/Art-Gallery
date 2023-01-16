const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const publicationService = require('../services/publicationService');

router.get('/details/:id', async (req, res) => {
    const publication = await publicationService.getOneDetailed(req.params.id).lean();
    const isAuthor = publication.author._id == req.user?._id

    res.render('publications/details', { ...publication, isAuthor })
});

router.get('/edit/:id', async (req, res) => {
    const publication = await publicationService.getOne(req.params.id).lean();

    res.render('publications/edit', { ...publication })
});

router.post('/edit/:id', isAuth, async (req, res) => {
    await publicationService.update( req.params.id, req.body);

    res.redirect(`/details/${req.params.id}`)
});

router.get('/delete/:id', isAuth, async (req, res) => {
    await publicationService.delete( req.params.id);

    res.redirect('/gallery')
});

router.get('/create', isAuth, (req, res) => {
    res.render('publications/create')
});


router.post('/create', isAuth, async (req, res) => {
    const createPublication = await publicationService.create({ ...req.body, author: req.user._id });

    res.redirect('/gallery')
});


module.exports = router;